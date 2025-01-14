//------------------before servings----------
/*
// reducers.ts
import {
  RecipeActionTypes,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  ADD_STEP,
  TOGGLE_STEP,
  INCREMENT_COUNTER,
  Ingredient // Import Ingredient from actions
} from "./actions";

interface Step {
  description: string;
  completed: boolean;
  details: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  steps: Step[];
  ingredients: Ingredient[]; // Use shared Ingredient type here
  counter: number;
}

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer = (
  state = initialState,
  action: RecipeActionTypes
): RecipeState => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload as Recipe], // Type assertion as Recipe
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
      };
    case ADD_STEP:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? {
                ...recipe,
                steps: [
                  ...recipe.steps,
                  {
                    description: action.payload.description,
                    completed: action.payload.completed,
                    details: action.payload.details,
                  },
                ],
              }
            : recipe
        ),
      };
    case EDIT_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id
            ? {
                ...recipe,
                name: action.payload.name,
                description: action.payload.description,
                steps: action.payload.steps,
                ingredients: action.payload.ingredients, // Directly use from action payload
              }
            : recipe
        ),
      };
    case TOGGLE_STEP:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? {
                ...recipe,
                steps: recipe.steps.map((step, index) =>
                  index === action.payload.stepIndex
                    ? { ...step, completed: !step.completed }
                    : step
                ),
              }
            : recipe
        ),
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? { ...recipe, counter: recipe.counter + 1 }
            : recipe
        ),
      };
    default:
      return state;
  }
};

export default recipeReducer;


*/

//------------------before favs--------
// reducers.ts

/*
import {
  RecipeActionTypes,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  ADD_STEP,
  TOGGLE_STEP,
  INCREMENT_COUNTER,
  Ingredient // Import Ingredient from actions
} from "./actions";

interface Step {
  description: string;
  completed: boolean;
  details: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  steps: Step[];
  ingredients: Ingredient[]; // Use shared Ingredient type here
  counter: number;
  serves: number; // New field for number of people served
}

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer = (
  state = initialState,
  action: RecipeActionTypes
): RecipeState => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload as Recipe], // Type assertion as Recipe
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
      };
    case ADD_STEP:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? {
                ...recipe,
                steps: [
                  ...recipe.steps,
                  {
                    description: action.payload.description,
                    completed: action.payload.completed,
                    details: action.payload.details,
                  },
                ],
              }
            : recipe
        ),
      };
    case EDIT_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id
            ? {
                ...recipe,
                name: action.payload.name,
                description: action.payload.description,
                steps: action.payload.steps,
                ingredients: action.payload.ingredients,
                serves: action.payload.serves,
              }
            : recipe
        ),
      };
    case TOGGLE_STEP:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? {
                ...recipe,
                steps: recipe.steps.map((step, index) =>
                  index === action.payload.stepIndex
                    ? { ...step, completed: !step.completed }
                    : step
                ),
              }
            : recipe
        ),
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? { ...recipe, counter: recipe.counter + 1 }
            : recipe
        ),
      };
      
    default:
      return state;
  }
};

export default recipeReducer;


*/

import {
  RecipeActionTypes,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  ADD_STEP,
  TOGGLE_STEP,
  INCREMENT_COUNTER,
  TOGGLE_FAVORITE_RECIPE,
  Ingredient,
} from "./actions";

interface Step {
  description: string;
  completed: boolean;
  details: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  steps: Step[];
  ingredients: Ingredient[];
  counter: number;
  serves: number;
  favorite: boolean;
}

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const recipeReducer = (
  state = initialState,
  action: RecipeActionTypes
): RecipeState => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, { ...action.payload, favorite: false }],
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
      };
    case ADD_STEP:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? {
                ...recipe,
                steps: [
                  ...recipe.steps,
                  {
                    description: action.payload.description,
                    completed: action.payload.completed,
                    details: action.payload.details,
                  },
                ],
              }
            : recipe
        ),
      };
    case EDIT_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id
            ? {
                ...recipe,
                name: action.payload.name,
                description: action.payload.description,
                steps: action.payload.steps,
                ingredients: action.payload.ingredients,
                serves: action.payload.serves,
              }
            : recipe
        ),
      };
    case TOGGLE_STEP:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? {
                ...recipe,
                steps: recipe.steps.map((step, index) =>
                  index === action.payload.stepIndex
                    ? { ...step, completed: !step.completed }
                    : step
                ),
              }
            : recipe
        ),
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.recipeId
            ? { ...recipe, counter: recipe.counter + 1 }
            : recipe
        ),
      };
    case TOGGLE_FAVORITE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id
            ? { ...recipe, favorite: !recipe.favorite }
            : recipe
        ),
      };
    default:
      return state;
  }
};

export default recipeReducer;
