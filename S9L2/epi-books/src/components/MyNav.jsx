import React from 'react';
import { Nav } from 'react-bootstrap';

export default function MyNav() {
  return (
    <>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}
