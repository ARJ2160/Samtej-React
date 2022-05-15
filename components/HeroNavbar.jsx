import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import company_logo from '../assets/brand_logo.webp';

const HeroNavbar = () => {
  return (
    <Navbar
      className='main--navigation'
      expand='lg'
      style={{
        backgroundColor: '#b8c1ec',
        color: '#000000',
        fontWeight: '600',
      }}>
      <Container>
        <Navbar.Brand>
          <Link href='/'>
            <div className='w-50 h-25'>
              <Image
                className='navbar-logo '
                src={company_logo}
                style={{ width: '50px', height: '50px' }}
                alt='brand-logo'
              />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='navbar-dropdown ms-auto'>
            <NavDropdown
              title='Products'
              className='me-2 nav-dropdown'
              id='basic-nav-dropdown'
              style={{ color: '#000000 !important' }}>
              <Link href='/shirtmachines'>T-Shirt Printing Machine</Link>
              <Link href='/cardmachines'>Card Cutter Machines</Link>
              <Link href='/heatmachines'>Heat Press Fusing Machines</Link>
            </NavDropdown>
            <Nav.Link
              href='/#about'
              className='me-2'
              style={{ color: '#000000' }}>
              About
            </Nav.Link>
            <Nav.Link
              href='/#awards'
              className='me-2'
              style={{ color: '#000000' }}>
              Awards
            </Nav.Link>
            <Nav.Link href='/#contact' style={{ color: '#000000' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeroNavbar;
