//Chiamata Ajax per prelevare i libri
let xhr = new XMLHttpRequest(); //ready state = 0
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books'); //readystate = 1 
xhr.send(); //readystate = 2 

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('The operation is complete');
        let json = xhr.responseText;
        let books = JSON.parse(json);
        console.log(books);
        createBookCards(books);
    }
}


function createBookCards(books) {
    let container = document.querySelector('.row'); // Aggiunta dell'elemento principale dove verranno aggiunte le carte

    books.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('col-xl-4'); // Aggiungi le classi Bootstrap per la griglia
        card.classList.add('col-md-6');
        card.classList.add('col-12');
        //creazione dinamica delle cards
        card.innerHTML = `
            <div class="card m-3" style="width: 18rem; height: 38em;">
                <img src="${book.img}" class="card-img-top" alt="Book Cover" style="height:25rem;">
                <div class="card-body">
                    <h5 class="card-title" style="height: 6rem;">${book.title}</h5>
                    <p class="card-text">Price: $${book.price}</p>
                    <button class="btn btn-dark">Compra ora</button>
                    <button class="btn btn-danger" id="liveToastBtn">Scarta</button>
                </div>
            </div>
        `;

        container.appendChild(card); // Aggiungi la carta al contenitore principale
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.row');
    let toastBody = document.querySelector(".toast-body");

    container.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-danger')) {
            let card = e.target.closest('.col-xl-4');
            //ricorda --> il closest permette di trovare l'elemento padre senza dover ripetere tante volte il parentNode()

            if (card) {
                card.remove(); // Rimuovi la carta del libro
    
                // Mostra il toast quando una carta viene rimossa
                let toast = document.querySelector('#liveToast');
                let bsToast = new bootstrap.Toast(toast);
                bsToast.show();
                toastBody.innerHTML = `<h5 class="card-title">${book.title}</h5> Libro eliminato dalla libreria`;
            }
        } else if (e.target && e.target.classList.contains('btn-dark')) {
            let compra = e.target; 
            let card = compra.closest('.card'); // Trova l'elemento genitore con classe "card"
            let modalBody = document.querySelector('.modal-body'); 
            let contCarrello = document.createElement('p');
            modalBody.appendChild(contCarrello);
    
            if (card) {
                card.style.border = "0.2em solid red"; // Colora il bordo della carta selezionata
                modalBody.innerText = ""; //eliminiamo il messagggio di carrello vuoto
            }
        }
    });

    // Aggiungi evento di chiusura del toast
    let toastElement = document.querySelector('#liveToast');
    toastElement.addEventListener('hidden.bs.toast', function () {
        toastElement.remove(); // Rimuovi il toast dal DOM dopo che è stato nascosto
    });

    //pulsante compra ora 
    /* let compra = document.querySelector('.btn-dark');
    let modalBody = document.querySelector('.modal-body');

    compra.addEventListener('click', () => {
    }) */
});



