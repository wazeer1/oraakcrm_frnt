import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboard_menu: false,
};

const handleSlice = createSlice({
  name: 'handle',
  initialState,
  reducers: {
    // Handles user login and stores the access token, role, and verification status
    handleMenu(state) {
      state.dashboard_menu = !state.dashboard_menu;
    },
  },
});

// Export actions
export const {handleMenu } = handleSlice.actions;

// Export the reducer
export default handleSlice.reducer;
