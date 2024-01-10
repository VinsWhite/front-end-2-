import React from 'react'
import { Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

export default function BookList({books}) {
  return (
    <>
        <Row className="justify-content-center mt-4">

            {books.map((book, index) => (
            <Col key={index} md={4}>
                <SingleBook book = {book} />
            </Col>
            ))}
        </Row>
    </>
  )
}
