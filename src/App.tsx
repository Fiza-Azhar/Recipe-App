import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
import MakeDish from './components/makeDish';
import EditRecipe from './components/EditRecipe';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage'; 
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import './components/style.css';
import FavRecipe from './components/FavRecipe';
import GroceryPage from './components/GroceryPage';
import GroceryList from './components/GroceryList';

const Home: React.FC = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const handleSelectRecipe = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
  };

  return (
    <div className="App">
      <h1 className='heading'>Recipe Todo App</h1>
      <AddRecipe />
      <RecipeList onSelectRecipe={handleSelectRecipe} />
    </div>
  );
};

const App: React.FC = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const handleSelectRecipe = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
  };
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/favRecipe" element={<FavRecipe />} />
        <Route path="/grocery" element={<GroceryPage />} />
        <Route path="/groceryList" element={<GroceryList />} />
        <Route path="/recipeList" element={<RecipeList  onSelectRecipe={handleSelectRecipe}/>} />
          <Route path="/" element={<Home />} />
          <Route path="/makeDish/:id" element={<MakeDish />} />
          <Route path="/edit/:id" element={<EditRecipeWrapper />} />

        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

const EditRecipeWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipeId = id ? parseInt(id, 10) : -1;

  if (recipeId === -1) {
    return <div>Error: Recipe ID is invalid</div>;
  }

  return <EditRecipe recipeId={recipeId} />;
};