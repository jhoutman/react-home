import React from 'react';
import styled from 'styled-components';

import IngredientCounter from './IngredientCounter'

const Recipe = ({title, ingredients, author, addToListMultiplier, headCount, onClickAddToGroceryList}) => <div><h1>Recipe: {title}</h1>
    {ingredients && (
    <div>
        <ul>
            {ingredients.map(ingredient => 
                <IngredientCounter key={`${ingredient.amount}${ingredient.name}`} {...ingredient} headCount={headCount} addToListMultiplier={addToListMultiplier} />
            )}
        </ul>
        <span style={{color: 'white'}} onClick={onClickAddToGroceryList}>Add to grocery list</span>
    </div>)}
</div>;

export default Recipe;