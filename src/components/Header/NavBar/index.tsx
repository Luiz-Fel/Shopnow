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
                            <Nav.Link href="" className="text-gray-900" >Eletronics</Nav.Link>
                            <Nav.Link href="">Computers</Nav.Link>
                            <Nav.Link href="">Home and Kitchen</Nav.Link>
                            <Nav.Link href="">Sports</Nav.Link>
                            <Nav.Link href="">Books</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="" onClick={handleShow}>Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal
        show={show}>
            <Modal.Header>Title</Modal.Header>
            <Button variant="secondary" onClick={handleShow}>
                Close
          </Button>
        </Modal>
       </div>
       </>
    )
}