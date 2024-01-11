import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function BookList({ books }) {
  return (
    <Row xs={12} md={4} className="g-4">
        {books.map( (book, index) => (
            <Col key={index}>
                <SingleBook book={ book }  />
            </Col>
        ))}
    </Row>
  )
}