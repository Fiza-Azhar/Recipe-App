import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './GroceryList.css';
import img from '../images/l4.png';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

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
      <div className="orange-grocery">
      <h2>Grocery List</h2>
      </div>
      <div className='gl-container'>
      <div className="content">
        <ul className="grocery-list">
          {Object.entries(totalIngredients).map(([name, { quantity, unit }]) => (
            <li key={name}>
              {quantity} {unit} of {name}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/home')} className="done-btn">Done</button>
      </div>
      <nav className="bottom-nav">
          <ul>
            <li onClick={() => navigate('/home')}><AiOutlineHome /></li>
            <li onClick={() => navigate('/addRecipe')}><RiAddCircleLine /></li>
            <li onClick={() => navigate('/recipeList')}><BsListCheck /></li>
            <li onClick={() => navigate('/grocery')}><IoMdBasket /></li>
            <li onClick={() => navigate('/favRecipe')}><AiOutlineHeart className="active" /></li>
          </ul>
        </nav>
    </div>
    </div>
  );
};

export default GroceryList;
