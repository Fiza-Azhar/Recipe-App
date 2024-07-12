//1st original before add ing
/*
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { editRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './EditRecipe.css'; // Import the CSS file

interface EditRecipeProps {
  recipeId: number;
}

const EditRecipe: React.FC<EditRecipeProps> = ({ recipeId }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  const [name, setName] = useState(recipe ? recipe.name : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [steps, setSteps] = useState(
    recipe ? recipe.steps.map((step) => ({ description: step.description, details: step.details })) : []
  );

  useEffect(() => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (selectedRecipe) {
      setName(selectedRecipe.name);
      setDescription(selectedRecipe.description);
      setSteps(selectedRecipe.steps.map((step) => ({ description: step.description, details: step.details })));
    }
  }, [recipeId, recipes]);

  const navigate = useNavigate();

  const handleEditRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSteps = steps.map((step) => ({ description: step.description, completed: false, details: step.details }));
    dispatch(editRecipe(recipeId, name, description, formattedSteps));
    navigate(-1);
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setSteps(updatedSteps);
  };

  return (
    <form className="recipe-form" onSubmit={handleEditRecipe}>
      <h2 className="heading">Edit Recipe</h2>
      <div className="mb-3">
        <label htmlFor="recipeName" className="form-label">Name:</label>
        <input
          type="text"
          id="recipeName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="recipeDescription" className="form-label">Description:</label>
        <textarea
          id="recipeDescription"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="recipeSteps" className="form-label">Steps:</label>
        {steps.map((step, index) => (
          <div key={index}>
            <textarea
              className="form-control"
              value={step.description}
              onChange={(e) => handleStepChange(index, 'description', e.target.value)}
              placeholder={`Step ${index + 1}`}
            />
            <textarea
              className="form-control"
              value={step.details}
              onChange={(e) => handleStepChange(index, 'details', e.target.value)}
              placeholder={`Step ${index + 1} details`}
            />
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
};

export default EditRecipe;

*/

//-----------before serving
/*

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { editRecipe } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './EditRecipe.css'; // Import the CSS file

interface Ingredient {
  name: string;
  quantity: number; // Ensure it's number
  unit: string;
}

interface EditRecipeProps {
  recipeId: number;
}

const EditRecipe: React.FC<EditRecipeProps> = ({ recipeId }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  const [name, setName] = useState(recipe ? recipe.name : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [steps, setSteps] = useState(
    recipe ? recipe.steps.map((step) => ({ description: step.description, details: step.details })) : []
  );
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    recipe ? recipe.ingredients.map((ingredient) => ({ ...ingredient })) : []
  );

  useEffect(() => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (selectedRecipe) {
      setName(selectedRecipe.name);
      setDescription(selectedRecipe.description);
      setSteps(selectedRecipe.steps.map((step) => ({ description: step.description, details: step.details })));
      setIngredients(selectedRecipe.ingredients.map((ingredient) => ({ ...ingredient })));
    }
  }, [recipeId, recipes]);

  const navigate = useNavigate();

  const handleEditRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSteps = steps.map((step) => ({
      description: step.description,
      completed: false,
      details: step.details,
    }));
    dispatch(editRecipe(recipeId, name, description, formattedSteps, ingredients));
    navigate(-1);
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setSteps(updatedSteps);
  };

  const handleIngredientChange = (index: number, field: string, value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = { ...updatedIngredients[index], [field]: value };
    setIngredients(updatedIngredients);
  };

  const handleAddStep = () => {
    setSteps([...steps, { description: '', details: '' }]);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 0, unit: '' }]);
  };

  return (
    <form className="recipe-form" onSubmit={handleEditRecipe}>
      <h2 className="heading">Edit Recipe</h2>
      <div className="mb-3">
        <label htmlFor="recipeName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="recipeName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              placeholder="Ingredient Name"
            />
            <input
              type="number"
              className="form-control"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              placeholder="Quantity"
            />
            <select
              className="form-select"
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            >
              <option value="">Select Unit</option>
              <option value="KG">KG</option>
              <option value="g">g</option>
              <option value="ts">oz</option>
              <option value="litre">lb</option>
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
              onChange={(e) => handleStepChange(index, 'description', e.target.value)}
              placeholder={`Step ${index + 1}`}
            />
            <textarea
              className="form-control"
              value={step.details}
              onChange={(e) => handleStepChange(index, 'details', e.target.value)}
              placeholder={`Step ${index + 1} details`}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddStep} className="btn btn-secondary">
          Add Step
        </button>
      </div>

      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipe;


*/


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { editRecipe } from '../redux/actions';
import img from '../images/l4.png';
import { useNavigate } from 'react-router-dom';
import './EditRecipe.css'; 

interface Ingredient {
  name: string;
  quantity: number; // Ensure it's number
  unit: string;
}

interface EditRecipeProps {
  recipeId: number;
}

const EditRecipe: React.FC<EditRecipeProps> = ({ recipeId }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  const [name, setName] = useState(recipe ? recipe.name : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [steps, setSteps] = useState(
    recipe ? recipe.steps.map((step) => ({ description: step.description, details: step.details })) : []
  );
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    recipe ? recipe.ingredients.map((ingredient) => ({ ...ingredient })) : []
  );
  const [serves, setServes] = useState<number>(recipe ? recipe.serves : 1); // Initialize with default or current value
  useEffect(() => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (selectedRecipe) {
      setName(selectedRecipe.name);
      setDescription(selectedRecipe.description);
      setSteps(selectedRecipe.steps.map((step) => ({ description: step.description, details: step.details })));
      setIngredients(selectedRecipe.ingredients.map((ingredient) => ({ ...ingredient })));
    }
  }, [recipeId, recipes]);

  const navigate = useNavigate();

  const handleEditRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSteps = steps.map((step) => ({
      description: step.description,
      completed: false,
      details: step.details,
    }));
    dispatch(editRecipe(recipeId, name, description, formattedSteps, ingredients, serves));
    navigate(-1);
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setSteps(updatedSteps);
  };

  const handleIngredientChange = (index: number, field: string, value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = { ...updatedIngredients[index], [field]: value };
    setIngredients(updatedIngredients);
  };

  const handleAddStep = () => {
    setSteps([...steps, { description: '', details: '' }]);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 0, unit: '' }]);
  };

  return (
    <form className="recipe-form" onSubmit={handleEditRecipe}>
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
      <h2 className="heading">Edit Recipe</h2>
      <div className="mb-3">
        <label htmlFor="recipeName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="recipeName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
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
    onChange={(e) => setServes(parseInt(e.target.value))}
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
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              placeholder="Ingredient Name"
            />
            <input
              type="number"
              className="form-control"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              placeholder="Quantity"
            />
            <select
              className="form-select"
              value={ingredient.unit}
              onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            >
              <option value="">Select Unit</option>
              <option value="KG">KG</option>
              <option value="g">g</option>
              <option value="ts">oz</option>
              <option value="litre">lb</option>
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
              onChange={(e) => handleStepChange(index, 'description', e.target.value)}
              placeholder={`Step ${index + 1}`}
            />
            <textarea
              className="form-control"
              value={step.details}
              onChange={(e) => handleStepChange(index, 'details', e.target.value)}
              placeholder={`Step ${index + 1} details`}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddStep} className="btn btn-secondary">
          Add Step
        </button>
      </div>

      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipe;