import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signinpage from '../../pages/signinpage/Signinpage';
import Categorypage from '../../pages/categorypage/Categorypage';
import Infopage from '../../pages/infopage/Infopage';
import Moviepage from '../../pages/moviepage/Moviepage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Signinpage />} />
      <Route path='/category' element={<Categorypage />} />
      <Route path='/info' element={<Infopage />} />
      <Route path='/movies' element={<Moviepage />} />
    </Routes>
  );
}
