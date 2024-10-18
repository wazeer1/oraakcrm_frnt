import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: null,
  verified: false,
  user_type: null,
  role: null,
  loading: false,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    // Handles user login and stores the access token, role, and verification status
    login(state, action) {
      state.access_token = action.payload.access_token;
      state.verified = action.payload.verified;
      state.role = action.payload.role;
      state.user_type = action.payload.user_type;
    },
    // Handles user logout, resetting the authentication state
    logout(state) {
      state.access_token = null;
      state.verified = false;
      state.role = null;
      state.user_type = null;
    },
    // Adds an account to the state (if you're managing multiple accounts)
    addAccount(state, action) {
      if (!state.accounts) state.accounts = []; // Ensure accounts array exists
      state.accounts.push(action.payload);
    },
    // Sets the loading state for asynchronous actions
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { login, logout, addAccount, setLoading } = accountsSlice.actions;

// Export the reducer
export default accountsSlice.reducer;
