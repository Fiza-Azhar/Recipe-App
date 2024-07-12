//original



import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteRecipe, toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './RecipeList.css';
import img from '../images/l4.png';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 

interface RecipeListProps {
  onSelectRecipe: (recipeId: number) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ onSelectRecipe }) => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    dispatch(deleteRecipe(id));
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleMakeDish = (id: number) => {
    navigate(`/makeDish/${id}`);
  };

  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavoriteRecipe(id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="recipe-list">
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
      <h2>Recipe List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="cards-container-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="card recipe-item">
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>Counter: <span className="counter">{recipe.counter}</span></p>
              <button onClick={() => handleMakeDish(recipe.id)} className="make-dish-btn">Make Dish</button>
              <button onClick={() => handleEdit(recipe.id)} className="make-dish-btn">Edit</button>
              <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
              <button onClick={() => handleToggleFavorite(recipe.id)} className="favorite-btn">
                {recipe.favorite ? '❤️' : '♡'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
