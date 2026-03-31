import { Bell, Clock, Zap } from 'lucide-react';
import Description from '../../../shared/ui/description/Description';
import Icon from '../../../shared/ui/icon/Icon';
import SettingsCard from './SettingsCard';
import ToggleButton from '../../../shared/ui/buttons/ToggleButton';
import SettingsHeader from './SettingsHeader';
import SettingText from './SettingText';

export default function SettingsContent() {
  return (
    <div className="settings-con">
      <p className="text-2xl font-bold">Settings</p>
      <Description text="Customize your Pomodoro experience" />
      <SettingsCard>
        <SettingsHeader
          icon={
            <Icon className="bg-brand-primary/15 text-brand-secondary p-2">
              <Clock className="w-4 h-4" />
            </Icon>
          }
          title="Timer"
          description="Configure your pomodoro timer"
        />

        <div className="setting-con border-b border-border py-4">
          <SettingText
            title="Focus Session"
            description="Default work period"
          />
          <div className="setting-input-con">
            <input className="setting-number-input" type="number" />
            <p className="text-muted-foreground">min</p>
          </div>
        </div>
        <div className="setting-con border-b border-border py-4">
          <SettingText title="Short Break" description="Quick rest period" />
          <div className="setting-input-con">
            <input className="setting-number-input" type="number" />
            <p className="text-muted-foreground">min</p>
          </div>
        </div>
        <div className="setting-con border-b border-border py-4">
          <SettingText title="Long Break" description="Extended rest period" />
          <div className="setting-input-con">
            <input className="setting-number-input" type="number" />
            <p className="text-muted-foreground">min</p>
          </div>
        </div>
        <div className="setting-con pt-4">
          <SettingText
            title="Long Break Interval"
            description="Interval between long breaks"
          />
          <div className="setting-input-con">
            <input className="setting-number-input" type="number" />
            <p className="text-muted-foreground">pomos</p>
          </div>
        </div>
      </SettingsCard>
      <SettingsCard>
        <SettingsHeader
          icon={
            <Icon className="p-2 bg-violet-600/15 text-violet-600">
              <Zap className="w-4 h-4" />
            </Icon>
          }
          title="Automation"
          description="Auto-start preferences"
        />
        <div className="setting-con border-b border-border py-4">
          <SettingText
            title="Auto-start breaks"
            description="Start breaks automatically"
          />
          <div className="setting-input-con">
            <ToggleButton />
          </div>
        </div>
        <div className="setting-con pt-4">
          <SettingText
            title="Auto-start pomodoros"
            description="Start pomodoros automatically"
          />
          <div className="setting-input-con">
            <ToggleButton />
          </div>
        </div>
      </SettingsCard>
      <SettingsCard>
        <div className="settings-heading">
          <Icon className="p-2 bg-green-700/15 text-green-700">
            <Bell className="w-4 h-4" />
          </Icon>

          <div className="settings-heading-text">
            <p className="text-base font-bold">Notifications</p>
            <p className="text-sm text-muted-foreground">
              Sound & alert preferences
            </p>
          </div>
        </div>
        <div className="setting-con border-b border-border py-4">
          <SettingText
            title="Push notifications"
            description="Browser notifications"
          />
          <div className="setting-input-con">
            <ToggleButton />
          </div>
        </div>
        <div className="setting-con pt-4">
          <SettingText title="Sound effects" description="Play sound effects" />
          <div className="setting-input-con">
            <ToggleButton />
          </div>
        </div>
      </SettingsCard>
    </div>
  );
}
