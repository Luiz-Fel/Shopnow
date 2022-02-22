import { useState } from "react";
import { Button, Container, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from './styles.module.scss'

export function NavBar() {

    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(!show)
    }

    return(
       <>
       <div>

        <Navbar className={styles.navBar}>
            <Container>
                <Navbar.Collapse className="d-flex justify-content-between">
                    <Nav >
                            <Nav.Link href="" className="text-gray-900" >Eletrônicos</Nav.Link>
                            <Nav.Link href="">Computadores</Nav.Link>
                            <Nav.Link href="">Cozinha</Nav.Link>
                            <Nav.Link href="">Esportes</Nav.Link>
                            <Nav.Link href="">Livros</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="" onClick={handleShow}>Entre com sua conta</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal
        show={show}>
            <Modal.Header>Título</Modal.Header>
            <Button variant="secondary" onClick={handleShow}>
                Close
          </Button>
        </Modal>
       </div>
       </>
    )
}