import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

import './App.css';

import ToDoState from './context/todo/ToDoState';

function App() {
  return (
    <ToDoState>
      <Fragment>
        <Navbar />
        <Home />
      </Fragment>
    </ToDoState>
  );
}

export default App;
