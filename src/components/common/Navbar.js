import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Inventory Management
            </Typography>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Dashboard</NavLink>
                <NavLink to="/sales" className={({ isActive }) => isActive ? styles.active : styles.link}>Sales</NavLink>
                <NavLink to="/inventory" className={({ isActive }) => isActive ? styles.active : styles.link}>Inventory</NavLink>
                <NavLink to="/user-management" className={({ isActive }) => isActive ? styles.active : styles.link}>User Management</NavLink>
            </nav>
        </Toolbar>
    </AppBar>
);

export default Navbar;
