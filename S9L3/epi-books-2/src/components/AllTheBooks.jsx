import React, { Component } from 'react';
import fantasyData from '../API/fantasy.json'; // Importa i dati direttamente dal file JSON
import BookList from './BookList';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default class AllTheBooks extends Component {

  /* ricordiamo come il costruttore viene richiamato prima della creazione del componente (una sola volta) */
  constructor(props) {
    super(props);
    /* utilizziamo lo state per inizializzare lo stato dei libri */
    this.state = {
      books: fantasyData,
      searchQuery: '',
      filterBooks: []
    };
  }

  //funzione getSearchQuery 
  getSearchQuery = () => {
        /* alert(this.state.searchQuery); */

        let filter = this.state.books.filter(book => book.title.includes(this.state.searchQuery));
        this.setState ({ filterBooks: filter});
  }

  render() {
    const { 
      books 
    } = this.state;

    return (
        <>
        <Container>
            <Row>
                <Form.Label column="lg" lg={2}>
                    Search Book
                </Form.Label>
                <Col lg={8}>
                    <Form.Control size="lg" type="text" placeholder="Search Book Title" 
                    onChange = {(e) => this.setState ({searchQuery: e.target.value})}
                    />
                </Col>
                
                <Col lg={2}>
                    <Button variant="secondary" onClick={this.getSearchQuery}>Search</Button>{' '}
                </Col>
            </Row>
            <BookList books = {this.state.filterBooks} />
            <h1>All the books: {this.state.books.length}</h1>
        </Container>
        </>
    );
  }
}
