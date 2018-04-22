import React, { Component } from 'react';
import ToDoListContainer from './containers/ToDoListContainer';
import RecipeContainer from './containers/RecipeContainer';

import { GROCERY_LIST } from './constants/listConstants';

class App extends Component {
  render() {
    return <div>
      <h1>Groceries</h1>
      <RecipeContainer id="sour" listName={GROCERY_LIST} />
      <ToDoListContainer listName={GROCERY_LIST} />
      </div>;
  }
}

export default App;
