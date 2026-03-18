// APPS.JS
import { createUser } from './scripts/api/create.js'
import { putUser, patchUser } from './scripts/api/update.js'
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

// //FORMS
// const originalNome = name;
// const originalAge = age;
// const originalEmail = email;


// Abre o formulário de edição com os dados do usuário
async function putpatchEdit(event) {
    const btn = event.target.closest('.editbtn');
    if (!btn) return;

    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const age = btn.dataset.age;
    const email = btn.dataset.email;

    // Preenche os campos
    document.getElementById('editId').value = id;
    document.getElementById('editName').value = name;
    document.getElementById('editAge').value = age;
    document.getElementById('editEmail').value = email;

    // Mostra a seção de edição // Esconde seção de create
    document.getElementById('edit-section').style.display = 'block';
    document.getElementById('create-form').style.display = 'none';
}

// Cancela a edição
document.getElementById('cancelButton').addEventListener('click', () => {
    document.getElementById('edit-section').style.display = 'none';
});

// Salva a edição
document.getElementById('updateButton').addEventListener('click', async () => {
    const id = document.getElementById('editId').value;
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const email = document.getElementById('editEmail').value;

    await putUser(id, { name, age, email });
    document.getElementById('create-form').style.display = 'block';
    document.getElementById('edit-section').style.display = 'none';
    await renderUsers();
});

document.addEventListener('click', putpatchEdit);

renderUsers();