import React from 'react';
import './App.css';
import './App.scss';
import Progress from './components/progress';
import LiveRender from './components/live-render';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LiveRender />
        <Progress />
      </header>
    </div>
  );
}

export default App;
