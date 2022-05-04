const URL = 'https://jsonplaceholder.typicode.com/users';

const send = document.getElementById('send');
const userName = document.getElementById('userName');
const name = document.getElementById('name');
const email = document.getElementById('email');

function getProducts() {
    fetch(URL).then(response => response.json());
}

async function createProduct () {
    const data = {
        name: name.value,
        username: userName.value,
        email: email.value
    }
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }

    fetch(URL, option).then(response => {
        if (response.ok) {
            getProducts();
        }
    })
}
send.addEventListener('click',createProduct);