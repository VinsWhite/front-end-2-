import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <Container className='text-center d-flex align-items-center justify-content-center flex-column mt-5'>
        <h1 className='text-danger'>Strada senza uscita</h1>
        <h2 className='text-light'>Pagina non trovata. Nella home page c'è molto da scoprire!</h2>
        <Link to='/'>
          <Button variant={'danger'} className='mt-4'>
            Home Netflix
          </Button>
        </Link>
        <h2 className='text-light mt-2'>Codice di errore <span className='fw-bold'>NSES-404</span></h2>
      </Container>
    </>
  );
}
