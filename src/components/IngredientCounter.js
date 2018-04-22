import React from 'react';

import countIngredients from '../utils/countIngredients';

const IngredientListItem = ({
    addToListMultiplier,
    headCount,
    unit,
    amount,
    name
}) => <li>
    {amount > 0 && countIngredients(headCount, addToListMultiplier, amount)} {unit} {name}
</li>

export default IngredientListItem;