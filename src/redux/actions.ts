//before adding image and time duration and figma

/*
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const ADD_STEP = 'ADD_STEP';
export const TOGGLE_STEP = 'TOGGLE_STEP';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REORDER_STEPS = 'REORDER_STEPS';
export const TOGGLE_FAVORITE_RECIPE = 'TOGGLE_FAVORITE_RECIPE';

interface ToggleFavoriteRecipeAction {
  type: typeof TOGGLE_FAVORITE_RECIPE;
  payload: {
    id: number;
  };
}

export const toggleFavoriteRecipe = (id: number) => ({
  type: TOGGLE_FAVORITE_RECIPE,
  payload: {
    id,
  },
});

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface EditRecipeAction {
  type: typeof EDIT_RECIPE;
  payload: {
    id: number;
    name: string;
    description: string;
    steps: { description: string; completed: boolean; details: string }[];
    ingredients: Ingredient[];
    serves: number;
  };
}

interface ReorderStepsAction {
  type: typeof REORDER_STEPS;
  payload: {
    recipeId: number;
    sourceIndex: number;
    destinationIndex: number;
  };
}

export const reorderSteps = (
  recipeId: number,
  sourceIndex: number,
  destinationIndex: number
): ReorderStepsAction => ({
  type: REORDER_STEPS,
  payload: { recipeId, sourceIndex, destinationIndex }
});

interface AddRecipeAction {
  type: typeof ADD_RECIPE;
  payload: {
    id: number;
    name: string;
    description: string;
    steps: { description: string; completed: boolean; details: string }[];
    ingredients: Ingredient[];
    counter: number;
    serves: number;
  };
}

interface DeleteRecipeAction {
  type: typeof DELETE_RECIPE;
  payload: {
    id: number;
  };
}

interface AddStepAction {
  type: typeof ADD_STEP;
  payload: {
    recipeId: number;
    description: string;
    completed: boolean;
    details: string;
  };
}

interface ToggleStepAction {
  type: typeof TOGGLE_STEP;
  payload: {
    recipeId: number;
    stepIndex: number;
  };
}

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
  payload: {
    recipeId: number;
  };
}

export type RecipeActionTypes =
  | AddRecipeAction
  | DeleteRecipeAction
  | AddStepAction
  | ToggleStepAction
  | EditRecipeAction
  | IncrementCounterAction
  | ReorderStepsAction
  | ToggleFavoriteRecipeAction;

let nextRecipeId = 0;

export const addRecipe = (
  name: string,
  description: string,
  steps: { description: string; completed: boolean }[] = [],
  ingredients: Ingredient[] = [],
  serves: number = 1
) => ({
  type: ADD_RECIPE,
  payload: {
    id: nextRecipeId++,
    name,
    description,
    steps,
    ingredients,
    counter: 0,
    serves,
  },
});

export const editRecipe = (
  id: number,
  name: string,
  description: string,
  steps: { description: string; completed: boolean; details: string }[],
  ingredients: Ingredient[],
  serves: number
) => ({
  type: EDIT_RECIPE,
  payload: {
    id,
    name,
    description,
    steps,
    ingredients,
    serves,
  },
});

export const deleteRecipe = (id: number) => ({
  type: DELETE_RECIPE,
  payload: {
    id,
  },
});

export const addStep = (recipeId: number, description: string) => ({
  type: ADD_STEP,
  payload: {
    recipeId,
    description,
    completed: false,
    details: '',
  },
});

export const toggleStep = (recipeId: number, stepIndex: number) => ({
  type: TOGGLE_STEP,
  payload: {
    recipeId,
    stepIndex,
  },
});

export const incrementCounter = (recipeId: number) => ({
  type: INCREMENT_COUNTER,
  payload: {
    recipeId,
  },
});


*/



// =============================before adding image perfect==========
/*
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const ADD_STEP = 'ADD_STEP';
export const TOGGLE_STEP = 'TOGGLE_STEP';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REORDER_STEPS = 'REORDER_STEPS';
export const TOGGLE_FAVORITE_RECIPE = 'TOGGLE_FAVORITE_RECIPE';

interface ToggleFavoriteRecipeAction {
  type: typeof TOGGLE_FAVORITE_RECIPE;
  payload: {
    id: number;
  };
}

export const toggleFavoriteRecipe = (id: number) => ({
  type: TOGGLE_FAVORITE_RECIPE,
  payload: {
    id,
  },
});

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface EditRecipeAction {
  type: typeof EDIT_RECIPE;
  payload: {
    id: number;
    name: string;
    description: string;
    steps: { description: string; completed: boolean; details: string }[];
    ingredients: Ingredient[];
    serves: number;
  };
}

interface ReorderStepsAction {
  type: typeof REORDER_STEPS;
  payload: {
    recipeId: number;
    sourceIndex: number;
    destinationIndex: number;
  };
}

export const reorderSteps = (
  recipeId: number,
  sourceIndex: number,
  destinationIndex: number
): ReorderStepsAction => ({
  type: REORDER_STEPS,
  payload: { recipeId, sourceIndex, destinationIndex }
});

interface AddRecipeAction {
  type: typeof ADD_RECIPE;
  payload: {
    id: number;
    name: string;
    description: string;
    steps: { description: string; completed: boolean; details: string }[];
    ingredients: Ingredient[];
    counter: number;
    serves: number;
    duration: number;
    image: File | null;
  };
}

interface DeleteRecipeAction {
  type: typeof DELETE_RECIPE;
  payload: {
    id: number;
  };
}

interface AddStepAction {
  type: typeof ADD_STEP;
  payload: {
    recipeId: number;
    description: string;
    completed: boolean;
    details: string;
  };
}

interface ToggleStepAction {
  type: typeof TOGGLE_STEP;
  payload: {
    recipeId: number;
    stepIndex: number;
  };
}

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
  payload: {
    recipeId: number;
  };
}

export type RecipeActionTypes =
  | AddRecipeAction
  | DeleteRecipeAction
  | AddStepAction
  | ToggleStepAction
  | EditRecipeAction
  | IncrementCounterAction
  | ReorderStepsAction
  | ToggleFavoriteRecipeAction;

let nextRecipeId = 0;

export const addRecipe = (
  name: string,
  description: string,
  duration: number,
  steps: { description: string; completed: boolean; details: string }[] = [],
  ingredients: Ingredient[] = [],
  image: File | null,
  serves: number = 1
) => ({
  type: ADD_RECIPE,
  payload: {
    id: nextRecipeId++,
    name,
    description,
    steps,
    ingredients,
    counter: 0,
    serves,
    duration,
    image: image ? { ...image } : null,
  },
});

export const editRecipe = (
  id: number,
  name: string,
  description: string,
  steps: { description: string; completed: boolean; details: string }[],
  ingredients: Ingredient[],
  serves: number
) => ({
  type: EDIT_RECIPE,
  payload: {
    id,
    name,
    description,
    steps,
    ingredients,
    serves,
  },
});

export const addStep = (recipeId: number, description: string) => ({
  type: ADD_STEP,
  payload: {
    recipeId,
    description,
    completed: false,
    details: '',
  },
});

export const toggleStep = (recipeId: number, stepIndex: number) => ({
  type: TOGGLE_STEP,
  payload: {
    recipeId,
    stepIndex,
  },
});

export const incrementCounter = (recipeId: number) => ({
  type: INCREMENT_COUNTER,
  payload: {
    recipeId,
  },
});
export const deleteRecipe = (id: number) => ({
  type: DELETE_RECIPE,
  payload: {
    id,
  },
});

*/

export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const ADD_STEP = 'ADD_STEP';
export const TOGGLE_STEP = 'TOGGLE_STEP';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const REORDER_STEPS = 'REORDER_STEPS';
export const TOGGLE_FAVORITE_RECIPE = 'TOGGLE_FAVORITE_RECIPE';

interface ToggleFavoriteRecipeAction {
  type: typeof TOGGLE_FAVORITE_RECIPE;
  payload: {
    id: number;
  };
}

export const toggleFavoriteRecipe = (id: number) => ({
  type: TOGGLE_FAVORITE_RECIPE,
  payload: {
    id,
  },
});

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface EditRecipeAction {
  type: typeof EDIT_RECIPE;
  payload: {
    id: number;
    name: string;
    description: string;
    steps: { description: string; completed: boolean; details: string }[];
    ingredients: Ingredient[];
    serves: number;
  };
}

interface ReorderStepsAction {
  type: typeof REORDER_STEPS;
  payload: {
    recipeId: number;
    sourceIndex: number;
    destinationIndex: number;
  };
}

export const reorderSteps = (
  recipeId: number,
  sourceIndex: number,
  destinationIndex: number
): ReorderStepsAction => ({
  type: REORDER_STEPS,
  payload: { recipeId, sourceIndex, destinationIndex }
});

interface AddRecipeAction {
  type: typeof ADD_RECIPE;
  payload: {
    id: number;
    name: string;
    description: string;
    steps: { description: string; completed: boolean; details: string }[];
    ingredients: Ingredient[];
    counter: number;
    serves: number;
    duration: number;
    //image: File | null;
    image: string | undefined;
  };
}

interface DeleteRecipeAction {
  type: typeof DELETE_RECIPE;
  payload: {
    id: number;
  };
}

interface AddStepAction {
  type: typeof ADD_STEP;
  payload: {
    recipeId: number;
    description: string;
    completed: boolean;
    details: string;
  };
}

interface ToggleStepAction {
  type: typeof TOGGLE_STEP;
  payload: {
    recipeId: number;
    stepIndex: number;
  };
}

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
  payload: {
    recipeId: number;
  };
}

export type RecipeActionTypes =
  | AddRecipeAction
  | DeleteRecipeAction
  | AddStepAction
  | ToggleStepAction
  | EditRecipeAction
  | IncrementCounterAction
  | ReorderStepsAction
  | ToggleFavoriteRecipeAction;

let nextRecipeId = 0;

export const addRecipe = (
  name: string,
  description: string,
  duration: number,
  steps: { description: string; completed: boolean; details: string }[] = [],
  ingredients: Ingredient[] = [],
  //image: File | null,
  image: string | undefined,
  serves: number = 1
) => ({
  type: ADD_RECIPE,
  payload: {
    id: nextRecipeId++,
    name,
    description,
    steps,
    ingredients,
    counter: 0,
    serves,
    duration,
    //image: image ? { ...image } : null,
    image
  },
});

export const editRecipe = (
  id: number,
  name: string,
  description: string,
  steps: { description: string; completed: boolean; details: string }[],
  ingredients: Ingredient[],
  serves: number
) => ({
  type: EDIT_RECIPE,
  payload: {
    id,
    name,
    description,
    steps,
    ingredients,
    serves,
  },
});

export const addStep = (recipeId: number, description: string) => ({
  type: ADD_STEP,
  payload: {
    recipeId,
    description,
    completed: false,
    details: '',
  },
});

export const toggleStep = (recipeId: number, stepIndex: number) => ({
  type: TOGGLE_STEP,
  payload: {
    recipeId,
    stepIndex,
  },
});

export const incrementCounter = (recipeId: number) => ({
  type: INCREMENT_COUNTER,
  payload: {
    recipeId,
  },
});
export const deleteRecipe = (id: number) => ({
  type: DELETE_RECIPE,
  payload: {
    id,
  },
});
