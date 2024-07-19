/*
//original before figma


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import img from '../images/l4.png';
import { toggleStep, incrementCounter } from '../redux/actions';
import './makeDish.css';

interface MakeDishProps {}

const MakeDish: React.FC<MakeDishProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const recipeId = id ? parseInt(id, 10) : undefined;

  // Select recipe from Redux store
  const recipe = useSelector((state: RootState) =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const [servings, setServings] = useState<number>(1);

  useEffect(() => {
    if (recipe) {
      setServings(recipe.serves); 
    }
  }, [recipe]);

  if (!recipe) {
    return <div className="container">Recipe not found</div>;
  }

  const handleToggleStep = (stepIndex: number) => {
    if (recipeId !== undefined) {
      dispatch(toggleStep(recipeId, stepIndex));
    }
  };

  const handleDone = () => {
    if (recipeId !== undefined) {
      const allStepsCompleted = recipe.steps.every(step => step.completed);
      console.log('All steps completed:', allStepsCompleted);
      if (allStepsCompleted) {
        dispatch(incrementCounter(recipeId));
        navigate(-1);
      } else {
        alert('Please complete all steps before finishing.');
      }
    } else {
      console.error('Invalid recipe ID:', recipeId);
    }
  };

  const handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newServings = parseInt(event.target.value, 10);
    setServings(newServings);
  };

  // Function to calculate ingredients for adjusted servings
  const calculateIngredients = (ingredients: { name: string; quantity: number; unit: string }[]) => {
    return ingredients.map(ingredient => ({
      ...ingredient,
      quantity: ingredient.quantity * (servings / recipe.serves),
    }));
  };

  const adjustedIngredients = calculateIngredients(recipe.ingredients);

  return (
    <div className="container">
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
      <h1 className="title">{recipe.name}</h1>
      <p className="description">{recipe.description}</p>
      <div className="servings-input">
        <label>Number of servings:</label>
        <input type="number" value={servings} onChange={handleServingsChange} min={1} />
      </div>
      <h3>Ingredients for {servings} servings:</h3>
      <ul className="ingredients-container">
        {adjustedIngredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            {ingredient.quantity} {ingredient.unit} - {ingredient.name}
          </li>
        ))}
      </ul>
      <h3>Steps to Make the Dish:</h3>
      <ul className="steps-container">
        {recipe.steps.map((step, index) => (
          <li key={index} className="step-item">
             <input
                  type="checkbox"
                  checked={step.completed}
                  onChange={() => handleToggleStep(index)}
                  className="step-checkbox"
                />
            {step.description}
            <details>
              <summary>
        
              </summary>
              <label>{step.details}</label>
            </details>
          </li>
        ))}
      </ul>
    
      <button onClick={handleDone} className="done-button">
        Done
      </button>
    </div>
  );
};

export default MakeDish;


*/

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import img from "../images/r4.png";
import { toggleStep, incrementCounter } from "../redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiAddCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { BsListCheck } from "react-icons/bs";
import { IoMdBasket } from "react-icons/io";
import shoppingIcon from "../Icons/Cart icon.png";
import heartIcon from "../Icons/Favorites-Orange.svg";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import "./makeDish.css";

interface MakeDishProps {}

const MakeDish: React.FC<MakeDishProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const recipeId = id ? parseInt(id, 10) : undefined;

  const recipe = useSelector((state: RootState) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const [servings, setServings] = useState<number>(1);
  const [showDetails, setShowDetails] = useState<boolean[]>([]);

  useEffect(() => {
    if (recipe) {
      setServings(recipe.serves);
    }
  }, [recipe]);

  if (!recipe) {
    return <div className="container">Recipe not found</div>;
  }

  const handleToggleStep = (stepIndex: number) => {
    if (recipeId !== undefined) {
      dispatch(toggleStep(recipeId, stepIndex));
    }
  };

  const handleDone = () => {
    if (recipeId !== undefined) {
      const allStepsCompleted = recipe.steps.every((step) => step.completed);
      if (allStepsCompleted) {
        dispatch(incrementCounter(recipeId));
        navigate(-1);
      } else {
        alert("Please complete all steps before finishing.");
      }
    } else {
      console.error("Invalid recipe ID:", recipeId);
    }
  };

  const handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newServings = parseInt(event.target.value, 10);
    setServings(newServings);
  };

  const calculateIngredients = (
    ingredients: { name: string; quantity: number; unit: string }[]
  ) => {
    return ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * (servings / recipe.serves),
    }));
  };

  const adjustedIngredients = calculateIngredients(recipe.ingredients);
  const toggleStepDetails = (index: number) => {
    setShowDetails((prevShowDetails) =>
      prevShowDetails.map((show, i) => (i === index ? !show : show))
    );
  };

  return (
    <div className="container">
        <div className="make-orange-top">
          <div className="make-icons">
            <img
              src={shoppingIcon}
              alt="Shopping Icon"
              className="make-icon"
              onClick={() => navigate("/grocery")}
            />
            <img
              src={heartIcon}
              alt="Heart Icon"
              className="make-icon"
              onClick={() => navigate("/favRecipe")}
            />
          </div>
          <h2 className="make-heading">{recipe.name}</h2>
        </div>
      <div className="make-container">
        <div className="recipe-info">
          <img src={img} alt={recipe.name} className="recipe-image" />
          <div className="time-info">
            <p className="time"> {recipe.duration} mins</p>
            <p className="description">{recipe.description}</p>
          </div>
        </div>
        <div className="servings-input">
          <label>Number of servings:</label>
          <input
            type="number"
            value={servings}
            onChange={handleServingsChange}
            min={1}
          />
        </div>
        <h3>Ingredients for {servings} servings:</h3>
        <ul className="ingredients-container">
          {adjustedIngredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {ingredient.quantity} {ingredient.unit} - {ingredient.name}
            </li>
          ))}
        </ul>
        <h3>Steps</h3>
        <ul className="steps-container">
          {recipe.steps.map((step, index) => (
            <li key={index} className="step-item">
              <div className="step-description">
                {step.description}
                <span
                  onClick={() => toggleStepDetails(index)}
                  className="read-more-arrow"
                >
                  {showDetails[index] ? (
                    <i className="arrow arrow-up"></i>
                  ) : (
                    <i className="arrow arrow-down"></i>
                  )}
                </span>
              </div>
              {showDetails[index] && (
                <div className="step-details">{step.details}</div>
              )}
              <input
                type="checkbox"
                checked={step.completed}
                onChange={() => handleToggleStep(index)}
                className="step-checkbox"
              />
            </li>
          ))}
        </ul>
        <button onClick={handleDone} className="done-button">
          Done
        </button>
        <nav className="bottom-nav">
          <ul>
            <li onClick={() => navigate("/home")}>
              <AiOutlineHome />
            </li>
            <li onClick={() => navigate("/addRecipe")}>
              <RiAddCircleLine />
            </li>
            <li onClick={() => navigate("/recipeList")}>
              <BsListCheck />
            </li>
            <li onClick={() => navigate("/grocery")}>
              <IoMdBasket />
            </li>
            <li onClick={() => navigate("/favRecipe")}>
              <AiOutlineHeart />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MakeDish;
