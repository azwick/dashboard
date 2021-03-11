import './App.css';

import Checklist from './Checklist/Checklist';
import Clock from './Clock';
import GitHub from './GitHub';
import ThemeSwitch from './ThemeSwitch';
import { useState } from 'react';

const App = () : React.ReactElement => {
  const getTheme : string | null = localStorage.getItem("theme");
  const [theme, setTheme] = useState((!getTheme ? 'light' : getTheme) as string);

  return (
    <div className={'App ' + theme}>
      <GitHub href='https://github.com/azwick/dashboard' />
      <ThemeSwitch setTheme={setTheme} />
      <div className="container">
        <Clock/>
        <div className="grid">
          <Checklist title='Prio A' maxCount={3} />
          <Checklist title='Prio B' maxCount={3} />
          <Checklist title='Prio C' maxCount={3} />
        </div>
      </div>
    </div>
  );
}

export default App;