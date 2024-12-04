import React, { createContext, useState, useEffect, useContext } from "react";

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ user: null, loading: true });
  
  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        // Simulate async call to fetch auth data from backend
        const response = await fetch("/api/auth"); // Replace with your backend API
        const data = await response.json();

        // Assuming the response contains user data
        setAuthState({ user: data.user, loading: false });
      } catch (error) {
        console.error("Error fetching auth data:", error);
        setAuthState({ user: null, loading: false });
      }
    };

    fetchAuthData();
  }, []);

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
