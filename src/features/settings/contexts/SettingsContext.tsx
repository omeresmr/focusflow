import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  type SettingsState,
  createDefaultSettings,
} from '../models/settings.model';
import reducer from '../reducers/settings.reducer';
import { apiClient } from '../../../shared/api/client';

// 1) Provider value type
type SettingsProviderValue = {
  settings: SettingsState;
  updateSettings: (setting: Partial<SettingsState>) => void;
};

// 2) Prop interface
interface SettingsProviderProps {
  children: React.ReactNode;
}

// 3) Context
const SettingsContext = createContext<SettingsProviderValue | null>(null);

// 4) initialState
const initialState = createDefaultSettings();

// 5) Provider component
export function SettingsProvider({ children }: SettingsProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const data = await apiClient('/settings', { method: 'GET' });
      dispatch({ type: 'settings/loaded', payload: data });
    })();
  }, []);

  const updateSettings = useCallback(
    (setting: Partial<SettingsState>) => {
      dispatch({ type: 'settings/updated', payload: setting });

      const nextState = {
        ...state,
        ...setting,
        durations: {
          ...state.durations,
          ...(setting.durations || {}),
        },
      };

      apiClient('/settings', {
        method: 'PATCH',
        body: JSON.stringify(nextState),
      });
    },
    [state]
  );

  const settingsValue = useMemo(() => {
    return { settings: state, updateSettings };
  }, [state, updateSettings]);

  return (
    <SettingsContext.Provider value={settingsValue}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings can only be used in its provider.');
  return ctx;
};
