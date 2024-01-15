import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBarComponent() {
  return (
    <Nav className='bg-netflix' defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
        <Link to={'/'} className='nav-link text-danger fw-bold'>NETFLIX</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={'/'} className='nav-link text-light'>Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={'/tv-shows'} className='nav-link text-light'>Tv Shows</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={'/film'} className='nav-link text-light'>FIlm</Link>
      </Nav.Item>
    </Nav>
  )
}
