if (window.location.pathname === '/esercizio1.html') {
    window.onload = function() {
        let storedItems = JSON.parse(localStorage.getItem('items')) || [];

        if (storedItems.length > 0) {
            let ul = document.querySelector(".list-group");

            storedItems.forEach(item => {
                let li = document.createElement("li");
                li.classList.add("list-group-item");
                li.innerText = item;
                ul.appendChild(li);
            });
        }
    };

    let aggiungi = document.querySelector("#aggiungi");
    let elimina = document.querySelector("#elimina");
    let ul = document.querySelector(".list-group");
    let input = document.querySelector("#input");

    aggiungi.addEventListener('click', () => {
        let li = document.createElement("li");

        if (input.value.length < 2) {
            alert("Inserisci almeno 2 caratteri!");
            return false;
        } else {
            li.classList.add("list-group-item");
            li.innerText = input.value; 
            ul.appendChild(li);
            aggiungi.disabled = true;
        

            // Recupera gli elementi già presenti nel localStorage
            let storedItems = JSON.parse(localStorage.getItem('items')) || [];
            storedItems.push(input.value); // Aggiunge il nuovo valore all'array
            localStorage.setItem('items', JSON.stringify(storedItems)); // Salva l'array aggiornato nella localStorage
            input.value = ""; // Pulisce l'input dopo l'aggiunta
        }
    });

    elimina.addEventListener('click', () => {
        // Rimuove gli elementi dalla lista
        ul.innerHTML = "";
        aggiungi.disabled = false;

        // Rimuove tutti gli elementi salvati nel localStorage
        localStorage.removeItem('items');
    });

}

if (window.location.pathname === '/esercizio2.html') {
    let isTimerRunning = true; // Variabile di controllo per il timer

    // Funzione per aggiornare il contatore e memorizzare il valore nella sessionStorage
    function updateCounter() {
        let counter = sessionStorage.getItem('counter');
        if (!counter) {
            counter = 0;
        } else {
            counter = parseInt(counter);
        }

        counter++;
        sessionStorage.setItem('counter', counter);

        document.querySelector('#counter').innerText = counter;
    }

    // Funzione per avviare il contatore e aggiornarlo ogni secondo
    function startCounter() {
        updateCounter(); // Aggiorna il contatore quando la pagina viene caricata
        return setInterval(updateCounter, 1000); // Ritorna l'ID del setInterval
    }

    let timerInterval = startCounter(); // Avvia il contatore al caricamento della pagina

    let stop = document.querySelector("#stop");
    let clear = document.querySelector("#clear");

    stop.addEventListener('click', () => {
        if (isTimerRunning) {
            clearInterval(timerInterval); // Sospende il timer
            isTimerRunning = false;
            stop.innerText = "Riavvia";
            stop.classList.remove("btn-warning");
            stop.classList.add("btn-primary");
        } else {
            timerInterval = startCounter(); // Riavvia il timer
            isTimerRunning = true;
            stop.innerText = "Stop";
            stop.classList.remove("btn-primary");
            stop.classList.add("btn-warning");
        }
    });

    clear.addEventListener('click', () => {
        counter = 0;
        sessionStorage.removeItem('counter', counter);
    })
}
