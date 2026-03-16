// Função para GET a lista de usuários
export async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    return data;
}