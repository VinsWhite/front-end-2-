import React, { useState, useEffect } from 'react';
import { urlApi } from '../data/api';
import axios from 'axios'

export default function TvShowsPage() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* fetch(urlApi + 's=harry%20potter', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setImages(json.Search || []);
        setIsLoading(false);
      })
      .catch((err) => console.error(err)); */

      /* Proviamo la chiamata ajax con axios */
      axios.get(urlApi + 's=harry%20potter')
      .then(response => {
        if (response.status === 200) {
          setImages(response.data.Search || []);
          setIsLoading(false);
        } else {
          console.log("Errore Server!!!");
        }
      })
      .catch(error => console.error(error));

  }, []);

  const firstSixImages = images.slice(0, 6);

  return (
    <>
      {isLoading ? (
        <p className='text-light'>Loading...</p>
      ) : (
        <>
          <h4 className="text-light ms-4">Harry Potter - i più acclamati dalla critica</h4>
          <div className="mx-2 row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
            {firstSixImages.map((image, index) => (
              <div key={index} className="col mb-2 px-1">
                <img style={{ height: '18em' }} className="img-fluid" src={image.Poster} alt={`movie picture ${index + 1}`} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
