import React, { useState } from 'react';
import logo from './logo.svg';
import ProjectPage from './pages/ProjectPage';
import WorkerPage from './pages/WorkerPage';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='Manager'>
        <h1>Project Manager</h1>
        <div className='Pages'>
          <ProjectPage></ProjectPage>
          <WorkerPage></WorkerPage>
        </div>
      </div>
    </div>
  );
}

export default App;
