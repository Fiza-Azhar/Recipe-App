//original
/*
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


*/


//Version 1 of figma
/*
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteRecipe, toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './RecipeList.css';
import img from '../images/l4.png';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

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
       <div className="orange">
       <h2 className='list-heading'>My Recipes</h2>
       </div>
      <div className='list-container'>
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
            <div className="row g-0">
            <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start card-icon" alt={recipe.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text"> </p>
                  <p className="card-text"> mins</p>
                  <p className="card-text"> items</p>
                  <button onClick={() => handleMakeDish(recipe.id)} className="make-dish-btn">Make Dish</button>
                  <button onClick={() => handleDelete(recipe.id)} className="remove-btn">Remove</button>
                  <button onClick={() => handleToggleFavorite(recipe.id)} className="favorite-btn">
                  {recipe.favorite ? '❤️' : '♡'}
                  </button>
                </div>
              </div>
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

export default RecipeList;

*/

/* version 2
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteRecipe, toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './RecipeList.css';
import img from '../images/l4.png';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

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
    <div className="unique-recipe-list">
      <div className="unique-orange-top">
        <h2 className="unique-list-heading">My Recipes</h2>
      </div>
      <div className="unique-list-container">
        <div className="unique-search-bar">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="unique-search-input"
          />
          <AiOutlineSearch className="unique-search-icon" />
        </div>
        <div className="unique-cards-container-list">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="unique-recipe-item">
              <img src={img} className="unique-recipe-image" alt={recipe.name} />
              <div className="unique-recipe-details">
                <h5 className="unique-recipe-name">{recipe.name}</h5>
                <p className="unique-recipe-time">{recipe.duration} mins</p>
                <p className="unique-recipe-items">{recipe.counter} items</p>
                <button onClick={() => handleMakeDish(recipe.id)} className="unique-make-dish-btn">Make Dish</button>
                <button onClick={() => handleDelete(recipe.id)} className="unique-remove-btn">Remove</button>
                <button onClick={() => handleToggleFavorite(recipe.id)} className="unique-favorite-btn">
                  {recipe.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
              </div>
            </div>
          ))}
        </div>
        <nav className="unique-bottom-nav">
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

export default RecipeList;


*/

//version 3
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteRecipe, toggleFavoriteRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './RecipeList.css';
import img from '../images/Rectangle 135.svg';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

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
      <div className="orange">
        <h2 className="list-heading">My Recipes</h2>
      </div>
      <div className="list-container">
        <div className="list-search-bar">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="list-search-input"
          />
          <AiOutlineSearch className="list-search-icon" />
        </div>
        <div className="list-cards-container-list">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="list-recipe-item">
              <img src={recipe.image} className="list-recipe-image" alt={recipe.name} />
              <h5 className="list-recipe-name">{recipe.name}</h5>
              <div className="list-recipe-details">
             
              <div className="list-recipe-info">
                 
                  <div className="list-recipe-time-items">
                  <p className="list-recipe-time">{recipe.duration} mins</p>
                  <p className="list-recipe-items">{recipe.counter} times cooked</p>
                </div>
                </div>
                <div className="list-buttons">
                  <button onClick={() => handleMakeDish(recipe.id)} className="list-make-dish-btn">Cook</button>
                  <button onClick={() => handleDelete(recipe.id)} className="list-remove-btn">Remove</button>
                  <button onClick={() => handleToggleFavorite(recipe.id)} className="list-favorite-btn">
                  {recipe.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
                </div>
               
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

export default RecipeList;
