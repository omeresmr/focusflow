import { Clock, Volume2, Zap } from 'lucide-react';
import Description from '../../../shared/ui/description/Description';
import Icon from '../../../shared/ui/icon/Icon';
import ToggleButton from '../../../shared/ui/buttons/ToggleButton';
import SettingsHeader from './SettingsHeader';
import SettingText from './SettingText';
import SettingContainer from './SettingContainer';
import Card from '../../../shared/ui/card/Card';
import SettingNumberInput from './SettingNumberInput';
import { useSettings } from '../contexts/SettingsContext';

// Input constraints
const MIN_NUM_VALUE = 1;
const MAX_NUM_VALUE = 999;

export default function SettingsContent() {
  const { settings, updateSettings } = useSettings();

  // Helper function: constrains numeric input to the allowed range of 1-999
  const clampValue = (n: number) =>
    Math.min(Math.max(n, MIN_NUM_VALUE), MAX_NUM_VALUE);

  return (
    <div className="settings-con">
      <p className="text-2xl font-bold">Settings</p>
      <Description text="Customize your Pomodoro experience" />
      <Card className="flex-col">
        <SettingsHeader
          icon={
            <Icon className="bg-brand-primary/15 text-brand-secondary p-2">
              <Clock className="w-4 h-4" />
            </Icon>
          }
          title="Timer"
          description="Configure your pomodoro timer"
        />
        <SettingContainer className="border-b border-border">
          <SettingText
            title="Focus Session"
            description="Default work period"
          />
          <div className="setting-input-con">
            <SettingNumberInput
              defaultValue={settings.durations.pomodoro}
              onChange={(e) => {
                updateSettings({
                  durations: {
                    ...settings.durations,
                    pomodoro: clampValue(+e.target.value),
                  },
                });
              }}
            />
          </div>
        </SettingContainer>
        <SettingContainer className="border-b border-border">
          <SettingText title="Short Break" description="Quick rest period" />
          <div className="setting-input-con">
            <SettingNumberInput
              defaultValue={settings.durations.shortBreak}
              onChange={(e) => {
                updateSettings({
                  durations: {
                    ...settings.durations,
                    shortBreak: clampValue(+e.target.value),
                  },
                });
              }}
            />
          </div>
        </SettingContainer>
        <SettingContainer className="border-b border-border">
          <SettingText title="Long Break" description="Extended rest period" />
          <div className="setting-input-con">
            <SettingNumberInput
              defaultValue={settings.durations.longBreak}
              onChange={(e) => {
                updateSettings({
                  durations: {
                    ...settings.durations,
                    longBreak: clampValue(+e.target.value),
                  },
                });
              }}
            />
          </div>
        </SettingContainer>
        <SettingContainer>
          <SettingText
            title="Long Break Interval"
            description="Interval between long breaks"
          />
          <div className="setting-input-con">
            <SettingNumberInput
              format="pomos"
              defaultValue={settings.longBreakInterval}
              onChange={(e) => {
                updateSettings({
                  ...settings,
                  longBreakInterval: clampValue(+e.target.value),
                });
              }}
            />
          </div>
        </SettingContainer>
      </Card>
      <Card className="flex-col">
        <SettingsHeader
          icon={
            <Icon className="p-2 bg-violet-600/15 text-violet-600">
              <Zap className="w-4 h-4" />
            </Icon>
          }
          title="Automation"
          description="Auto-start preferences"
        />
        <SettingContainer className="border-b border-border">
          <SettingText
            title="Auto-start breaks"
            description="Start breaks automatically"
          />
          <div className="setting-input-con">
            <ToggleButton
              isToggled={settings.autoStartBreaks}
              onClick={() =>
                updateSettings({
                  ...settings,
                  autoStartBreaks: !settings.autoStartBreaks,
                })
              }
            />
          </div>
        </SettingContainer>
        <SettingContainer>
          <SettingText
            title="Auto-start pomodoros"
            description="Start pomodoros automatically"
          />
          <div className="setting-input-con">
            <ToggleButton
              isToggled={settings.autoStartPomodoros}
              onClick={() =>
                updateSettings({
                  ...settings,
                  autoStartPomodoros: !settings.autoStartPomodoros,
                })
              }
            />
          </div>
        </SettingContainer>
      </Card>
      <Card className="flex-col">
        <SettingsHeader
          icon={
            <Icon className="p-2 bg-green-700/15 text-green-700">
              <Volume2 className="w-4 h-4" />
            </Icon>
          }
          title="Sounds"
          description="Sound preferences"
        />

        <SettingContainer>
          <SettingText title="Sound effects" description="Play sound effects" />
          <div className="setting-input-con">
            <ToggleButton
              isToggled={settings.soundEnabled}
              onClick={() =>
                updateSettings({
                  ...settings,
                  soundEnabled: !settings.soundEnabled,
                })
              }
            />
          </div>
        </SettingContainer>
      </Card>
    </div>
  );
}
