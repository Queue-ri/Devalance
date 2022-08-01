import React from "react";
import styles from "./NavBar.module.css"
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
    const navigate = useNavigate();

    function goHome() { navigate("/"); }
    function goPopular() { navigate("/popular"); }
    function goDev() { navigate("/dev"); }
    function goSelf() { navigate("/self"); }
    function goFood() { navigate("/food"); }
    function goGame() { navigate("/game"); }
    function goEtc() { navigate("/etc"); }

    return (
        <Navbar expand="lg" bg="light" variant="light" sticky="top" className={styles.navbar}>
            <Container>
                <Navbar.Brand onClick={goHome} className={styles.title}>Devalance</Navbar.Brand>
                {
                    props.showDropdown ?
                    <>
                        <div onClick={goPopular} className={styles.not_dropdown}>
                            인기 카테고리
                        </div>

                        <div className={styles.dropdown}>
                            <button className={styles.dropdown_btn}>전체 카테고리</button>
                            <div className={styles.dropdown_content}>
                                <div onClick={goDev}>👩‍💻 개발</div>
                                <div onClick={goSelf}>💖 연애/성격</div>
                                <div onClick={goFood}>🍣 음식</div>
                                <div onClick={goGame}>👾 게임</div>
                                <div onClick={goEtc}>🙃 기타</div>
                            </div>
                        </div>
                    </>
                    :
                    null
                }
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