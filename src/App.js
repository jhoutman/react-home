import React, { Component } from 'react';
import ToDoListContainer from './containers/ToDoListContainer';

class App extends Component {
  render() {
    return <div>
      <h1>Groceries</h1>
      <ToDoListContainer />
      </div>;
  }
}

export default App;
