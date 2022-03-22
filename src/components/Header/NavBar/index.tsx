import { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown,  } from "react-bootstrap";
import { AiOutlineDown, AiOutlineUser } from "react-icons/ai"
import { NavBarModal } from "./NavBarModal";
import styles from './styles.module.scss'
import sample from '../../../../public/images/sample.png'


export interface showProps {
    eletronics: boolean,
    computers: boolean,
    homeAndKitchen: boolean,
    sports: boolean,
    books: boolean,
}

export function NavBar() {
    const [show, setShow] = useState<showProps>({
        eletronics: true,
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
                    ...close,
                    eletronics: true,
                })

                break;

            case 'computers':
                setShow({
                    ...close,
                    computers: true,
                })

                break;

            case 'homeAndKitchen':
                setShow({
                    ...close,
                    homeAndKitchen: true,
                })
                break;

            case 'tools':
                setShow({
                    ...close,
                    sports: true,
                })
                break;

            case 'books':
                setShow({
                    ...close,
                    books: true,
                })
                break;
                                    
            default:
                break;
            }
            console.log(show)
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
                        <Nav.Link href="">
                            <div className={styles.login}>
                                <AiOutlineUser />
                                <p style={{color: '#1071FF'}}>Login</p> 
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            
        <NavBarModal 
                    name='eletronics'
                    show={show}
                    content={navBarContent.eletronics}
                    handleClose={() => handleClose()} 
                    others={navBarContent.others} />

        <NavBarModal 
                    name='computers'
                    show={show}
                    content={navBarContent.computers}
                    handleClose={() => handleClose()} 
                    others={navBarContent.others} />

        <NavBarModal 
                    name='homeAndKitchen'
                    show={show}
                    content={navBarContent.homeAndKitchen}
                    handleClose={() => handleClose()} 
                    others={navBarContent.others} />

        <NavBarModal 
                    name='sports'
                    show={show}
                    content={navBarContent.sports}
                    handleClose={() => handleClose()} 
                    others={navBarContent.others} />
        
        <NavBarModal 
                    name='books'
                    show={show}
                    content={navBarContent.books}
                    handleClose={() => handleClose()} 
                    others={navBarContent.others} />
       </div>
          
       </>
    )
}


const navBarContent= {
    eletronics: [
        {

            title: 'Category title',
            contentLinks: [
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                
            ]
        },
        {
            title: 'Category title',
            contentLinks: [
                {
                    name: 'category name',
                    url: '/',
                },
                {
                    name: 'category name',
                    url: '/',
                },
                {
                    name: 'category name',
                    url: '/',
                },
            ]
        },
        {

            title: 'Category title',
            contentLinks: [
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                {
                    name: 'category name',
                    url: '/'
                },
                
            ]
        },
    ],
    computers: [
        {

            title: 'Laptops',
            contentLinks: [
                {
                    name: 'Promotional text sample',
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
                    name: 'Promotional text sample',
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
                    name: 'Promotional text sample',
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
                    name: 'Promotional text sample',
                    url: '/'
                }
            ]
        }
    ],

    others: {
        saleBanner: {
            url: "",
            src: sample
        },
        navBarScroll: [
        {
            name: 'Promotional text sample',
            sale: 20,
            imageUrl:   sample,
        },
        {
            name: 'Promotional text sample',
            sale: 20,
            imageUrl: sample,
        },
        {
            name: 'Promotional text sample',
            sale: 20,
            imageUrl: sample,
        },
        {
            name: 'Promotional text sample',
            sale: 20,
            imageUrl: sample,
        },
        {
            name: 'Promotional text sample',
            sale: 20,
            imageUrl: sample,
        },
    ]
    }

}