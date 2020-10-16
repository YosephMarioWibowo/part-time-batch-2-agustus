import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { NavBar } from "./template"
import './App.css';

function App() {
  return (
    <div className="App next">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
