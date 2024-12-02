// src/context/AuthContext.js
import { createContext, useReducer } from "react";

// Initial State for Authentication
const initialAuthState = {
  isAuthenticated: false,
  user: null,  // Store user data like name, email, etc.
};

// Reducer function for handling authentication actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // Payload will be user data after login
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null, // Reset user data on logout
      };
    default:
      return state;
  }
};

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
