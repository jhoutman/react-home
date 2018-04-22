import * as types from '../actionTypes/actionType';

const initialState = {
  defaultAmountOfPeopleForIngredients: 2,
  currentRecipe: {
      id: '12324324',
      title: 'Sour cocktail',
      description: 'Summer cocktail, sour, yellow and tasty',
      author: 'Jordy',
      imageUrl: '',
      forAmountOfPeople: 1,
      ingredients: [
          {name: 'Lime', amount: 0.5, unit: 'piece'},
          {name: 'Lemon', amount: 0.5, unit: 'piece'},
          {name: 'Vodka', amount: 50, unit: 'ml'},
          {name: 'Limoncello', amount: 50, unit: 'ml'},
          {name: 'Mint leaves', amount: 0, unit: 'couple'}
      ]
  }
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
