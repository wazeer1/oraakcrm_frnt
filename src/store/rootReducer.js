// src/store/rootReducer.js
import { combineReducers } from 'redux';
import accountsReducer from './account/accountsSlice'
import handleSlice from './handle/handleSlice';
// Import other reducers here as needed

const rootReducer = combineReducers({
  accounts: accountsReducer,
  handle: handleSlice
  // Add other reducers here (e.g., hrmReducer, settingsReducer, etc.)
});

export default rootReducer;
