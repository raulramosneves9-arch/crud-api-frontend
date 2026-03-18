// APPS.JS
import { updateUser, patchUser } from
    './scripts/api/update.js';

import { createUser } from './scripts/api/create.js'
import { deleteUser } from './scripts/api/delete.js'
import { renderUsers, findUserById } from './scripts/dom/render.js'

// CONFIG
const apiUrl = 'http://localhost:8000/api/users';

// DOM
let editingId = null;
let originalUser = null;
const formTitle =
    document.getElementById('form-title');
const submitBtn =
    form.querySelector('button[type="submit"]');
const cancelBtn =
    document.getElementById('cancel-edit');

const form = document.getElementById('create-user-form');
const formError = document.getElementById('form-error');
const usersSection = document.getElementById('users');

// ERROR
function showError(message) {
    formError.textContent = message;
    formError.classList.remove('d-none');
}

function hideError() {
    formError.classList.add('d-none');
    formError.textContent = '';
}

// CREATE
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    hideError();

    try {
        await createUser(apiUrl, { name, age, email });
        form.reset();
        renderUsers(apiUrl);
    } catch (error) {
        showError(error.message);
    }
});

// DELETE
function getUserFromCard(button) {
    const card = button.closest('.user-card');
    return findUserById(Number(card.id));
}

usersSection.addEventListener('click', async (event) => {
    const { target } = event;

    if (target.dataset.action === 'delete') {
        const user = getUserFromCard(target);

        if (!confirm('Are you sure you want to delete this user?')) return;

        try {
            await deleteUser(apiUrl, user.id);
            renderUsers(apiUrl);
        } catch (error) {
            showError(error.message);
        }
    }
});

// INIT
document.addEventListener('DOMContentLoaded', () => renderUsers(apiUrl));