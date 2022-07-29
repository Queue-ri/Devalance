import React from "react";
import styles from "./Loading.module.css"

function Loading() {

    return (
        <div className={styles.loading}>
            <div className={styles.lds_ring}>
                <div /><div /><div /><div />
            </div>
            <p>테스트 불러오는 중..</p>
        </div>
    );
}

export default Loading;