
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Configure the Redux store using rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Define RootState type for useSelector
export type RootState = ReturnType<typeof store.getState>;


/*----drag and drop---*/
/*
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Configure the Redux store using rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Define RootState type for useSelector
export type RootState = ReturnType<typeof store.getState>;
*/