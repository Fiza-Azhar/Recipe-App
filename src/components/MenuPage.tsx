import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';
import img from '../images/l4.png';
import img2 from '../images/r2.png';
import img3 from '../images/r3.png';
import img4 from '../images/r4.png';
import img1 from '../images/r6.png';

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddRecipe = () => {
    navigate('/addRecipe');
  };

  const handleViewRecipes = () => {
    navigate('/recipeList');
  };

  const handleViewFavorites = () => {
    navigate('/favRecipe');
  };

  const handleViewGrocery = () => {
    navigate('/grocery');
  };
  
  return (
    <div className="menu-page">
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
      <h1 className="menu-heading">Menu</h1>
      <div className="cards-container-pro">
        {/* Card 1: Add Recipe */}
        <div className="card mb-3" onClick={handleAddRecipe}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img1} className="img-fluid rounded-start card-icon" alt="Add Recipe" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Add Recipe</h5>
                <p className="card-text">Create and add a new recipe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: View Recipes */}
        <div className="card mb-3" onClick={handleViewRecipes}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img3} className="img-fluid rounded-start card-icon" alt="View Recipes" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">View Recipes</h5>
                <p className="card-text">Browse through your recipes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Favorite Recipes */}
        <div className="card mb-3" onClick={handleViewFavorites}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img2} className="img-fluid rounded-start card-icon" alt="Favorite Recipes" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Favorite Recipes</h5>
                <p className="card-text">See your favorite recipes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Grocery */}
        <div className="card mb-3" onClick={handleViewGrocery}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img4} className="img-fluid rounded-start card-icon" alt="Grocery List" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Grocery List</h5>
                <p className="card-text">Get your grocery list</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;