// src/store/accounts/accountsActions.js
import { setLoading, login } from './accountsSlice';
import axios from 'axios';

// Example action for logging in
export const loginUser = (credentials) => async (dispatch) => {
  console.log(credentials, '________cred__________');
  dispatch(setLoading(true));
  try {
      const { access_token, user_type, verified, role } = credentials;

      // Save the login data to localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_type', user_type);
      localStorage.setItem('verified', verified);
      localStorage.setItem('role', role);

      // Dispatch login action to Redux
      dispatch(login({ access_token, user_type, verified, role }));

  } catch (error) {
      console.error('Login failed:', error);
  } finally {
      // End loading state
      dispatch(setLoading(false));
  }
};

// Example action for logging out
export const logoutUser = () => (dispatch) => {
  // Perform any necessary cleanup (e.g., removing tokens from storage)
//   dispatch(logout());
};
