// src/store/accounts/accountsThunks.js
import { setLoading, login, logout } from "./accountsSlice";
import axios from "axios";

// Fetch accounts from an API or backend
export const fetchAccounts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("/api/accounts");
    // Example: Dispatch another action to handle the accounts data
    dispatch(setAccounts(response.data));
  } catch (error) {
    console.error("Error fetching accounts:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
