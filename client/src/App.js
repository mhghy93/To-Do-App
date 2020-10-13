import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AllTodos from './components/pages/AllTodos';

import './App.css';

import ToDoState from './context/todo/ToDoState';

function App() {
  return (
    <ToDoState>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/alltodos" component={AllTodos} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </ToDoState>
  );
}

export default App;
