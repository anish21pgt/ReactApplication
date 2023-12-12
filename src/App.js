import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Message from './components/Message';
import Facilities from './pages/Facilities';
import ExtraActivity from './pages/Extracurricular';
import Sports from './pages/Sports';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Auth from '../src/components/Auth';
import SignUp from '../src/components/SignUp';
import { useState } from "react";
import User from './pages/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';



export function App() {
  const [user, setUser] = useState(null);
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {user ? (
            <Route
              path="user"
              element={<User logout={() => setUser(false)} />}
            />
          ) : (
            <Route path="user" element={<Navigate to="/" />} />
          )}
          <Route path="/" element={<Home />} />
          <Route path="/about/aboutabc" element={<About />} />
          <Route path="/activities/extracurricular" element={<ExtraActivity />} />
          <Route path="/activities/sports" element={<Sports />} />
          <Route path="/about/message" element={<Message />} />
          <Route path="/about/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          {!user && (
            <Route
              path="auth"
              element={<Auth authenticate={() => setUser(true)} />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
