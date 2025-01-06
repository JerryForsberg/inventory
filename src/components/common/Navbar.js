import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Inventory Management
            </Typography>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Inventory</Button>
            <Button color="inherit">Sales</Button>
            <Button color="inherit">Users</Button>
        </Toolbar>
    </AppBar>
);

export default Navbar;
