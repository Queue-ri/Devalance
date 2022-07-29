import React, { useState } from "react";
import styles from "./SideBar.module.css"
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SideBar(props) {
    const [selected, setSelected] = useState(props.selected);
    const [highlighted, setHighLighted] = useState(props.highlighted);
    const navigate = useNavigate();

    function getPath(selectedKey) {
        switch (selectedKey) {
            case "1": return "/";
            case "2": return "/popular";
            case "3": return "/dev";
            case "4": return "/self";
            case "5": return "/food";
            case "6": return "/game";
            case "7": return "/etc";
            default: return "/"; // something error
        }
    }

    function handleSelection(selectedKey) {
        setSelected(selectedKey);
        alert(`selected ${selectedKey}`);
        navigate(getPath(selectedKey));
    }

    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/"
            onSelect={(selectedKey) => handleSelection(selectedKey)}
        >
            <div className={styles.sidebar}>
            <Nav.Item className={highlighted == 1 ? styles.highlight : null}>
                <Nav.Link eventKey={1}>🔥&nbsp;&nbsp;전체 카테고리</Nav.Link>
            </Nav.Item>
            <Nav.Item className={highlighted == 2 ? styles.highlight : null}>
                <Nav.Link eventKey={2}>🔥&nbsp;&nbsp;인기 카테고리</Nav.Link>
            </Nav.Item>
            <Nav.Item className={selected == 1 ? styles.active : null}>
                    <Nav.Link eventKey={3}>👩‍💻&nbsp;&nbsp;개발</Nav.Link>
            </Nav.Item>
            <Nav.Item className={selected == 2 ? styles.active : null}>
                <Nav.Link eventKey={4}>💖&nbsp;&nbsp;연애/성격</Nav.Link>
            </Nav.Item>
            <Nav.Item className={selected == 3 ? styles.active : null}>
                <Nav.Link eventKey={5}>🍣&nbsp;&nbsp;음식</Nav.Link>
            </Nav.Item>
            <Nav.Item className={selected == 4 ? styles.active : null}>
                <Nav.Link eventKey={6}>👾&nbsp;&nbsp;게임</Nav.Link>
            </Nav.Item>
            <Nav.Item className={selected == 5 ? styles.active : null}>
                <Nav.Link eventKey={7}>🙃&nbsp;&nbsp;기타</Nav.Link>
            </Nav.Item>
            </div>
        </Nav>
    );
}

export default SideBar;