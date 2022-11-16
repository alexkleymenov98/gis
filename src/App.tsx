import React from 'react';
import './App.css';
import {Map} from "./components/Map";
import {Dashboard} from "./components/Dashboard";

function App() {
  return (
      <Dashboard>
          <Map/>
      </Dashboard>
  );
}

export default App;