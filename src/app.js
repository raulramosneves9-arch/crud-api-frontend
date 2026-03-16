// APPS.JS
import { createUser } from './scripts/api/created.js'
import { getUsers } from './scripts/api/read.js'
import { updateUser } from './scripts/api/update.js'
import { deleteUser } from './scripts/api/delete.js'
// FORMULÁRIO
const userName = document.getElementById('inputName');
const userAge = document.getElementById('inputAge');
const userEmail = document.getElementById('inputEmail');
// BOTÃO CRIAR FORMLUÁRIO
const createButton = document.getElementById('createButton');

getUsers();