import ToggleButton from '../shared/ui/buttons/ToggleButton';

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
                <div className="settings-heading-icon bg-brand-primary/15 text-brand-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
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
                <div className="settings-heading-icon bg-violet-600/15 text-violet-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                </div>
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
                <div className="settings-heading-icon bg-green-700/15 text-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                  </svg>
                </div>
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
