import axios from 'axios';

/**
 * Global Axios Instance for API requests.
 * Uses relative URL so requests go through the nginx reverse proxy.
 */
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
