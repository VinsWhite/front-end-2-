import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Welcome() {
  return (
    <>
        <Container>
            <h1>EpiBooks</h1>
            <p>EpiBooks ti permette di acquistare qualsiasi genere di libro fantasy in circolazione fino ad oggi</p>
            {/* <Button variant="secondary">Iniziamo!</Button> */}
        </Container>
    </>
  );
}

