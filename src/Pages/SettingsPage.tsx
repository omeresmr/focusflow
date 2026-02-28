import { Bell, Clock, Zap } from 'lucide-react';
import ToggleButton from '../shared/ui/buttons/ToggleButton';
import Icon from '../shared/ui/icon/Icon';

export default function SettingsPage() {
  return (
    <div>
      <div>
        <section className="flex items-center justify-center">
          <div className="settings-con flex flex-col w-full max-w-2xl px-4 pt-4 pb-20 md:pb-4 gap-4">
            <p className="text-2xl font-bold">Settings</p>
            <p className="text-muted-foreground -mt-2">
              Customize your Pomodoro experience
            </p>
            <div className="card flex-col">
              <div className="settings-heading">
                <Icon className="bg-brand-primary/15 text-brand-secondary p-2">
                  <Clock className="w-4 h-4" />
                </Icon>
                <div className="settings-heading-text">
                  <p className="text-base font-bold">Timer</p>
                  <p className="text-sm text-muted-foreground">
                    Configure your pomodoro timer
                  </p>
                </div>
              </div>
              <div className="setting-con border-b border-border py-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Focus Session</p>
                  <p className="text-sm text-muted-foreground">
                    Default work period
                  </p>
                </div>
                <div className="setting-input-con">
                  <input className="setting-number-input" type="number" />
                  <p className="text-muted-foreground">min</p>
                </div>
              </div>
              <div className="setting-con border-b border-border py-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Short Break</p>
                  <p className="text-sm text-muted-foreground">
                    Quick rest period
                  </p>
                </div>
                <div className="setting-input-con">
                  <input className="setting-number-input" type="number" />
                  <p className="text-muted-foreground">min</p>
                </div>
              </div>
              <div className="setting-con border-b border-border py-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Long Break</p>
                  <p className="text-sm text-muted-foreground">
                    Extended rest period
                  </p>
                </div>
                <div className="setting-input-con">
                  <input className="setting-number-input" type="number" />
                  <p className="text-muted-foreground">min</p>
                </div>
              </div>
              <div className="setting-con pt-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Long Break Interval</p>
                  <p className="text-sm text-muted-foreground">
                    Interval between long breaks
                  </p>
                </div>
                <div className="setting-input-con">
                  <input className="setting-number-input" type="number" />
                  <p className="text-muted-foreground">pomos</p>
                </div>
              </div>
            </div>
            <div className="card flex-col">
              <div className="settings-heading">
                <Icon className="p-2 bg-violet-600/15 text-violet-600">
                  <Zap className="w-4 h-4" />
                </Icon>

                <div className="settings-heading-text">
                  <p className="text-base font-bold">Automation</p>
                  <p className="text-sm text-muted-foreground">
                    Auto-start preferences
                  </p>
                </div>
              </div>
              <div className="setting-con border-b border-border py-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Auto-start breaks</p>
                  <p className="text-sm text-muted-foreground">
                    Start breaks automatically
                  </p>
                </div>
                <div className="setting-input-con">
                  <ToggleButton />
                </div>
              </div>
              <div className="setting-con pt-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Auto-start breaks</p>
                  <p className="text-sm text-muted-foreground">
                    Start pomodoros automatically
                  </p>
                </div>
                <div className="setting-input-con">
                  <ToggleButton />
                </div>
              </div>
            </div>
            <div className="card flex-col">
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
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Push notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Browser notifications
                  </p>
                </div>
                <div className="setting-input-con">
                  <ToggleButton />
                </div>
              </div>
              <div className="setting-con pt-4">
                <div className="setting-text-con">
                  <p className="text-sm font-semibold">Sound effects</p>
                  <p className="text-sm text-muted-foreground">
                    Play sound effects
                  </p>
                </div>
                <div className="setting-input-con">
                  <ToggleButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
