import React from "react";
import styles from "./NavBar.module.css"
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" bg="light" variant="light" sticky="top" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/" className={styles.title}>Devalance</Navbar.Brand>
                <Nav>
                    <div className={props.new ? styles.create_button_disabled : styles.create_button} onClick={ () => navigate("/new")}>
                        <p>새 테스트 만들기</p>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;