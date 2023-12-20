const url = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', () => {
    let nameInput = document.querySelector("#nameInput");
    let surnameInput = document.querySelector("#surnameInput");
    let emailInput = document.querySelector("#exampleInputEmail1");
    let passInput = document.querySelector("#exampleInputPassword1");
    let registration = document.querySelector("#registration");

    if (nameInput && surnameInput && emailInput && passInput && registration && success) {

        registration.addEventListener('click', function toRegister() {
            let obj = {
                name: nameInput.value,
                surname: surnameInput.value,
                email: emailInput.value,
                password: passInput.value,
            };

            const create = (data) => {
                fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Errore durante la registrazione');
                    }
                })
                .then(json => {
                    let p = document.createElement("p");
                    p.innerText = "Registrazione avvenuta con successo!";
                    p.classList.add("text-primary");
                    success.appendChild(p);
                })
                .catch(err => console.log(err));
            };

            create(obj);
        });
    }

    let emailInputLOGIN = document.querySelector("#exampleInputEmail2");
    let passInputLOGIN = document.querySelector("#exampleInputPassword2");
    let login = document.querySelector("#login");

    if (emailInputLOGIN && passInputLOGIN && login) {
        login.addEventListener('click', function toLogin() {
            const email = emailInputLOGIN.value;
            const password = passInputLOGIN.value;

            // Effettua la richiesta al server per verificare l'email e la password
            fetch(url + `?email=${email}&password=${password}`)
            .then(response => response.json())
            .then(users => {
                const user = users.find(u => u.email === email && u.password === password);
                if (user) {
                    console.log("Login avvenuto con successo");
                } else {
                    console.log("Email o password non validi");
                    // Gestione del caso in cui l'email o la password non corrispondono
                }
            })
            .catch(err => console.log(err));
        });
    }
});

