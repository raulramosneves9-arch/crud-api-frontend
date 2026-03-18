import { getUsers } from '../api/read.js';

export async function renderUsers() {
    const data = await getUsers();
    const userList = document.getElementById('user-list'); // ✅ fora do loop

    userList.innerHTML = ''; // ✅ limpa antes de renderizar

    data.users.forEach(user => {
        userList.insertAdjacentHTML('beforeend', `
            <article class="card p-5 gap-3">
                <div class="card-body">
                    <h5 class="fw-bold">${user.name}</h5>
                    <p class="mb-1"><strong>Age:</strong> ${user.age}</p>
                    <p class="mb-1"><strong>Email:</strong> ${user.email}</p>
                </div>
                <div class="card-footer d-flex gap-2">
                    <button class="btn btn-outline-dark btn-sm w-50">Edit</button>
                    <button data-id="${user.id}" class="deletebtn btn btn-outline-danger btn-sm w-50">Delete</button>
                </div>
            </article>
        `);
    });
}
