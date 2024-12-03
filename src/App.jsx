import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthContext, { AuthProvider } from "./assets/Context/AuthContext"; // Import AuthProvider
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Service from "./assets/Pages/Service";
import Contact from "./assets/Pages/Contact";
import AppLayout from "./assets/Component/AppLayout";
import ServiceDetail from "./assets/Pages/ServiceDetail";
import ServiceItem from "./assets/Component/serviceItem";
import { CartProvider } from "./assets/Context/CartContext";
import LoginSign from "./assets/Component/LoginSign";
import Cart from "./assets/Pages/Cart";
import AdminDash  from "./assets/Admin/AdminDash";
import Payment from "./assets/Pages/Payment";

function App() {
  // ProtectedRoute Component for handling authorization
  function ProtectedRoute({ element }) {
    const { authState } = useContext(AuthContext); // Access authState
    
    // If not authenticated, redirect to login
    if (!authState.isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return element;  // Return the element when authenticated
  }

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Service />}>
                <Route path=":serviceName" element={<ServiceDetail />}>
                  <Route path=":subServiceName" element={<ServiceItem />} />
                </Route>
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<LoginSign isSignup={false} />} />
              <Route path="signup" element={<LoginSign isSignup={true} />} />
              
              {/* Protected Route for Cart */}
              <Route 
                path="/cart"
                element={
                  <ProtectedRoute 
                    element={<Cart />} 
                  />
                }
              />
             
            </Route>
            <Route 
                path="/AdminDashboard"
                element={<AdminDash/>} 
                  />
            
        <Route path="/payment" element={<Payment />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
