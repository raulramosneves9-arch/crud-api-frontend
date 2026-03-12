// Função para DELETAR um usuário
const response = await fetch("http://localhost:8000/api/users?index=0", {
    method: "DELETE",
});
const result = await response.json();