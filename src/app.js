// APPS.JS
import { createUser } from './scripts/api/create.js'
import { updateUser } from './scripts/api/update.js'
import { deleteUser } from './scripts/api/delete.js'
import { renderUsers } from './scripts/dom/render.js'

// FORMULÁRIO
const userName = document.getElementById('inputName');
const userAge = document.getElementById('inputAge');
const userEmail = document.getElementById('inputEmail');

// BOTÃO CRIAR FORMLUÁRIO
const createButton = document.getElementById('createButton');
createButton.addEventListener('click', createUser); // ← conecta botão à função

// DELETE BOTTON

async function handleDelete(event) {
    const btn = event.target.closest('.deletebtn'); // ✅ .classe
    if (!btn) return;

    const id = btn.dataset.id;
    await deleteUser(id);
    await renderUsers();
}

document.addEventListener('click', handleDelete);

renderUsers();