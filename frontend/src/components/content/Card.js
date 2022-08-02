import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import DefaultThumbnail from '../../img/default_thumbnail.png';

function Card(props) {
    const navigate = useNavigate();

    const clickCard = (id) => {
        navigate("/play/" + id, {state: id})
    };

    const clickShare = (e) => {
        e.stopPropagation();
        const body = "\"" + props.title + "\"" + " Devalance에서 결과를 확인해보세요!\n"
        navigator.clipboard.writeText(body + "https://devalance.herokuapp.com/play/" + props.id)
        alert("테스트 링크 복사 완료! 친구들에게 공유해보세요.")
    };

    return (
        <div className={styles.card} onClick={() => clickCard(props.id)}>
            <img src={props.img ? props.img : DefaultThumbnail} alt="썸네일 오류! 개발자에게 알려주세요." />

            <div className={styles.card_body}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <div>
                    <h5>❤ {props.likes}개</h5>
                    <button onClick={clickShare}>공유하기</button>
                </div>
            </div>
        </div>
    );
}

export default Card;