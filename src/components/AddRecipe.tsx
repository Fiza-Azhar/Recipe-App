/*
// before figma

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


*/



//============================================perfect before adding image
/*
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions';
import shoppingIcon from '../Icons/Cart icon.png';
import heartIcon from '../Icons/Favorites-Orange.svg';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

const AddRecipe: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [steps, setSteps] = useState([{ description: '', details: '' }]);
  const [ingredients, setIngredients] = useState([{ name: '', quantity: 1, unit: '' }]);
  const [serves, setServes] = useState<number>(1);
  const [image, setImage] = useState<File | null>(null);

  const handleAddRecipe = () => {
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration.");
      return;
    }
    if (
      name.trim() !== '' &&
      description.trim() !== '' &&
      steps.every(step => step.description.trim() !== '' && step.details.trim() !== '') &&
      ingredients.every(ingredient => ingredient.name.trim() !== '' && ingredient.quantity > 0 && ingredient.unit.trim() !== '')
    ) {
      const formattedSteps = steps.map(step => ({
        description: step.description,
        completed: false,
        details: ''
      }));
      dispatch(addRecipe(name, description, duration, formattedSteps, ingredients, image, serves));
      setName('');
      setDescription('');
      setDuration(0);
      setSteps([{ description: '', details: '' }]);
      setIngredients([{ name: '', quantity: 0, unit: '' }]);
      setServes(1);
      setImage(null);
    } else {
      alert('Please fill out all fields and ensure all steps and ingredients are complete.');
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="add-recipe">
       <div className="orange-top">
       <div className="add-icons">
        <img src={shoppingIcon} alt="Shopping Icon" className="add-icon" onClick={() => navigate('/grocery')} />
        <img src={heartIcon} alt="Heart Icon" className="add-icon" onClick={() => navigate('/favRecipe')} />
      </div>
        <h2 className='add-heading'>Add Recipe</h2>
        </div>
      <div className="form-container-add">
          <div className="form-group">
            <label htmlFor="recipeName">Name:</label>
            <input
              type="text"
              id="recipeName"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Recipe Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipeDescription">Description:</label>
            <textarea
              id="recipeDescription"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter Recipe Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipeDuration">Duration (minutes):</label>
            <input
              type="number"
              id="recipeDuration"
              value={duration}
              onChange={e => setDuration(parseInt(e.target.value))}
              placeholder="Enter Duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipeServes">Serves (Number of People):</label>
            <input
              type="number"
              id="recipeServes"
              value={serves}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Ingredients:</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-row">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={e => handleIngredientChange(index, 'name', e.target.value)}
                  placeholder="Ingredient Name"
                />
                <input
                  type="number"
                  value={ingredient.quantity}
                  onChange={e => handleIngredientChange(index, 'quantity', e.target.value)}
                  min={1}
                  placeholder="Quantity"
                />
                <select
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
            <button type="button" onClick={handleAddIngredient} className="add-button">
              Add Ingredient
            </button>
          </div>
          <div className="form-group">
            <label>Steps:</label>
            {steps.map((step, index) => (
              <div key={index} className="step-row">
                <textarea
                  value={step.description}
                  onChange={e => handleStepChange(index, 'description', e.target.value)}
                  placeholder={`Step ${index + 1}`}
                />
                <textarea
                  value={step.details}
                  onChange={e => handleStepChange(index, 'details', e.target.value)}
                  placeholder={`Step ${index + 1} details`}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddStep} className="add-button">
              Add Step
            </button>
          </div>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => {
          const file = e.target.files ? e.target.files[0] : null;
          setImage(file);
        }}
      />
          <button type="button" onClick={handleAddRecipe} className="submit-button">
            Add Recipe
          </button>
        
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

export default AddRecipe;


*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions';
import shoppingIcon from '../Icons/Cart icon.png';
import heartIcon from '../Icons/Favorites-Orange.svg';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiAddCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { BsListCheck } from 'react-icons/bs';
import { IoMdBasket } from 'react-icons/io';
import { AiOutlineHome, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

const AddRecipe: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [steps, setSteps] = useState([{ description: '', details: '' }]);
  const [ingredients, setIngredients] = useState([{ name: '', quantity: 1, unit: '' }]);
  const [serves, setServes] = useState<number>(1);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleAddRecipe = () => {
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration.");
      return;
    }

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
      if (!imageFile) {
        alert('Please select an image to add.');
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => {
        if (reader.result) {
          const imageDataUrl = reader.result as string;
          dispatch(addRecipe(name, description, duration, formattedSteps, ingredients, imageDataUrl, serves));
          setName('');
          setDescription('');
          setDuration(0);
          setSteps([{ description: '', details: '' }]);
          setIngredients([{ name: '', quantity: 0, unit: '' }]);
          setServes(1);
          setImageFile(null);
        } else {
          alert('Please fill out all fields and ensure all steps and ingredients are complete.');
        }
      };
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Validate image type and size (optional for security and performance)
     /* const validImageTypes = ['image/jpeg', 'image/png, image/jpg'];
      if (!validImageTypes.includes(file.type)) {
        alert('Invalid image type. Please upload a JPEG or PNG file.');
        return;
      }
*/
      if (file.size > 1024 * 1024 * 20) { 
        alert('Image size is too large. Please upload an image less than 20 MB.');
        return;
      }

      setImageFile(file);
    }
  };

  return (
    <div className="add-recipe">
       <div className="orange-top">
       <div className="add-icons">
        <img src={shoppingIcon} alt="Shopping Icon" className="add-icon" onClick={() => navigate('/grocery')} />
        <img src={heartIcon} alt="Heart Icon" className="add-icon" onClick={() => navigate('/favRecipe')} />
      </div>
        <h2 className='add-heading'>Add Recipe</h2>
        </div>
      <div className="form-container-add">
          <div className="form-group">
            <label htmlFor="recipeName">Name:</label>
            <input
              type="text"
              id="recipeName"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Recipe Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipeDescription">Description:</label>
            <textarea
              id="recipeDescription"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter Recipe Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipeDuration">Duration (minutes):</label>
            <input
              type="number"
              id="recipeDuration"
              value={duration}
              onChange={e => setDuration(parseInt(e.target.value))}
              placeholder="Enter Duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipeServes">Serves (Number of People):</label>
            <input
              type="number"
              id="recipeServes"
              value={serves}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Ingredients:</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-row">
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={e => handleIngredientChange(index, 'name', e.target.value)}
                  placeholder="Ingredient Name"
                />
                <input
                  type="number"
                  value={ingredient.quantity}
                  onChange={e => handleIngredientChange(index, 'quantity', e.target.value)}
                  min={1}
                  placeholder="Quantity"
                />
                <select
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
            <button type="button" onClick={handleAddIngredient} className="add-button">
              Add Ingredient
            </button>
          </div>
          <div className="form-group">
            <label>Steps:</label>
            {steps.map((step, index) => (
              <div key={index} className="step-row">
                <textarea
                  value={step.description}
                  onChange={e => handleStepChange(index, 'description', e.target.value)}
                  placeholder={`Step ${index + 1}`}
                />
                <textarea
                  value={step.details}
                  onChange={e => handleStepChange(index, 'details', e.target.value)}
                  placeholder={`Step ${index + 1} details`}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddStep} className="add-button">
              Add Step
            </button>
          </div>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        /*onChange={(e) => {
          //const file = e.target.files ? e.target.files[0] : null;

          setImageFile(file);
        }}*/
          onChange={handleImageChange}
      />
          <button type="button" onClick={handleAddRecipe} className="submit-button">
            Add Recipe
          </button>
        
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

export default AddRecipe;
