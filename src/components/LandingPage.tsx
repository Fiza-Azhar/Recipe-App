
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './LandingPage.css';
import img from '../images/l4.png';
import img2 from '../images/r6.png';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const recipes = useSelector((state: RootState) => state.recipes);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const mostlyCookedRecipes = recipes
    .filter(recipe => recipe.counter > 0)
    .sort((a, b) => b.counter - a.counter) 
    .slice(0, 4); 

  const recentlyAddedRecipes = [...recipes]
    .reverse()
    .slice(0, 3); // Show the last 3 added recipes

  const handleMakeDish = (recipeId: number) => {
    navigate(`/makedish/${recipeId}`);
  };

  return (
    <div className="landing-page">
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
      <div className="content">
        <div className="text-section">
          <h1 className="main-heading">Welcome! Discover, Cook, Savor, and Enjoy</h1>
          <p className="sub-heading">Get ready to organize and track your favorite recipes!</p>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="play-demo-button" onClick={() => window.open('https://drive.google.com/file/d/1lg6WjomfCTLC9BdazvrqN2AyKFYVSRLf/view?usp=sharing', '_blank')}>Play Demo</button>
        </div>
        <div className="image-section">
          <img src={img} className="welcome-image" alt="Dish" />
        </div>
      </div>

      <div className="mostly-cooked-section">
        <h2>Mostly Cooked Recipes</h2>
        <div className="recipe-cards">
          {mostlyCookedRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={img2} alt={recipe.name} className="recipe-image" />
              <h3>{recipe.name}</h3>
              <p>Cooked {recipe.counter} times</p>
              <button className="make-dish-button" onClick={() => handleMakeDish(recipe.id)}>
                Make Dish
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="recently-added-section">
        <h2>Recently Added Recipes</h2>
        <div className="recipe-cards">
          {recentlyAddedRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={img2} alt={recipe.name} className="recipe-image" />
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <button className="make-dish-button" onClick={() => handleMakeDish(recipe.id)}>
                Make Dish
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
