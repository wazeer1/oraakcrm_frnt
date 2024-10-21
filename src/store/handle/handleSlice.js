import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboard_menu: false,
  create_customer: false,
};

const handleSlice = createSlice({
  name: 'handle',
  initialState,
  reducers: {
    // Handles user login and stores the access token, role, and verification status
    handleMenu(state) {
      state.dashboard_menu = !state.dashboard_menu;
    },
    handleCustModal(state) {
      state.create_customer = !state.create_customer;
    },
  },
});

// Export actions
export const {handleMenu, handleCustModal } = handleSlice.actions;

// Export the reducer
export default handleSlice.reducer;
