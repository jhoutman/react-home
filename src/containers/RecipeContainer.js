import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import * as actions from '../actions/action';
import countIngredients from '../utils/countIngredients';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { addToDo } = dispatchProps;
  const { recipe, addToListMultiplier } = stateProps;
  const { listName } = ownProps;

  console.log(ownProps);

  return {
    onClickAddToGroceryList: () => {
      recipe.ingredients.map(ingredient => {
        const newAmount = countIngredients(recipe.forAmountOfPeople, addToListMultiplier, ingredient.amount) ;
        const newAmountText = newAmount > 0 ? newAmount : '';
        const ingredientInventory = `${newAmountText} ${ingredient.unit} ${ingredient.name}`;
        addToDo({ listName, text: ingredientInventory});
      })
    },
    title: recipe.title,
    ingredients: recipe.ingredients,
    author: recipe.author,
    addToListMultiplier,
    headCount: recipe.forAmountOfPeople
  };
};

function mapStateToProps(state) {
  return {
    addToListMultiplier: state.recipe.defaultAmountOfPeopleForIngredients,
    recipe: state.recipe.currentRecipe
  };
}

export default connect(mapStateToProps, actions, mergeProps)(Recipe);
