import './App.css';

import Checklist from './Checklist/Checklist';
import Clock from './Clock';
import GitHub from './GitHub';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <GitHub href='https://github.com/azwick/dashboard' />
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