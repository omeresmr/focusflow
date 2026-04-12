import { useCallback, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import { useTasks } from '../../tasks/contexts/TasksContext';
import { useTimer } from '../contexts/TimerContext';
import { useSettings } from '../../settings/contexts/SettingsContext';

import Card from '../../../shared/ui/card/Card';
import IconButton from '../../../shared/ui/buttons/IconButton';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import CurrentTask from './CurrentTask';
import {
  getCurrentDuration,
  getCurrentSession,
} from '../../../shared/utils/timer.utils';

export default function TimerContent() {
  const { settings } = useSettings();
  const { tasks, completeTaskPomodoro } = useTasks();
  const { timerState, timerTick, handleSessionCompletion, startTimer } =
    useTimer();

  const activeTask = tasks.find((t) => t.id === timerState.activeTaskId);

  const totalMilliseconds = getCurrentDuration(timerState, settings);
  const currentSession = getCurrentSession(timerState, tasks);
  const remainingMilliseconds =
    totalMilliseconds - timerState.millisecondsPassed;
  const AUTO_START_DELAY = 3000;

  const autoStartTimer = useCallback(
    (sessionType: string | undefined) => {
      if (
        (settings.autoStartBreaks && sessionType === 'POMODORO') ||
        (settings.autoStartPomodoros && sessionType === 'BREAK')
      ) {
        // Auto start timer
        setTimeout(() => startTimer(), AUTO_START_DELAY);
      }
    },
    [settings.autoStartBreaks, settings.autoStartPomodoros, startTimer]
  );

  // React to timerTick
  useEffect(() => {
    if (!timerState.isRunning) return;
    const id = setInterval(() => {
      timerTick();
      if (remainingMilliseconds <= 0) {
        const sessionType = handleSessionCompletion(
          tasks,
          completeTaskPomodoro
        );

        autoStartTimer(sessionType);
      }
    }, 100);

    return () => clearInterval(id);
  }, [
    timerState.isRunning,
    remainingMilliseconds,
    handleSessionCompletion,
    timerTick,
    completeTaskPomodoro,
    tasks,
    autoStartTimer,
  ]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && timerState.isRunning)
        timerTick(); // Trigger instant-update
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [timerState.isRunning, timerTick]);

  function handleSkipPhase() {
    const sessionType = handleSessionCompletion(tasks, completeTaskPomodoro);
    autoStartTimer(sessionType);
  }

  return (
    <Card className="flex-col gap-4 self-start">
      <TimerDisplay
        onBreak={timerState.onBreak}
        totalMilliseconds={totalMilliseconds}
        remainingMilliseconds={remainingMilliseconds}
        session={`${currentSession}/${activeTask ? activeTask.estimatedPomodoros : settings.longBreakInterval}`}
      />

      <IconButton
        onClick={handleSkipPhase}
        className={timerState.isRunning ? '' : 'collapse'}
      >
        <ArrowRight className="w-4 h-4" />
      </IconButton>
      <TimerControls />
      <CurrentTask />
    </Card>
  );
}
