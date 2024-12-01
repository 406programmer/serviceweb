

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Service from './assets/Pages/Service';
import Contact from './assets/Pages/Contact';
import AppLayout from './assets/Component/AppLayout';
import ServiceDetail from './assets/Pages/ServiceDetail';
import ServiceItem from './assets/Component/serviceItem';
import {CartProvider} from './assets/Context/CartContext';
import LoginSign from './assets/Component/LoginSign'; 

function App() {
 

  return (
    <CartProvider>

    <Router>
      <Routes>
       
        <Route path='/' element={<AppLayout/>}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Service />}>
         
            <Route path=":serviceName" element={<ServiceDetail />}>
              <Route path=":subServiceName" element={<ServiceItem />} />
            </Route>
          </Route>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<LoginSign />} /> 
       
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  )
}

export default App
