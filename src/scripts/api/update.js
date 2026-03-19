import axios from "axios";

// ==================== PUT ====================
export async function putUser(apiUrl, id, user) {
    try {
        const response = await axios.put(`${apiUrl}?id=${id}`, {
            name: user.name,
            age: Number(user.age),
            email: user.email,
        });
        return response.data;
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to update user';
        throw new Error(message);
    }
}

// ==================== PATCH ====================
export async function patchUser(apiUrl, id, fields) {
    if (fields.age !== undefined) {
        fields.age = Number(fields.age);
    }
    try {
        const response = await axios.patch(`${apiUrl}?id=${id}`, fields);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.error || 'Failed to patch user';
        throw new Error(message);
    }
}