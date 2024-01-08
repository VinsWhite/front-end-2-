import React, { useState, useEffect } from 'react';

function FetchComponent({ urlApi, paragraph }) {
  const [responseStatus, setResponseStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlApi, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paragraph }),
        });
        const json = await response.json();
        setResponseStatus(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); 
  }, [urlApi, paragraph]);

  return (
    <div>
      {responseStatus && <p>Status: {JSON.stringify(responseStatus)}</p>}
    </div>
  );
}

export default FetchComponent;
