import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import fantasyData from '../API/fantasy.json'; // Importa i dati direttamente dal file JSON

export default class AllTheBooks extends Component {

  /* ricordiamo come il costruttore viene richiamato prima della creazione del componente (una sola volta) */
  constructor(props) {
    super(props);
    /* utilizziamo lo state per inizializzare lo stato dei libri */
    this.state = {
      books: fantasyData 
    };
  }

  render() {
    const { 
      books 
    } = this.state;

    return (
      <Row className="justify-content-center mt-4">

        {books.map((book, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="secondary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
