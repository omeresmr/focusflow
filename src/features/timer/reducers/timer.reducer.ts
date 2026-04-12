import {
  createInitialTimerState,
  type TimerState,
} from '../models/timer.model';
import type { TaskState } from '../../tasks/models/task.model';

// 1) action type
export type TimerAction =
  | { type: 'timer/started' }
  | { type: 'timer/paused' }
  | { type: 'timer/ticked' }
  | { type: 'timer/reseted' }
  | { type: 'timer/pomodoro_completed' }
  | { type: 'timer/active_task_changed'; payload: TaskState | null };

// 2) reducer function
export default function reducer(state: TimerState, action: TimerAction) {
  switch (action.type) {
    case 'timer/started':
      return { ...state, isRunning: true, startTime: Date.now() };

    case 'timer/paused':
      return { ...state, isRunning: false };

    case 'timer/ticked':
      return {
        ...state,
        millisecondsPassed: Date.now() - state.startTime,
      };

    case 'timer/reseted':
      return createInitialTimerState();

    case 'timer/pomodoro_completed': {
      // only increase counter after a pomodoro
      const newCount = !state.onBreak
        ? state.completedPomodoros + 1
        : state.completedPomodoros;

      return {
        ...state,
        completedPomodoros: newCount,
        onBreak: !state.onBreak,
        millisecondsPassed: 0,
        isRunning: false,
      };
    }

    case 'timer/active_task_changed':
      return {
        ...state,
        activeTaskId: action.payload ? action.payload.id : null,
      };

    default:
      throw new Error('Unknown timer action');
  }
}
