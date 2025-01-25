import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const showSuccessNotification = (message) => {
  toast(message, {
    autoClose: 2800,
    theme: "auto",
    progressStyle: {
      background: "#4caf50",
    },
  });
};

export const showErrorNotification = (message) => {
  toast(message, {
    autoClose: 3500,
    theme: "auto",
    progressStyle: {
      background: "#f44336",
    },
  });
};

export const showInfoNotification = (message) => {
  toast(message, {
    autoClose: 3500,
    theme: "auto",
    progressStyle: {
      background: "#ffeb3b",
    },
  });
};
