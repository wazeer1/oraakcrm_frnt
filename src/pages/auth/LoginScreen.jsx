import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { DarkLogo, LightLogo, LoginBg } from "../../assets/images";
import LoginForm from "../../forms/auth/LoginForm";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { constants } from "../../utils/constants/constants";

const LoginScreen = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div
      className={`h-screen flex ${
        theme === "light" ? "bg-light-background" : "bg-dark-background"
      }`}
    >
      <div className="w-[50%] h-screen">
        <img src={LoginBg} className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="w-[400px] ">
          <div className="mb-10">
            {/* <div>
              <img src={theme === "light" ? DarkLogo : LightLogo} />
            </div> */}
            <h4
              className={`${
                theme === "light" ? "text-light-text" : "text-dark-text"
              }`}
            >
              Welcome back to Loops POS{" "}
            </h4>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="fixed top-2 right-2 ">
        <span className="cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? (
            <FaSun color={`${theme === "light" ? "#000" : "#fff"}`} />
          ) : (
            <FaMoon color={`${theme === "light" ? "#000" : "#fff"}`} />
          )}
        </span>
      </div>
    </div>
  );
};

export default LoginScreen;
