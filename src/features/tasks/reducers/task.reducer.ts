import { type TaskState } from '../models/task.model';

// 1) action type
export type TaskAction =
  | { type: 'task/created'; payload: TaskState }
  | { type: 'task/updated'; payload: TaskState }
  | { type: 'task/started'; payload: TaskState }
  | { type: 'task/paused'; payload: TaskState }
  | { type: 'task/session_ended'; payload: TaskState }
  | { type: 'task/completed'; payload: TaskState }
  | { type: 'task/uncompleted'; payload: TaskState }
  | { type: 'task/deleted'; payload: TaskState }
  | { type: 'task/resetted'; payload: TaskState }
  | { type: 'tasks/loaded'; payload: TaskState[] };

// 2) reducer function

function reducer(tasksState: TaskState[], action: TaskAction) {
  switch (action.type) {
    case 'task/created':
      return [...tasksState, action.payload];

    case 'task/updated':
      return tasksState.map((t) =>
        t.id === action.payload.id
          ? {
              ...action.payload,
              isCompleted: t.pomodorosDone >= t.estimatedPomodoros,
            }
          : t
      );

    case 'task/started':
      return tasksState.map((t) =>
        t.id === action.payload.id
          ? { ...t, isActive: true }
          : { ...t, isActive: false }
      );

    case 'task/paused':
      return tasksState.map((t) =>
        t.id === action.payload.id ? { ...t, isActive: false } : t
      );

    case 'task/session_ended': {
      return tasksState.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              pomodorosDone: t.pomodorosDone + 1,
              isCompleted:
                t.pomodorosDone + 1 >= t.estimatedPomodoros
                  ? true
                  : t.isCompleted,
            }
          : t
      );
    }

    case 'task/completed':
      return tasksState.map((t) =>
        t.id === action.payload.id ? { ...t, isCompleted: true } : t
      );

    case 'task/uncompleted':
      return tasksState.map((t) =>
        t.id === action.payload.id ? { ...t, isCompleted: false } : t
      );

    case 'task/deleted':
      return tasksState.filter((t) => t.id !== action.payload.id);

    case 'tasks/loaded':
      return action.payload;

    default:
      throw new Error('Unknown task action');
  }
}

export default reducer;
