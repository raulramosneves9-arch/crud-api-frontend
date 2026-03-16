import { getUsers } from '../api/read.js';
import { deleteUser } from '../api/delete.js';


export async function renderUsers() {
    const data = await getUsers();
    data.users.forEach(user => {
        const userList = document.getElementById('user-list')

        userList.innerHTML += `
            <article class="card p-5 gap-3">
                <div class="card-body">
                    <h5 class="fw-bold">${user.name}</h5>
                    <p class="mb-1"><strong>Age:</strong> ${user.age}</p>
                    <p class="mb-1"><strong>Email:</strong> ${user.email}</p>
                </div>
                <div class="card-footer d-flex gap-2">
                    <button class="btn btn-outline-dark btn-sm w-50">Edit</button>
                    <button id="delete-${user.id}" data-id="${user.id}" class="btn btn-outline-danger btn-sm w-50">Delete</button>
                </div>
            </article>
        `
        // ADICIONA ISSO:
        document.getElementById(`delete-${user.id}`)
            .addEventListener('click', () => {
                console.log('clicou delete', user.id)
                deleteUser(user.id)
            })

    });
}
