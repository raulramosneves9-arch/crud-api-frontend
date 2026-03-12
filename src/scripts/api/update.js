// Função para ATUALIZAR um usuário, POR COMPLETO
async function updateUser() {
    const response = await fetch("http://localhost:8000/api/users?index=0", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById('inputName').value,
            age: document.getElementById('inputAge').value,
            email: document.getElementById('inputEmail').value
        }),
    });
    const updated = await response.json();
    console.log(updated);
}