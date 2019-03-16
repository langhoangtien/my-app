import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <ListTodo />
      </div>
    );
  }
}

export default App;
