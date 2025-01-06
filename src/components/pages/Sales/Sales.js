// Sales.js
import React, { useState } from 'react';
import './Sales.css';

const Sales = () => {
    const [salesData, setSalesData] = useState([]);
    const [newSale, setNewSale] = useState({ product: '', quantity: 0, price: 0 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSale((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddSale = (e) => {
        e.preventDefault();
        setSalesData((prevData) => [...prevData, { ...newSale, id: prevData.length + 1 }]);
        setNewSale({ product: '', quantity: 0, price: 0 });
    };

    return (
        <div className="sales-container">
            <h1>Sales Page</h1>

            {/* Sales Data Form */}
            <div className="form-section">
                <h2>Add New Sale</h2>
                <form onSubmit={handleAddSale}>
                    <input
                        type="text"
                        name="product"
                        placeholder="Product Name"
                        value={newSale.product}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={newSale.quantity}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newSale.price}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Sale</button>
                </form>
            </div>

            {/* Sales Data Table */}
            <div className="table-section">
                <h2>Past Sales</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((sale) => (
                            <tr key={sale.id}>
                                <td>{sale.product}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.price}</td>
                                <td>{sale.quantity * sale.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sales;
