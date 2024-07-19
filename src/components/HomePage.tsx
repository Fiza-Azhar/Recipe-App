import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './HomePage.css';
import img from '../images/r4.png';
import snack from '../Icons/Bot-menu.svg';
import meal from '../Icons/meal.svg';
import vegan from '../Icons/vegan.svg';
import dessert from '../Icons/dessert.svg';
import drinks from '../Icons/drinks.svg';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const recipes = useSelector((state: RootState) => state.recipes);

  const mostlyCookedRecipes = recipes
    .filter(recipe => recipe.counter > 0)
    .sort((a, b) => b.counter - a.counter)
    .slice(0, 4);

  const recentlyAddedRecipes = [...recipes].reverse().slice(0, 3);

  const handleMakeDish = (recipeId: number) => {
    navigate(`/makedish/${recipeId}`);
  };

  return (
    <div className="home-page">
      <div className="orange-top">
      <div className="top-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><AiOutlineSearch /></button>
        </div>
        <div className="icons">
          <AiOutlineShopping className="icon" onClick={() => navigate('/grocery')} />
          <AiOutlineHeart className="icon" onClick={() => navigate('/favRecipe')} />
        </div>
      </div>
      <div className="greeting-section">
        <h1>Good Morning</h1>
        <p>Rise And Shine! It's Breakfast Time</p>
      </div>
      </div>
      <div className="home-container">
      <div className="category-section">
      <div className="category-item">
      <button className="category-button">
      <img src={snack} alt="Snacks Icon" className="category-icon" />
    </button>
    </div>
    <div className="category-item">
      <button className="category-button">
      <img src={meal} alt="Meal Icon" className="category-icon" />
    </button>
    </div>
    <div className="category-item">
      <button className="category-button">
      <img src={vegan} alt="Vegan Icon" className="category-icon" />
    </button>
    </div>
    <div className="category-item">
      <button className="category-button">
      <img src={dessert} alt="dessert Icon" className="category-icon" />
    </button>
    </div>
    <div className="category-item">
      <button className="category-button">
      <img src={drinks} alt="drinks Icon" className="category-icon" />
    </button>
    </div>
      </div>
      
  <h2>Mostly Cooked</h2>
  <div className="recipe-cards">
    {mostlyCookedRecipes.map(recipe => (
      <div
        key={recipe.id}
        className="recipe-card"
        onClick={() => handleMakeDish(recipe.id)}
        style={{
          backgroundImage: `url(${recipe.image})`,

        }}
      >
        
        <div className="recipe-tag"> {recipe.counter} times</div>
      </div>
    ))}
  </div>


      <div className="recommended-section">
  <h2>Recommend</h2>
  <div className="recipe-cards">
    {recentlyAddedRecipes.map(recipe => (
      <div
        key={recipe.id}
        className="recipe-card"
        onClick={() => handleMakeDish(recipe.id)}
        style={{
          backgroundImage: `url(${recipe.image})`,
        }}
      >
        <div className="recipe-tag"> {recipe.name} </div>
      </div>
    ))}
  </div>
</div>

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
  );
};

export default HomePage;
