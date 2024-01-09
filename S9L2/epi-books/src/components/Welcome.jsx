import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Welcome() {
  return (
    <>
        <Container>
            <h1>EpiBooks</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore, vel, architecto earum cumque nihil fugit officiis recusandae minus nostrum, ducimus dignissimos ipsum quia aliquid reiciendis tenetur enim magni quidem.</p>
            
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <Button variant="secondary">Iniziamo!</Button>
        </Container>
    </>
  );
}

