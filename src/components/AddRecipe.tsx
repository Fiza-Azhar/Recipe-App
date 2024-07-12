/*
befor navbar
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions';
import './AddRecipe.css'; 

const AddRecipe: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState<{ description: string; details: string }[]>([
    { description: '', details: '' },
  ]);
  const [ingredients, setIngredients] = useState<{ name: string; quantity: number; unit: string }[]>([
    { name: '', quantity: 0, unit: '' },
  ]);
  const [serves, setServes] = useState<number>(1);

  const predefinedIngredients = [
    'Tomato',
    'Black Pepper',
    'Green Chilli',
  ];

  const handleAddRecipe = () => {
    if (
      name.trim() !== '' &&
      description.trim() !== '' &&
      steps.every(step => step.description.trim() !== '' && step.details.trim() !== '') &&
      ingredients.every(ingredient => ingredient.name.trim() !== '' && ingredient.quantity > 0 && ingredient.unit.trim() !== '')
    ) {
      const formattedSteps = steps.map(step => ({
        description: step.description,
        completed: false,
        details: step.details,
      }));
      dispatch(addRecipe(name, description, formattedSteps, ingredients));
      setName('');
      setDescription('');
      setSteps([{ description: '', details: '' }]);
      setIngredients([{ name: '', quantity: 0, unit: '' }]);
      setServes(1); 
    } else {
      alert('Please enter name, description, all steps with details, and all ingredients with quantity and unit.');
    }
  };

  const handleAddStep = () => {
    setSteps([...steps, { description: '', details: '' }]);
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setSteps(updatedSteps);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 0, unit: '' }]);
  };

  const handleIngredientChange = (index: number, field: string, value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = { ...updatedIngredients[index], [field]: value };
    setIngredients(updatedIngredients);
  };

  const handleQuantityChange = (index: number, change: number) => {
    const updatedIngredients = [...ingredients];
    const newQuantity = updatedIngredients[index].quantity + change;
    if (newQuantity >= 0) {
      updatedIngredients[index] = { ...updatedIngredients[index], quantity: newQuantity };
      setIngredients(updatedIngredients);
    }
  };

  return (
    <div className="form-container">
    <form className="recipe-form">
      <h2>Add Recipe</h2>
      <div className="mb-3">
        <label htmlFor="recipeName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="recipeName"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="recipeDescription" className="form-label">
          Description:
        </label>
        <textarea
          id="recipeDescription"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="recipeServes" className="form-label">
          Serves (Number of People):
        </label>
        <input
          type="number"
          id="recipeServes"
          className="form-control"
          value={serves}
          readOnly
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              className="form-control"
              value={ingredient.name}
              onChange={e => handleIngredientChange(index, 'name', e.target.value)}
              placeholder="Ingredient Name"
            />
            <div className="input-group">
              
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => handleQuantityChange(index, -1)}
              >
                -
              </button>
              <input
                type="text"
                className="form-control"
                value={ingredient.quantity}
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => handleQuantityChange(index, 1)}
              >
                +
              </button>
              
            </div>
            <select
              className="form-select"
              value={ingredient.unit}
              onChange={e => handleIngredientChange(index, 'unit', e.target.value)}
            >
              <option value="">Select Unit</option>
              <option value="KG">KG</option>
              <option value="g">g</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
            </select>
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient} className="btn btn-secondary">
          Add Ingredient
        </button>
      </div>
      <div className="mb-3">
        <label htmlFor="recipeSteps" className="form-label">
          Steps:
        </label>
        {steps.map((step, index) => (
          <div key={index}>
            <textarea
              className="form-control"
              value={step.description}
              onChange={e => handleStepChange(index, 'description', e.target.value)}
              placeholder={`Step ${index + 1}`}
            />
            <textarea
              className="form-control"
              value={step.details}
              onChange={e => handleStepChange(index, 'details', e.target.value)}
              placeholder={`Step ${index + 1} details`}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddStep} className="btn btn-secondary">
          Add Step
        </button>
      </div>

      <button type="button" onClick={handleAddRecipe} className="btn btn-primary">
        Add Recipe
      </button>
    </form>
    </div>
  );
};

export default AddRecipe;


*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions';
import img from '../images/l4.png';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

const AddRecipe: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState<{ description: string; details: string }[]>([
    { description: '', details: '' },
  ]);
  const [ingredients, setIngredients] = useState<{ name: string; quantity: number; unit: string }[]>([
    { name: '', quantity: 0, unit: '' },
  ]);
  const [serves, setServes] = useState<number>(1);

  const handleAddRecipe = () => {
    if (
      name.trim() !== '' &&
      description.trim() !== '' &&
      steps.every(step => step.description.trim() !== '' && step.details.trim() !== '') &&
      ingredients.every(ingredient => ingredient.name.trim() !== '' && ingredient.quantity > 0 && ingredient.unit.trim() !== '')
    ) {
      const formattedSteps = steps.map(step => ({
        description: step.description,
        completed: false,
        details: step.details,
      }));
      dispatch(addRecipe(name, description, formattedSteps, ingredients));
      setName('');
      setDescription('');
      setSteps([{ description: '', details: '' }]);
      setIngredients([{ name: '', quantity: 0, unit: '' }]);
      setServes(1);
    } else {
      alert('Please enter name, description, all steps with details, and all ingredients with quantity and unit.');
    }
  };

  const handleAddStep = () => {
    setSteps([...steps, { description: '', details: '' }]);
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setSteps(updatedSteps);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 0, unit: '' }]);
  };

  const handleIngredientChange = (index: number, field: string, value: string | number) => {
    const updatedIngredients = [...ingredients];
    if (field === 'quantity') {
      updatedIngredients[index] = { ...updatedIngredients[index], [field]: Number(value) };
    } else {
      updatedIngredients[index] = { ...updatedIngredients[index], [field]: value };
    }
    setIngredients(updatedIngredients);
  };

  return (
    <div className="add-recipe">
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
      <div className="form-container-add">
        <form className="recipe-form">
          <h2>Add Recipe</h2>
          <div className="mb-3">
            <label htmlFor="recipeName" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="recipeName"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Recipe Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipeDescription" className="form-label">
              Description:
            </label>
            <textarea
              id="recipeDescription"
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter Recipe Description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipeServes" className="form-label">
              Serves (Number of People):
            </label>
            <input
              type="number"
              id="recipeServes"
              className="form-control"
              value={serves}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredients:</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-row">
                <input
                  type="text"
                  id = 'ing'
                  className="form-control"
                  value={ingredient.name}
                  onChange={e => handleIngredientChange(index, 'name', e.target.value)}
                  placeholder="Ingredient Name"
                />
                <div className="input-group">
                  <label className="quantity-label">Quantity:</label>
                  <input
                    type="number"
                    className="form-control quantity-input"
                    value={ingredient.quantity}
                    id = 'qty'
                    onChange={e => handleIngredientChange(index, 'quantity', e.target.value)}
                    min={1}
                    placeholder="1"
                  />
                  <select
                    className="form-select"
                    value={ingredient.unit}
                    id='unit'
                    onChange={e => handleIngredientChange(index, 'unit', e.target.value)}
                  >
                    <option value="">Select Unit</option>
                    <option value="KG">KG</option>
                    <option value="g">g</option>
                    <option value="oz">oz</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>
            ))}
            <button type="button" onClick={handleAddIngredient} className="btn btn-secondary">
              Add Ingredient
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="recipeSteps" className="form-label">
              Steps:
            </label>
            {steps.map((step, index) => (
              <div key={index}>
                <textarea
                  className="form-control"
                  value={step.description}
                  id='step'
                  onChange={e => handleStepChange(index, 'description', e.target.value)}
                  placeholder={`Step ${index + 1}`}
                />
                <textarea
                  className="form-control"
                  value={step.details}
                  id= 'detail'
                  onChange={e => handleStepChange(index, 'details', e.target.value)}
                  placeholder={`Step ${index + 1} details`}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddStep} className="btn btn-secondary">
              Add Step
            </button>
          </div>
          <button type="button" onClick={handleAddRecipe} className="btn btn-primary" id = '#add-recipe-button'>
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;