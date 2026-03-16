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
const deletebutton = document.getElementById('deleteButton');
createButton.addEventListener('click', createUser); // ← conecta botão à função

renderUsers();
//addEventListener('click', () => deleteUser);