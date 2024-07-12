import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GroceryList.css';
import img from '../images/l4.png';

interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
}

interface LocationState {
  selectedRecipes: Recipe[];
  servings: number;
}

const GroceryList: React.FC = () => {
  const location = useLocation();
  const { selectedRecipes, servings } = location.state as LocationState;
  const navigate = useNavigate();

  const calculateTotalIngredients = () => {
    const ingredientMap: { [name: string]: { quantity: number; unit: string } } = {};

    selectedRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredientMap[ingredient.name]) {
          ingredientMap[ingredient.name].quantity += ingredient.quantity * servings;
        } else {
          ingredientMap[ingredient.name] = {
            quantity: ingredient.quantity * servings,
            unit: ingredient.unit,
          };
        }
      });
    });

    return ingredientMap;
  };

  const totalIngredients = calculateTotalIngredients();

  return (
    <div className="grocery-list-page">
      <nav className="navbar">
          <img src={img} alt="Logo"  className="logo"/>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/addRecipe')}>Add Recipe</li>
          <li onClick={() => navigate('/recipeList')}>View Recipes</li>
          <li onClick={() => navigate('/grocery')}>Grocery</li>
          <li onClick={() => navigate('/favRecipe')}>Favorites</li>
          <li onClick={() => navigate('/signin')}>Login</li>
          <li onClick={() => navigate('/signup')}>Sign Up</li>
        </ul>
      </nav>
      <div className="content">
        <ul className="grocery-list">
          {Object.entries(totalIngredients).map(([name, { quantity, unit }]) => (
            <li key={name}>
              {quantity} {unit} of {name}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/menu')} className="done-btn">Done</button>
      </div>
    </div>
  );
};

export default GroceryList;
