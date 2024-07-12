//-------only shows favs-------

/*
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './FavRecipe.css';

const FavRecipe: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes);

  const favoriteRecipes = recipes.filter(recipe => recipe.favorite);

  return (
    <div className="fav-recipe-list">
      <h2>Favorite Recipes</h2>
      <div className="cards-container">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="card recipe-item">
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>Counter: <span className="counter">{recipe.counter}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavRecipe;


*/

// FavRecipe.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import img from '../images/l4.png';
import './FavRecipe.css';

const FavRecipe: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteRecipes = recipes.filter(recipe => recipe.favorite);

  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavoriteRecipe(id));
  };

  const handleMakeDish = (id: number) => {
    navigate(`/makeDish/${id}`);
  };

  return (
    <div className="fav-recipe-list">
      <nav className="navbar">
          <img src={img} alt="Logo"  className="logo"/>
        <ul className="nav-links">
        <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/addRecipe')}>Add Recipe</li>
          <li onClick={() => navigate('/recipeList')}>View Recipes</li>
          <li onClick={() => navigate('/menu')}>Make Dish</li>
          <li onClick={() => navigate('/favRecipe')}>Favorites</li>
          <li onClick={() => navigate('/signin')}>Login</li>
          <li onClick={() => navigate('/signup')}>Sign Up</li>
        </ul>
      </nav>
      <h2>Favorite Recipes</h2>
      <div className="cards-container-fav">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="card recipe-item">
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>Counter: <span className="counter">{recipe.counter}</span></p>
              <button onClick={() => handleMakeDish(recipe.id)} className="make-dish-btn">Make Dish</button>
              <button onClick={() => handleToggleFavorite(recipe.id)} className="favorite-btn">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavRecipe;
