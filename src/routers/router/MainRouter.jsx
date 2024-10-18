import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import AppRouter from "./AppRouter";
import AuthRoutes from "../routes/AuthRoute";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../../store/account/accountsSlice";

const MainRouter = () => {
  const { theme } = useTheme();
  console.log(theme);
  const dispatch = useDispatch()
  useEffect(()=>{
    const access_token = localStorage.getItem('access_token');
    const user_type = localStorage.getItem('user_type');
    const verified = localStorage.getItem('verified') === 'true';  // Convert back to boolean
    const role = localStorage.getItem('role');
    if (access_token){
      dispatch(login({ access_token, user_type, verified, role }));
    }
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <AppRoutes>
                <AppRouter />
              </AppRoutes>
            }
          />
          <Route
            path="/auth/*"
            element={
              <AuthRoutes>
                <AuthRouter />
              </AuthRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
