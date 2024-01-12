import { Component } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={6} md={4} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
          {/* Colonna per i Commenti */}
          <Col xs={6} md={4}>
            <h2>Commenti</h2>
            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList
