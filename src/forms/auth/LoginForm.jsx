import { Form, Formik } from "formik";
import React from "react";
import { loginSchema } from "../validationSchemas/loginSchema";
import TextInput from "../../components/inputs/TextInput";
import { FaUser, FaLock } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { handleLogin } from "../../api/auth/authenticationApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../../components/toast/toastUtils";

const LoginForm = () => {
  const { theme } = useTheme();
  //   const handleLogin = () => {
  //     console.log("hello world");
  //   };
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Call handleLogin and pass dispatch and form values
      await handleLogin(dispatch, values, navigation);
    } catch (error) {
      showErrorToast('Login failed: ')
      // Optionally show a user-friendly error message here
    } finally {
      setSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              icon={FaUser} // Pass an icon to the input component
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              icon={FaLock}
            />
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label
                htmlFor="remember"
                className={`ml-2 ${
                  theme === "light" ? "text-light-text" : "text-dark-text"
                }`}
              >
                Remember you account
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
