import { type SettingsState } from '../models/settings.model';

// 1) Action type
export type SettingsAction = {
  type: 'settings/updated';
  payload: Partial<SettingsState>;
};

// 2) Reducer function
function reducer(state: SettingsState, action: SettingsAction) {
  switch (action.type) {
    case 'settings/updated':
      return {
        ...state,
        ...action.payload,
        durations: { ...state.durations, ...action.payload.durations },
      };

    default:
      throw new Error('Unknown settings action');
  }
}

export default reducer;
