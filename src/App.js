import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import './App.css';
import { VENUES_URL } from './constants/index.js';
import useApi from './hooks/useApi';
import Home from './components/pages/home';
import SpecificVenue from './components/pages/venue';
import RegistrationForm from './components/pages/register';
import ProfilePage from './components/pages/profile';
import AdminLayout from './components/pages/admin';
import AdminSpecificVenue from './components/pages/admin-specific-venue';
import LoginPage from './components/pages/login';
import ContactPage from './components/pages/contact';
import AboutPage from './components/pages/about';

function App() {

  useApi(VENUES_URL);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="venue/:id" element={<SpecificVenue />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="admin" element={<AdminLayout />} />
          <Route path="admin/venue/:id" element={<AdminSpecificVenue />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
