import React, { createContext, useReducer, useContext, useEffect } from "react";

// Initial State for Authentication
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  token: localStorage.getItem('token') || null,
  paymentId: null, // Add paymentId field here
};

// Reducer function for handling authentication actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // Store token in localStorage when logging in
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
      // Remove token from localStorage on logout
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        paymentId: null, // Clear paymentId on logout
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_PAYMENT_ID":
      // Add paymentId to the state
      return {
        ...state,
        paymentId: action.payload,
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

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          // Verify token with your backend
          const response = await fetch("/api/verify-token", {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          if (response.ok) {
            const userData = await response.json();
            dispatch({ 
              type: "LOGIN", 
              payload: { 
                user: userData, 
                token: token 
              } 
            });
          } else {
            // Token is invalid, logout
            dispatch({ type: "LOGOUT" });
          }
        } catch (error) {
          console.error("Token verification error:", error);
          dispatch({ type: "LOGOUT" });
        }
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Action to set the paymentId
export const setPaymentId = (dispatch, paymentId) => {
  dispatch({ type: "SET_PAYMENT_ID", payload: paymentId });
};

export default AuthContext;
