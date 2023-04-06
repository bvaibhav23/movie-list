import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NavBar from './components/NavBar';
import ComponyInfo from './components/ComponyInfo';
import Home from './components/Home';

const App = () => {
  const [login, setLogin] = useState(false);
  return (<>
    <NavBar login={login} setLogin={setLogin} />
    <Routes>
      <Route path="/home" element={<Home login={login} />} />
      <Route path="/login" element={<LoginPage setLogin={setLogin} />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/companyInfo" element={<ComponyInfo />} />
    </Routes>
  </>
  );
};

export default App;