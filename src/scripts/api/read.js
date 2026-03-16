// Função para GET a lista de usuários
export async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const users = await response.json();
    console.log(users);


    users.users.forEach(user => {
        const userList = document.getElementById('user-list')

        userList.innerHTML += `
        <article class="card col p-3 m-3">
            <div class="card-body">
                <h5 class="fw-bold">${user.name}</h5>
                <p class="mb-1"><strong>Age:</strong> ${user.age}</p>
                <p class="mb-1"><strong>Email:</strong> ${user.email}</p>
            </div>
            <div class="card-footer d-flex gap-2">
                <button class="btn btn-outline-dark btn-sm w-50">Edit</button>
                <button class="btn btn-outline-danger btn-sm w-50">Delete</button>
            </div>
        </article>
    `
    });
}



