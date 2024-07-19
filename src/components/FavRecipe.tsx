//card issues
/*
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import img from '../images/r4.png';
import './FavRecipe.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';


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
    <div className="orange-fav">
      <h2 className="fav-heading">Favorite Recipes</h2>
    </div>
    <div className="container-fav">
      <div className="cards-container-fav">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="card recipe-item">
            <img src={img} alt={recipe.name} className="recipe-image" />
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>Counter: <span className="counter">{recipe.counter}</span></p>
              <button onClick={() => handleMakeDish(recipe.id)} className="make-dish-btn">Make Dish</button>
              <button onClick={() => handleToggleFavorite(recipe.id)} className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <nav className="bottom-nav">
        <ul>
          <li onClick={() => navigate('/home')}><AiOutlineHome /></li>
          <li onClick={() => navigate('/addRecipe')}><RiAddCircleLine /></li>
          <li onClick={() => navigate('/recipeList')}><BsListCheck /></li>
          <li onClick={() => navigate('/grocery')}><IoMdBasket /></li>
          <li onClick={() => navigate('/favRecipe')}><AiOutlineHeart /></li>
        </ul>
      </nav>
    </div>
  </div>
);
};

export default FavRecipe;

*/


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './FavRecipe.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

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
      <div className="orange-fav">
        <h2 className="fav-heading">Favorite Recipes</h2>
      </div>
      <div className="container-fav">
        <div className="cards-container-fav">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} className="card recipe-item">
              <a href="#" onClick={() => handleMakeDish(recipe.id)}>
    <img src={recipe.image} alt={recipe.name} className="fav-recipe-image" />
    <div className="remove-btn">
      {recipe.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  </a>
              <div>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <p>Counter: <span className="counter">{recipe.counter}</span></p>
                <button onClick={() => handleMakeDish(recipe.id)} className="make-dish-btn">Make Dish</button>
               
              </div>
            </div>
          ))}
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

export default FavRecipe;
