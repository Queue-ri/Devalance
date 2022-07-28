import React from "react";
import styles from "./Card.module.css";
import DefaultThumbnail from '../../img/default_thumbnail.png';

function Card(props) {
    const clickCard = (e) => {
        alert("카드 클릭");

    };

    const clickShare = (e) => {
        e.stopPropagation();
        alert("준비중");
    };

    return (
        <div className={styles.card} onClick={clickCard}>
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