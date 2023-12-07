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
    let container = document.querySelector('.row'); // Seleziona l'elemento principale dove verranno aggiunte le carte

    books.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('col-3'); // Aggiungi le classi Bootstrap per la griglia
        //creazione dinamica delle cards
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 40em">
                <img src="${book.img}" class="card-img-top" alt="Book Cover">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Price: $${book.price}</p>
                    <button class="btn btn-primary">Compra ora</button>
                    <button class="btn btn-danger" id="liveToastBtn">Scarta</button>
                </div>
            </div>
        `;

        container.appendChild(card); // Aggiungi la carta al contenitore principale
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.row');
    /* let toastBody = document.querySelector(".toast-body")  */

    container.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-danger')) {
            let card = e.target.closest('.col-3');
            if (card) {
                card.remove(); // Rimuovi la carta del libro

                // Mostra il toast quando una carta viene rimossa
                let toast = document.getElementById('liveToast');
                let bsToast = new bootstrap.Toast(toast);
                bsToast.show();
                /* toastBody.innerHTML= `<h5 class="card-title">${book.title}</h5> Libro eliminato dalla libreria`; */
            }
        }
    });

    // Aggiungi evento di chiusura del toast
    let toastElement = document.getElementById('liveToast');
    toastElement.addEventListener('hidden.bs.toast', function () {
        toastElement.remove(); // Rimuovi il toast dal DOM dopo che è stato nascosto
    });
});



