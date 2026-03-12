const userName = document.getElementById('inputName');
const userAge = document.getElementById('inputAge');
const userEmail = document.getElementById('inputEmail');
const createButton = document.getElementById('createButton');

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