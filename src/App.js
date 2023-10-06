import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signinpage from './pages/signinpage/Signinpage';
import Categorypage from './pages/categorypage/Categorypage';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Signinpage />} />
      <Route path='/category' element={<Categorypage />} />
    </Routes>
  );
}
