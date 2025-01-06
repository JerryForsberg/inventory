import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getInventory } from '../../../services/api';

const Inventory = () => {
    const [inventory, setInventory] = useState();

    useEffect(() => {
        getInventory().then((response) => setInventory(response.data));
    }, []);
    const rows = []; // Fetch inventory data from the backend.
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Item Name', width: 150 },
        { field: 'stock', headerName: 'Stock Level', width: 150 },
        { field: 'location', headerName: 'Warehouse Location', width: 150 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            {/* TODO: Render the inventory data when api and data are available */}
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default Inventory;
