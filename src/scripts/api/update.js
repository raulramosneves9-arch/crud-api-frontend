export async function putUser(id, { name, age, email }) {
    const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, email }),
    });
    const updated = await response.json();
    console.log(updated);
    return updated;
}

export async function patchUser(id, fields) {
    const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
    });
    const patch = await response.json();
    console.log(patch);
    return patch;
}

// function updateUser(user) {
//     const user = 
//  }
// //Verificação:
