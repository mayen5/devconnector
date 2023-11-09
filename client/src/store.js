import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from './reducers/index';
import alertReducer from './reducers/alert';
import authReducer from './reducers/auth';
import profileReducer from './reducers/profile';
 
const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer
  }
});

export default store;