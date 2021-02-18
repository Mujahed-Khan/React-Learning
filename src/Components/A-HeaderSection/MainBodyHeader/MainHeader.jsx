import React from 'react';
import { Jumbotron, Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import "./MainHeader.css"
export const MainHeader = () => {
    return (
        <div>
            <Jumbotron>
                <Navbar className="main-header--position">
                    <Navbar.Brand href="#home"><Image src="Assets/PickupBizLogo.jpg" className="main-header--image" />  </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </Jumbotron>
        </div>
    );
};

