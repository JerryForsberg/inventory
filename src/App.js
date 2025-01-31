import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Inventory from './components/pages/Inventory/Inventory.js';
import Sales from './components/pages/Sales/Sales.js';
import Users from './components/pages/UserManagement/UserManagement.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme from the theme.js file
import { API_BASE_URL } from './services/api.js'
import './App.css';
import Login from './components/common/Login.js';
import axios from 'axios';
function App() {

  const [user, setUser] = useState(null); // user is initially null

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/auth/me`, { withCredentials: true }) // Make a GET request to your backend
      .then(response => {
        console.log('response in app.js: ', response)
        const parsedUser = JSON.parse(response)
        setUser(parsedUser.userId); // If successful, store user data in state
      })
      .catch(() => {
        setUser(null); // If failed (e.g., no valid session), set user to null
      });
  }, []); // This effect runs once when the component mounts (empty dependency array)


  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/user-management" element={<Users />} />
          </Routes>
        </Router>
      ) : (
        <div>
          <p>No Access</p>
          <Login />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
