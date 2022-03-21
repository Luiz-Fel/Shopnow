import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown,  } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai"
import { NavBarModal } from "./NavBarModal";
import styles from './styles.module.scss'

export interface showProps {
    eletronics: boolean,
    computers: boolean,
    homeAndKitchen: boolean,
    sports: boolean,
    books: boolean,
}

export function NavBar() {
    const [show, setShow] = useState<showProps>({
        eletronics: false,
        computers: false,
        homeAndKitchen: false,
        sports: false,
        books: false,
    })

    function handleClose() {
        const close = {
            eletronics: false,
            computers: false,
            homeAndKitchen: false,
            sports: false,
            books: false,
        }
        setShow(close)
    }

   function handleShow(navSection : string) {
       if (show[navSection]) {
            return
       }
        const close = {
            eletronics: false,
            computers: false,
            homeAndKitchen: false,
            sports: false,
            books: false,
        }


        setShow(close)
        switch (navSection) {
            case 'eletronics':
                setShow({
                    ...show,
                    eletronics: true,
                })

                break;

            case 'computers':
                handleClose()
                setShow({
                    ...show,
                    computers: true,
                })

                break;

            case 'homeAndKitchen':
                setShow({
                    ...show,
                    homeAndKitchen: true,
                })
                break;

            case 'tools':
                setShow({
                    ...show,
                    sports: true,
                })
                break;

            case 'books':
                setShow({
                    ...show,
                    books: true,
                })
                break;
                                    
            default:
                break;
        }
    }


    return(
       <>
       <div onMouseLeave={() => handleClose()} >

        <Navbar className={styles.navBar}>
            <Container>
                <Navbar.Collapse className="d-flex justify-content-between">
                    <Nav  >
                            <Nav.Link href="" className="text-gray-900"
                            onMouseOver={() => handleShow('eletronics')}
                            style={{zIndex : 2}}
                            >
                                Eletronics <AiOutlineDown size="0.8rem" color="black" /></Nav.Link>
                            <Nav.Link href=""  
                            onMouseOver={() => handleShow('computers')}
                            style={{zIndex : 2}}
                            >
                                Computers<AiOutlineDown size="0.8rem" color="black" /></Nav.Link>
                            <Nav.Link href=""  
                            onMouseOver={() => handleShow('homeAndKitchen')}
                            style={{zIndex : 2}}
                            >
                                Home and Kitchen<AiOutlineDown size="0.8rem" color="black" /></Nav.Link>
                            <Nav.Link href=""  
                            onMouseOver={() => handleShow('tools')}
                            style={{zIndex : 2}}
                            >
                                Sports<AiOutlineDown size="0.8rem" color="black" /></Nav.Link>
                            <Nav.Link href=""  
                            onMouseOver={() => handleShow('books')}
                            style={{zIndex : 2}}
                            >
                                Books<AiOutlineDown size="0.8rem" color="black" /></Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
        <NavBarModal 
        name='eletronics'
        show={show} 
        content={navBarContent.eletronics} 
        handleClose={() => handleClose()}
        />

        <NavBarModal 
        name='computers'
        show={show} 
        content={navBarContent.computers} 
        handleClose={() => handleClose()} />

        <NavBarModal 
        name='homeAndKitchen'
        show={show} 
        content={navBarContent.homeAndKitchen} 
        handleClose={() => handleClose()} />

        <NavBarModal 
        name='sports'
        show={show} 
        content={navBarContent.sports} 
        handleClose={() => handleClose()} />
        
        <NavBarModal 
        name='books'
        show={show} 
        content={navBarContent.books} 
        handleClose={() => handleClose()} />
       </div>
          
       </>
    )
}


const navBarContent= {
    eletronics: [
        {

            title: 'Cellphones',
            contentLinks: [
                {
                    name: 'test',
                    url: '/'
                }
            ]
        }
    ],
    computers: [
        {

            title: 'Laptops',
            contentLinks: [
                {
                    name: 'test',
                    url: '/'
                }
            ]
        }
    ],
    homeAndKitchen: [
        {

            title: 'Ovens',
            contentLinks: [
                {
                    name: 'test',
                    url: '/'
                }
            ]
        }
    ],
    sports: [
        {

            title: 'Cloth',
            contentLinks: [
                {
                    name: 'test',
                    url: '/'
                }
            ]
        }
    ],
    books: [
        {

            title: 'Fantasy',
            contentLinks: [
                {
                    name: 'test',
                    url: '/'
                }
            ]
        }
    ],



}