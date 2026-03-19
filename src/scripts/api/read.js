import axios from 'axios';
// ==================== CONFIG ====================
const apiUrl = 'http://localhost:8000/api/users';

// ==================== GET ====================
export async function getUsers(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to fetch users';
        throw new Error(message);
    }
}