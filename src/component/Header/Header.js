import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container ,NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>

        <Navbar.Brand className="text-white" href="/movies">Welcome To MovieBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/notFound">Home</Nav.Link>
            <Nav.Link href="/notFound">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/notFound">Action</NavDropdown.Item>
              <NavDropdown.Item href="/notFound">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/notFound">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/notFound">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;