import { renderUsers } from "../dom/render.js";

// Função para CRIAR um novo usuário
export async function createUser() {
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
    renderUsers();
}