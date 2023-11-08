import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
// import alertReducer from './reducers/alert';
// import profileReducer from './reducers/profile';
// import postReducer from './reducers/post';
 
const store = configureStore({
  reducer: rootReducer
});

export default store;