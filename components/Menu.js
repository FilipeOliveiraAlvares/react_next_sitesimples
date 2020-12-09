import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Site Filipe</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/sobre">Sobre</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/contato">Contato</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Menu