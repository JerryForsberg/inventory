import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:7071/api';

export const getInventory = async () => axios.get(`${API_BASE_URL}/getInventory`);
export const addInventoryItem = async (item) => axios.post(`${API_BASE_URL}/addInventory`, item);
export const updateInventory = async (id, newQuantity) => axios.put(`${API_BASE_URL}/updateInventory?id=${id}`, { quantity: newQuantity });
export const getAnalytics = async () => axios.get(`${API_BASE_URL}/getAnalytics`);
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const response = axios.post(
        `${API_BASE_URL}/uploadFile`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
    );
    return response
}


