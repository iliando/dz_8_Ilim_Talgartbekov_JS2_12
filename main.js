const URL = 'http://localhost:5555/products';

const send = document.getElementById('send');

function getProducts() {
    fetch(URL).then(response => response.json());
}

async function createProduct () {
    const data = {
        name: name.value,
        username: username.value,
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