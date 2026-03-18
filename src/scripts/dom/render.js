// RENDER.JS
import { getUsers } from '../api/read.js';

// CACHE
let usersCache = [];

export function findUserById(id) {
    return usersCache.find((user) => user.id === id);
}

// RENDER
export async function renderUsers(apiUrl) {
    const users = await getUsers(apiUrl);
    usersCache = users;

    const usersSection = document.getElementById('users');

    if (users.length === 0) {
        usersSection.innerHTML = '<p class="text-muted">No users found.</p>';
        return;
    }

    usersSection.innerHTML = '';

    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
        userDiv.innerHTML = `
            <div class="card user-card h-100 col-12" id="${user.id}">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${user.name}</h5>
                    <p class="card-text mb-1"><strong>Age:</strong> ${user.age}</p>
                    <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                </div>
                <div class="card-footer bg-white border-0 d-flex gap-2">
                    <button class="editbtn btn btn-outline-dark btn-sm py-0 w-50"
                        data-action="edit"
                        data-id="${user.id}"
                        data-name="${user.name}"
                        data-age="${user.age}"
                        data-email="${user.email}">Edit</button>
                    <button class="deletebtn btn btn-outline-danger btn-sm py-0 w-50"
                        data-action="delete"
                        data-id="${user.id}">Delete</button>
                </div>
            </div>
        `;
        usersSection.appendChild(userDiv);
    });
}