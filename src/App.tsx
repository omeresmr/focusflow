import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from './shared/ui/sonner';

import Header from './shared/layout/header/Header';
import ToggleDarkMode from './shared/layout/header/ToggleDarkMode';
import Navigation from './shared/layout/navigation/Navigation';

import { SettingsProvider } from './features/settings/contexts/SettingsContext';
import { TasksProvider } from './features/tasks/contexts/TasksContext';
import { TimerProvider } from './features/timer/contexts/TimerContext';
import SpinnerPage from './Pages/SpinnerPage';
import NotFoundPage from './Pages/NotFoundPage';

const TimerPage = lazy(() => import('./Pages/TimerPage'));
const TasksPage = lazy(() => import('./Pages/TasksPage'));
const StatsPage = lazy(() => import('./Pages/StatsPage'));
const SettingsPage = lazy(() => import('./Pages/SettingsPage'));

function App() {
  return (
    <>
      <SettingsProvider>
        <TimerProvider>
          <TasksProvider>
            <BrowserRouter>
              <Header>
                <Navigation />
                <ToggleDarkMode />
              </Header>
              <main>
                <section className="flex items-center justify-center">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<SpinnerPage />}>
                          <TimerPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/tasks"
                      element={
                        <Suspense fallback={<SpinnerPage />}>
                          <TasksPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/stats"
                      element={
                        <Suspense fallback={<SpinnerPage />}>
                          <StatsPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/settings"
                      element={
                        <Suspense fallback={<SpinnerPage />}>
                          <SettingsPage />
                        </Suspense>
                      }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>

                  <Toaster />
                </section>
              </main>
            </BrowserRouter>
          </TasksProvider>
        </TimerProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
