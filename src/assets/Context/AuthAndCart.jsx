import { useContext } from "react";
import AuthContext from "./AuthContext";
import CartContext from "./CartContext";

export const useAuthAndCart = () => {
  const { authState, dispatch: authDispatch } = useContext(AuthContext);
  const { cart, dispatch: cartDispatch } = useContext(CartContext);

  return {
    // Authentication
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
    login: (userData) => authDispatch({ type: "LOGIN", payload: userData }),
    logout: () => authDispatch({ type: "LOGOUT" }),

    // Cart
    cart,
    addToCart: (item) => cartDispatch({ type: "ADD_TO_CART", payload: item }),
    removeFromCart: (item) => cartDispatch({ type: "REMOVE_FROM_CART", payload: item }),
  };
};
