import { toast, ToastContainer } from 'react-toastify';

// Function for success messages
export const showSuccessToast = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
  });
};

// Function for error messages
export const showErrorToast = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
  });
};

// Function for warning messages
export const showWarningToast = (message) => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
  });
};

// Function for info messages
export const showInfoToast = (message) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
  });
};
