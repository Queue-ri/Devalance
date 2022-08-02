import React, { useState } from "react";
import styles from "./Progress.module.css"
import { ReactComponent as CheckSvg } from "../../img/vector/check.svg";
import { ReactComponent as WarnSvg } from "../../img/vector/warn.svg";

function Progress(props) {

    return (
        <div className={styles.progress}>
            <div className={styles.checklist}>
                <p>테스트 만들기</p>
                <div className={styles.check}>
                    <p>카테고리 설정 (필수)</p>
                    <CheckSvg fill={props.categoryCheck ? '#515ff9' : '#d8d8d8'} />
                </div>
                <div className={styles.check}>
                    <p>테스트 제목 (필수)</p>
                    <CheckSvg fill={props.titleCheck ? '#515ff9' : '#d8d8d8'} />
                </div>
                <div className={styles.check}>
                    <p>테스트 설명 (선택)</p>
                    <CheckSvg fill={props.contentCheck ? '#515ff9' : '#d8d8d8'} />
                </div>
                <div className={styles.check}>
                    <p>결과유형 설정 (필수)</p>
                    <CheckSvg fill={props.typeCheck ? '#515ff9' : '#d8d8d8'} />
                </div>
                <div className={styles.check}>
                    <p>문제 설정 (필수)</p>
                    <CheckSvg fill={props.questionCheck ? '#515ff9' : '#d8d8d8'} />
                </div>
            </div>

            <div className={styles.password}>
                <p>비밀번호 (선택)</p>
                <input type="password" placeholder="비밀번호를 입력해주세요" value={props.password.value} onChange={(e) => props.setPassword(e.target.value)} />
                <div className={styles.indicator}>
                    <WarnSvg />
                    <p>수정 또는 삭제 시 꼭 필요해요!</p>
                </div>
                
                <button className={styles.submit_btn} onClick={props.post}>등록하기</button>
                <div className={styles.indicator}>
                    {
                        props.categoryCheck &&
                        props.titleCheck &&
                        props.typeCheck &&
                        props.questionCheck ?
                        null
                        :
                        <><WarnSvg /><p>필수 항목을 완성해주세요</p></>
                    }
                </div>
            </div>
        </div>
    );
}

export default Progress;