export interface TimerState {
  millisecondsPassed: number;
  completedPomodoros: number;
  onBreak: boolean;
  isRunning: boolean;
  activeTaskId: number | null;
  startTime: number;
}

export const createInitialTimerState = (): TimerState => ({
  millisecondsPassed: 0,
  completedPomodoros: 0,
  onBreak: false,
  isRunning: false,
  activeTaskId: null,
  startTime: 0,
});
