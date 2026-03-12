// Função para GET a lista de usuários
async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const users = await response.json();
    console.log(users);
}

