

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Service from './assets/Pages/Service';
import Contact from './assets/Pages/Contact';
import AppLayout from './assets/Component/AppLayout';
import ServiceDetail from './assets/Pages/ServiceDetail';


function App() {
 

  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<AppLayout/>}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Service/>}/>
        <Route path="services/:serviceName" element={<ServiceDetail />} />
        <Route path="contact" element={<Contact/>}/>
        
        </Route>
      </Routes>
    </Router>
  )
}

export default App
