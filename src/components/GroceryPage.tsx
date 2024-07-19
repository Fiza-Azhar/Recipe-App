import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import img from '../images/l4.png';
import './GroceryPage.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

const GroceryPage: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const [selectedRecipes, setSelectedRecipes] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servings, setServings] = useState(1);
  const navigate = useNavigate();

  const handleCheckboxChange = (recipeId: number) => {
    setSelectedRecipes((prevSelected) =>
      prevSelected.includes(recipeId)
        ? prevSelected.filter((id) => id !== recipeId)
        : [...prevSelected, recipeId]
    );
  };

  const handleGetGrocery = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDone = () => {
    const selectedRecipeDetails = recipes.filter(recipe =>
      selectedRecipes.includes(recipe.id)
    );
    navigate('/groceryList', { state: { selectedRecipes: selectedRecipeDetails, servings } });
  };

  return (
    <div className="grocery-page">
    <div className="orange-grocery">
      <h2>Grocery List</h2>
      </div>
    <div className="container-grocery">
      <div className="grocery-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="grocery-recipe-item">
          <img src={recipe.image} className="grocery-recipe-image" alt={recipe.name} />
          <h5 className="grocery-recipe-name">{recipe.name}</h5>
          

            <label>
              <input className='grocery-checkbox'
                type="checkbox"
                checked={selectedRecipes.includes(recipe.id)}
                onChange={() => handleCheckboxChange(recipe.id)}
              />
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleGetGrocery} className="get-grocery-btn">Get Grocery</button>
      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enter Number of Servings</h2>
            <input
              type="number"
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
              min="1"
            />
            <div className="modal-buttons">
            <button onClick={handleModalClose}>Cancel</button>
              <button onClick={handleDone}>Done</button>
             
            </div>
          </div>
        </div>
      )}
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

export default GroceryPage;
