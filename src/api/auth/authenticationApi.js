// import axiosInstance from "../axiosInstance";
import axiosInstance from "..";
import { showErrorToast } from "../../components/toast/toastUtils";
import { loginUser } from "../../store/account/actions";

// Modify the function to accept dispatch as a parameter
export const handleLogin = async (dispatch, loginData, navigation) => {
  try {
    const response = await axiosInstance.post("accounts/login/", loginData);

    if (response.data.StatusCode === 6000) {
      const data = response.data.data;
      console.log(data, "_____data");
      dispatch(
        loginUser({
          access_token: data.access_token,
          verified: true,
          user_type: data.user_type,
          role: "admin",
        })
      );
      navigation("/");
    } else {
      alert(response.data.message || "Login failed");
    }
    // // Use the passed dispatch to call loginUser
    // if (loginData.username === "Admin" && loginData.password === "admin@123") {
    //   dispatch(
    //     loginUser({
    //       access_token: "123",
    //       verified: true,
    //       role: "admin",
    //     })
    //   );
    //   navigation("/");
    // } else {
    //   console.log("hello world");
    //   showErrorToast("Invalid credentials");
    // }

    // } else {
    //   alert(response.data.message || "Login failed");
    // }
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};
