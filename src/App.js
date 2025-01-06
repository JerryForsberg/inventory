import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard.js';
import Inventory from './components/pages/Inventory/Inventory.js';
import Sales from './components/pages/Sales/Sales.js';
import Users from './components/pages/UserManagement/UserManagement.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme from the theme.js file
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/sales" component={Sales} />
          <Route path="/users" component={Users} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
