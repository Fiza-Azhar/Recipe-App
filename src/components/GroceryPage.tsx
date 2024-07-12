import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import img from '../images/l4.png';
import './GroceryPage.css';

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
    // Pass selectedRecipeDetails and servings to GroceryList page
    navigate('/groceryList', { state: { selectedRecipes: selectedRecipeDetails, servings } });
  };

  return (
    <div className="grocery-page">
      <nav className="navbar">
        <img src={img} alt="Logo" className="logo" />
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
      <h2>Grocery List</h2>
      <div className="grocery-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <label>
              <input
                type="checkbox"
                checked={selectedRecipes.includes(recipe.id)}
                onChange={() => handleCheckboxChange(recipe.id)}
              />
              {recipe.name}
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
              <button onClick={handleDone}>Done</button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryPage;
