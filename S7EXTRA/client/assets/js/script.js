//URL ALL'API
const urlApi = 'http://localhost:3000/'; //lo slash sarà accompagnato da login e register

// -------------------------------- CORPO PRINCIPALE ----------------------------------------
//questo evento lo aggiungiamo perché abbiamo inserito lo script in alto nell'head
document.addEventListener('DOMContentLoaded', () => {
    
    // --------------------- PULSANTI PRINCIPALI -----------------------------
    //pulsante di registrazione
    let btnRegister = document.querySelector('#register-page button');
    //pulsante di login
    let btnLogin = document.querySelector('#login-page button');
    //pulsante per aggiungere i prodotti per la pagina di admin 
    let addProduct = document.querySelector("#addProduct");

    //se esiste il pulsante di registrazione nella pagina, allora...
    if(btnRegister){
        btnRegister.addEventListener('click', registerEvent)
    } else if(btnLogin){ //se esiste il pulsante di login nella pagina, allora...
        btnLogin.addEventListener('click', loginEvent)
    } else if(addProduct) {
        addProduct.addEventListener('click', addProductEvent);
    } //altrimenti nulla    
    //questo controllo viene fatto per non generare errori nelle pagine in cui gli elementi non sono presenti 
    
    //richiamiamo la funzione
    getUserLog();

    let products = localStorage.getItem('products');
    let productList = products ? JSON.parse(products) : [];

    displayProducts(productList);

    let deleteDataButton = document.querySelector('#deleteAll');

    if(deleteDataButton) {
        deleteDataButton.addEventListener('click', () => {
            localStorage.clear();
            // Puoi anche aggiornare l'interfaccia o fare altre azioni necessarie dopo aver cancellato i dati
            alert('I dati sono stati cancellati dal localStorage!');
            location.reload();
    
            let marca = document.querySelector("#marca").value = "";
            let modello = document.querySelector("#modello").value = "";
            let categoria = document.querySelector("#categoria").value = "";
            let prezzo = document.querySelector("#prezzo").value = "";
            let quantita = document.querySelector("#quantita").value = "";
            let imgURL = document.querySelector("#imgURL").value = "";
        });
    }

})


//                       --------  FUNZIONI  -------- 

//funzione per verificare se l'utente è loggato
function getUserLog() {
    let loggedIn = localStorage.getItem('UserLog'); //attraverso il local storage, teniamo traccia del login

    if(loggedIn){ //se l'utente è loggato
        let userLog = JSON.parse(loggedIn); //prelevo le informazioni dal localstorage
        let logNav = document.querySelector('#logNav'); //modifico il nome in alto del sito 
        logNav.innerHTML = '';
        logNav.innerText = 'Ciao ' + userLog.user.firstname + ' ' + userLog.user.lastname; //questo ci suggerisce che ci siamo loggati correttamente

        //viene generato anche un pulsante di logout per uscire dalla sessione
        let logOutBtn = document.createElement('button');
        logOutBtn.setAttribute('type', "button")
        logOutBtn.className = "btn btn-sm btn-outline-warning ms-3" //assegnamo le classi di bootstrap
        logOutBtn.innerText = 'Logout';

        logOutBtn.addEventListener('click', () => { //aggiungiamo un evento (al click)
            localStorage.removeItem('UserLog'); //rimuoviamo il login dal localstorage
            window.location = 'index.html';
        })
        logNav.appendChild(logOutBtn); //appendiamo il pulsante

        // Creo la voce di menu Admin
        if (userLog.user.email == "vincenzo@enzo.com") { //in questo modo, solo l'utente registrato con questa email può essere un admin
            let li = document.createElement('li');
            li.className = "nav-item"
            let a = document.createElement('a');
            a.className = "nav-link";
            a.href = "admin.html";
            a.setAttribute('aria-current', "page");
            a.innerText = 'Admin';
            li.appendChild(a);
            document.querySelector('#navbarText ul').appendChild(li);
        }
    }
}

//funzione per registrare l'utente
function registerEvent(e) {
    e.preventDefault(); //annulla il comportamento di default
    //prendiamo da tastiera le caratteristiche necessarie per fare la registrazione e il login
    let firstname = document.querySelector('#register-page input#firstname').value.trim();
    let lastname = document.querySelector('#register-page input#lastname').value.trim();
    let city = document.querySelector('#register-page input#city').value.trim();
    let email = document.querySelector('#register-page input#email').value.trim();
    let password = document.querySelector('#register-page input#password').value.trim();

    //oggetto che memorizza il necessario
    let obj = {
        firstname,
        lastname,
        city,
        email,
        password
    }

    //POST per memorizzare i dati (anche nel localstorage)
    fetch(urlApi+'register', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj) })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

//funzione per il login
function loginEvent(e) {
    e.preventDefault(); //annulla il comportamento di default
    //prendiamo da tastiera email e password
    let email = document.querySelector('#login-page input#email').value.trim();
    let password = document.querySelector('#login-page input#password').value.trim();

    //facciamo un POST per prendere i dati e confrontarli con quelli all'interno del nostro "fake database"
    fetch(urlApi+'login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                email,
                password
            }) })
        .then(response => response.json())
        .then(json => statusResponse(json))
        .catch(err => console.log(err))
}

//funzione per aggiungere un prodotto
function addProductEvent(e) {
    e.preventDefault(); //annulla il comportamento di default
    //prendiamo da tastiera le caratteristiche del prodotto
    let marca = document.querySelector("#marca").value;
    let modello = document.querySelector("#modello").value;
    let categoria = document.querySelector("#categoria").value;
    let prezzo = document.querySelector("#prezzo").value;
    let quantita = document.querySelector("#quantita").value;
    let imgURL = document.querySelector("#imgURL").value;

    //oggetto che memorizza il necessario
    let obj = {
        marca,
        modello,
        categoria,
        prezzo,
        quantita,
        imgURL
    };

    // Recupera i dati dei prodotti dal localStorage
    let products = localStorage.getItem('products');
    let productList = products ? JSON.parse(products) : [];

    // Aggiungi il nuovo prodotto alla lista dei prodotti
    productList.push(obj);

    // Aggiorna i dati dei prodotti nel localStorage
    localStorage.setItem('products', JSON.stringify(productList));

    // Visualizza tutti i prodotti (vecchi e nuovi) nella tabella
    displayProducts(productList);

    //svuota i campi per i prossimi prodotti
    marca.value = "";
    modello.value = "";
    modello.value = "";
    categoria.value = "";
    prezzo.value = "";
    quantita.value = "";
    imgURL.value = "";

    let deleteProduct = document.querySelector("#deletePr");
    deleteProduct.addEventListener('click', () => {
        //funzione per rimuovere il prodotto (usare il delete)
    })

    let editProduct = document.querySelector("#editPr");
    editProduct.addEventListener('click', () => {
        //funzione per modificare il prodotto (usare il put)
    })
    //N.B: per rimuovere e modificare dobbiamo usare l'id del prodotto per riferimento 
}

// Funzione per visualizzare i prodotti nella tabella
function displayProducts(products) {
    let tbody = document.querySelector("tbody");

    if (tbody) {
        tbody.innerHTML = ''; // Cancella il contenuto attuale del tbody

    // Cicla attraverso tutti i prodotti e crea una riga per ciascun prodotto
    products.forEach((product, index) => {
        let newRowHTML = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td><img src="${product.imgURL}" alt="immagine"></td>
                <td>${product.modello}</td>
                <td>${product.marca}</td>
                <td>${product.quantita}</td>
                <td>${product.prezzo}</td>
                <td>
                    <button type="button" id="deletePr" class="btn btn-sm btn-outline-danger">
                        <i class="bi bi-trash"></i>
                    </button>
                    <button type="button" id="editPr" class="btn btn-sm btn-outline-warning">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </td>
            </tr>
        `;

        // Aggiungi la nuova riga alla fine del tbody
        tbody.innerHTML += newRowHTML;
    });
    }
}



//funzione per gestire le risposte in merito al login
function statusResponse(response) {
    let form = document.querySelector('#login-page form');
    form.lastElementChild.role !== null ? form.removeChild(form.lastElementChild) : null;

    let alertDiv = document.createElement('div');
    alertDiv.setAttribute('role', "alert")
    alertDiv.className = "alert alert-dismissible fade show mx-3";
    
    if(response.accessToken){
        alertDiv.classList.add('alert-success');
        alertDiv.innerText = "Logged In!!"
        document.querySelector('#login-page input#email').value = '';
        document.querySelector('#login-page input#password').value = '';

        localStorage.setItem('UserLog', JSON.stringify(response))
        getUserLog();
    } else {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerText = response
    }

    let alertBtn = document.createElement('button');
    alertBtn.className = "btn-close";
    alertBtn.setAttribute('type', "button");
    alertBtn.setAttribute('data-bs-dismiss', "alert");
    alertBtn.setAttribute('aria-label', "Close");
    alertDiv.appendChild(alertBtn);

    document.querySelector('#login-page form').appendChild(alertDiv);
}