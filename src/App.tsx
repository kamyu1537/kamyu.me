import { Tab } from '@headlessui/react';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import My from './components/My';
import Projects from './components/Projects';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Tab.Group>
          <Tab.List className="flex gap-3 text-xl text-slate-200 ml-3 mb-2">
            {({ selectedIndex }) => (
              <>
                <Tab className={`drop-shadow-xl ${selectedIndex === 0 ? 'font-semibold opacity-100' : 'opacity-50'}`}>
                  my
                </Tab>
                <Tab className={`drop-shadow-xl ${selectedIndex === 1 ? 'font-semibold opacity-100' : 'opacity-50'}`}>
                  projects
                </Tab>
              </>
            )}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <My />
            </Tab.Panel>
            <Tab.Panel>
              <Projects />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </ErrorBoundary>
  );
}

export default App;
