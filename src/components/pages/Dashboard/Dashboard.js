// Dashboard.tsx
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    console.log("Dashboard hit")
    // Sample data
    const salesData = [
        { month: 'Jan', sales: 120 },
        { month: 'Feb', sales: 150 },
        { month: 'Mar', sales: 180 },
        { month: 'Apr', sales: 130 },
        { month: 'May', sales: 170 },
        { month: 'Jun', sales: 200 },
    ];

    const lowStockItems = [
        { id: 1, name: 'Product A', stock: 5 },
        { id: 2, name: 'Product B', stock: 2 },
        { id: 3, name: 'Product C', stock: 8 },
    ];

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>

            {/* Total Stock and Alerts */}
            <div className="metrics-section">
                <div className="metric-card">
                    <h2>Total Stock</h2>
                    <p>1,245 Items</p>
                </div>
                <div className="metric-card">
                    <h2>Low Stock Alerts</h2>
                    <ul>
                        {lowStockItems.map((item) => (
                            <li key={item.id}>
                                {item.name}: <strong>{item.stock} left</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sales Trends Chart */}
            <div className="chart-section">
                <h2>Sales Trends</h2>
                <LineChart width={600} height={300} data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            {/* Sales Breakdown */}
            <div className="chart-section">
                <h2>Sales Breakdown</h2>
                <BarChart width={600} height={300} data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;
