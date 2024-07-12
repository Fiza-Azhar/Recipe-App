//original landing page
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import img from '../images/r5.png';
import img2 from '../images/r2.png';
import img3 from '../images/r4.png';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/menu');
  };

  return (
    <div className="landing-page">
      <div className="welcome-section">
        <h1 className="welcome-heading animate-text">Welcome to Recipe Todo App</h1>
        <p>Get ready to organize and track your favorite recipes!</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img src={img} className="welcome-image image-1" alt="Dish 1" />
          <img src={img2} className="welcome-image image-2" alt="Dish 2" />
          <img src={img3} className="welcome-image image-3" alt="Dish 3" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


*/



//version 1
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

  // Filter recipes for "Mostly Cooked" (count > 0) and "Recently Added" (latest added recipes)
  const mostlyCookedRecipes = recipes
    .filter(recipe => recipe.counter > 0)
    .sort((a, b) => b.counter - a.counter) // Sort by counter in descending order
    .slice(0, 4); // Show only top 4 recipes

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
