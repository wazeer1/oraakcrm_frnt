import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import MainRouter from "./routers/router/MainRouter.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MainRouter />
        <ToastContainer /> 
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
