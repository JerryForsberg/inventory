import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getInventory, addInventoryItem, updateInventory } from '../../../services/api';
import { Box, TextField, Button, Typography } from '@mui/material';

const Inventory = () => {
    const [inventory, setInventory] = useState([]); // Inventory list
    const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' }); // For adding new items
    const [updateItem, setUpdateItem] = useState({ id: '', quantity: '' }); // For updating an item
    const [loading, setLoading] = useState(false);

    // Fetch all inventory on page load
    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            setLoading(true);
            const response = await getInventory() // Fetch all inventory
            setInventory(response.data);
        } catch (error) {
            console.error('Error fetching inventory:', error);
        } finally {
            setLoading(false);
        }
    };

    const addNewInventoryItem = async () => {
        try {
            const { name, quantity, price } = newItem;
            if (!name || !quantity || !price) {
                alert('Please provide all fields');
                return;
            }

            const response = await addInventoryItem(newItem)

            console.log('Item added:', response.data);
            setInventory((prevInventory) => [...prevInventory, response.data])
            setNewItem({ name: '', quantity: '', price: '' });
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const updateInventoryItem = async () => {

        let prevInventory = [];

        try {
            const { id, quantity } = updateItem;
            if (!id || !quantity) {
                alert('Please provide both ID and quantity');
                return;
            }

            prevInventory = [...inventory];

            setInventory((prevInventory) =>
                prevInventory.map((item) =>
                    item.ID === id ? { ...item, Quantity: quantity } : item
                )
            );

            const response = await updateInventory(id, quantity)
            console.log('Item updated:', response.data);
            setUpdateItem({ id: '', quantity: '' });
        } catch (error) {
            console.error('Error updating item:', error);
            setInventory(prevInventory)
        }
    };

    const columns = [
        { field: 'ID', headerName: 'ID', width: 100 },
        { field: 'Name', headerName: 'Name', width: 200 },
        { field: 'Quantity', headerName: 'Quantity', width: 150 },
        { field: 'Price', headerName: 'Price', width: 200 }
    ];

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Inventory Management
            </Typography>

            {/* Display Inventory using DataGrid */}
            <Box sx={{ height: 400, marginBottom: 4 }}>
                <DataGrid
                    rows={inventory}
                    columns={columns}
                    loading={loading}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    getRowId={(row) => row.ID}
                />
            </Box>

            {/* Add New Item */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Add New Inventory Item
                </Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="Price"
                    type="number"
                    variant="outlined"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    sx={{ marginRight: 2 }}
                />
                <Button variant="contained" onClick={addNewInventoryItem}>
                    Add Item
                </Button>
            </Box>

            {/* Update Existing Item */}
            <Box>
                <Typography variant="h6" gutterBottom>
                    Update Inventory Item
                </Typography>
                <TextField
                    label="ID"
                    type="number"
                    variant="outlined"
                    value={updateItem.id}
                    onChange={(e) => setUpdateItem({ ...updateItem, id: parseInt(e.target.value) })}
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    label="New Quantity"
                    type="number"
                    variant="outlined"
                    value={updateItem.quantity}
                    onChange={(e) => setUpdateItem({ ...updateItem, quantity: parseInt(e.target.value) })}
                    sx={{ marginRight: 2 }}
                />
                <Button variant="contained" onClick={updateInventoryItem}>
                    Update Item
                </Button>
            </Box>
        </Box>
    );
};

export default Inventory;
