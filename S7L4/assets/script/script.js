if (window.location.pathname === '/Starting-template.html') { //pagina principale
        //funzione per le chiamate ajax
    function fetchData(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'MMqFNuWj6GJ0Mv4ZVhqGtnZDFTOfPeBF9NYYhSaKRZglU2JB8JMharKC'
            }
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        let primary = document.querySelector(".btn-primary");
        let secondary = document.querySelector(".btn-secondary");
        let hide = document.querySelectorAll(".hide"); //da edit --> a hide
        let search = document.querySelector("input");
        let btnSearch = document.querySelector(".btn-outline-success");
        let dettaglio = document.querySelectorAll("img, h5");
        /* console.log(search); */

        hide.forEach(e => { //cambiamo il testo del pulsante in hide
            e.textContent = "Hide";
        });

        //pulsante primary premuto
        primary.addEventListener('click', function primaryImages () {
            console.log("pulsante primary premuto");
            //preleva le informazioni attraverso la promise
            fetchData('https://api.pexels.com/v1/search?query=[shopping]')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let photos = data.photos; // array di foto
                let photographer = document.querySelectorAll("h5"); // nome fotografo
                let photoElements = document.querySelectorAll(".card-img-top"); // elementi img
                let idPhoto = document.querySelectorAll(".text-muted");

                // foreach attraverso le foto con assegnazione
                photos.forEach((photo, index) => {
                    if (index < photographer.length && index < photoElements.length && idPhoto.length) {
                        photographer[index].innerText = photo.photographer || 'Unknown photographer';
                        photoElements[index].src = photo.src.original || 'Unknown URL';
                        photoElements[index].alt = photo.alt || 'Unknown URL';
                        idPhoto[index].innerText = "ID: " + photo.id || 'Unknown URL';
                    }
                });
            })
            .catch(error => console.log(error));
        })

        //pulsante secondary premuto
        secondary.addEventListener('click', function secondaryImages () {
            console.log("pulsante secondary premuto");
            fetchData('https://api.pexels.com/v1/search?query=[waterfall]')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let photos = data.photos; // array di foto
                let photographer = document.querySelectorAll("h5"); // nome fotografo
                let photoElements = document.querySelectorAll(".card-img-top"); // elementi img
                let idPhoto = document.querySelectorAll(".text-muted");

                // foreach attraverso le foto con assegnazione
                photos.forEach((photo, index) => {
                    if (index < photographer.length && index < photoElements.length && idPhoto.length) {
                        photographer[index].innerText = photo.photographer || 'Unknown photographer';
                        photoElements[index].src = photo.src.original || 'Unknown URL';
                        photoElements[index].alt = photo.alt || 'Unknown URL';
                        idPhoto[index].innerText = "ID: " + photo.id || 'Unknown URL';
                    }
                });
            })
            .catch(error => console.log(error));
        })

        //pulsante per nascondere le cards
        hide.forEach(e => {
            e.addEventListener('click', function() {
                let card = this.closest('.card'); // Trova la card genitore del pulsante cliccato
                if (card) {
                    card.style.display = 'none'; // Nascondi la card
                }
            });
        });

        btnSearch.addEventListener ('click', ricerca);


        function ricerca () {
            //query personalizzata di ricerca
            fetchData(`https://api.pexels.com/v1/search?query=[${search.value}]`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let photos = data.photos; // array di foto
                let photographer = document.querySelectorAll("h5"); // nome fotografo
                let photoElements = document.querySelectorAll(".card-img-top"); // elementi img
                let idPhoto = document.querySelectorAll(".text-muted");

                // foreach attraverso le foto con assegnazione
                photos.forEach((photo, index) => {
                    if (index < photographer.length && index < photoElements.length && idPhoto.length) {
                        photographer[index].innerText = photo.photographer || 'Unknown photographer';
                        photoElements[index].src = photo.src.original || 'Unknown URL';
                        photoElements[index].alt = photo.alt || 'Unknown URL';
                        idPhoto[index].innerText = "ID: " + photo.id || 'Unknown URL';
                    }
                });
            })
            .catch(error => console.log(error));
            search.value = '';
        }

        dettaglio.forEach(item => {
            item.addEventListener('click', () => {
                location.href = "../../dettaglio.html";
            });
        });
    })

}

if (window.location.pathname === '/dettaglio.html') { //pagina dettaglio
}
