const userName = document.getElementById('inputName');
const userAge = document.getElementById('inputAge');
const userEmail = document.getElementById('inputEmail');
const createButton = document.getElementById('createButton');

// Função para CRIAR um novo usuário
async function createUser() {
    const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById('inputName').value,
            age: document.getElementById('inputAge').value,
            email: document.getElementById('inputEmail').value
        }),
    });

    const created = await response.json(); // ← agora está DENTRO da função!
    console.log(created);
}

createButton.addEventListener('click', createUser); // ← conecta botão à função

// Função para ATUALIZAR um usuário, POR COMPLETO
async function updateUser() {
    const response = await fetch("http://localhost:8000/api/users?index=0", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Victor Atualizado",
            age: 25,
            email: "novo@email.com"
        }),
    });
    const updated = await response.json();
    console.log(updated);
}

// Função para GET a lista de usuários
async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const users = await response.json();
    console.log(users);
}

// Função para DELETAR um usuário
const response = await fetch("http://localhost:8000/api/users?index=0", {
    method: "DELETE",
});
const result = await response.json();