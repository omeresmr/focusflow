export type TaskStatus = 'active' | 'completed' | 'pending';

export interface TaskState {
  id: string;
  name: string;
  estimatedPomodoros: number;
  pomodorosDone: number;
  isActive: boolean;
  isCompleted: boolean;
}
