import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Map as Leaflet} from './components/Map';

import Home from './Home';
import { OL } from './OLMap/OL';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" index/>
        <Route element={<Leaflet/>} path="/leaflet"/>
        <Route element={<OL/>} path="/ol"/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;