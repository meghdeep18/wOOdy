import { Routes, Route } from 'react-router-dom'
import React, { useEffect, useState} from 'react';
import { Axios }  from 'axios'
// import { useNavigate } from 'react-router-dom';
// for components
import Header from './Component/Header'
import Footer from './Component/Footer';
// for the pages
import Services from './Pages/Services';
import About from './Pages/About';
import Index from './Pages/Index';
import Project from './Pages/Project';
import Feature from './Pages/Feature';
import Quote from './Pages/Quote';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Contact from './Pages/Contact';
import Login_page from './Pages/Login_page';
import Signup_page from './Pages/Signup_page';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import axios from 'axios';



function App() {
  return (
    <Routes>
      <Route path="/" index element={<><Header/><Index/><Footer/></>}/><Route/>
      <Route path="/about" element={<><Header/><About/><Footer/></>}/><Route/>
      <Route path="/services" element={<><Header/><Services/><Footer/></>}/><Route/>
      <Route path="/project" element={<><Header/><Project/><Footer/></>}/><Route/>
      <Route path="/feature" element={<><Header/><Feature/><Footer/></>}/><Route/>
      <Route path="/quote" element={<><Header/><Quote/><Footer/></>}/><Route/>
      <Route path="/team" element={<><Header/><Team/><Footer/></>}/><Route/>
      <Route path="/testimonial" element={<><Header/><Testimonial/><Footer/></>}/><Route/>
      <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/><Route/>
      <Route path="/profile" element={<><Header/><Profile/><Footer/></>}/><Route/>
      <Route path="/EditProfile" element={<><Header/><EditProfile/><Footer/></>}/><Route/>

      

      <Route path="/login_page" element={<><Header/><Login_page/><Footer/></>}/><Route/>
      <Route path="/signup_page" element={<><Header/><Signup_page/><Footer/></>}/><Route/>

      
    </Routes>

  );
}

export default App;
