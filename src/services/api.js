import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.azurewebsites.net';

export const getInventory = async () => axios.get(`${API_BASE_URL}/inventory`);
export const addInventoryItem = async (item) => axios.post(`${API_BASE_URL}/inventory`, item);
