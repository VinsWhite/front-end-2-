import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

export default class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [] // Inizializza l'array per memorizzare i dati dei libri
    };
  }

  componentDidMount() {
    // Fetch dei dati dal file fantasy.json usando fetch API
    fetch('fantasy.json')
      .then(response => response.json())
      .then(data => {
        // Aggiorna lo stato con i dati ottenuti dal file JSON
        this.setState({ books: data });
      })
      .catch(error => {
        console.error('Errore durante il recupero dei dati:', error);
      });
  }

  render() {
    const { books } = this.state;

    return (
      <Row className="justify-content-center mt-4">
        {books.map((book, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
