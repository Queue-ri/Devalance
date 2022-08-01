import React, { useEffect, useState } from "react";
import styles from "./TestResult.module.css"


function TestResult(props) {

    return (
            <div className={styles.test_result}>
                <div className={styles.result_info}>
                    <div className={styles.image_cover} style={{backgroundImage: `url(` + props.result.imagefile + `)`}}>
                        <div className={props.result.imagefile == "" ? styles.transparent_overlay : styles.overlay}>
                            <div className={props.result.imagefile == "" ? styles.result_title : styles.result_title_bright}>당신의 유형은?</div>
                            <div className={props.result.imagefile == "" ? styles.result_type : styles.result_type_bright}>{props.result.name}</div>
                            <div className={styles.result_content}><center>{props.result.content}</center></div>
                        </div>
                    </div>
                </div>

            <div className={styles.test_info}>
                <div className={styles.info_list}>
                    <h2>{props.test_info.title}</h2>
                    <div>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_399_206" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.4996 3.34218C10.4997 3.78112 10.4092 4.21578 10.2334 4.62133C10.0576 5.02688 9.79981 5.39538 9.47487 5.7058C9.14993 6.01621 8.76416 6.26246 8.33958 6.43047C7.91501 6.59849 7.45994 6.68499 7.00036 6.68504C6.07219 6.68513 5.18201 6.33306 4.52563 5.70628C3.86925 5.0795 3.50045 4.22935 3.50036 3.34286C3.50031 2.90391 3.59078 2.46926 3.76661 2.06371C3.94245 1.65816 4.20019 1.28966 4.52513 0.979243C5.18137 0.352335 6.07148 9.05681e-05 6.99964 1.74626e-08C7.92781 -9.05332e-05 8.81799 0.35198 9.47437 0.97876C10.1307 1.60554 10.4995 2.45569 10.4996 3.34218M7 7.7076C1.96037 7.7076 0 10.7708 0 12.1959C0 13.6203 4.17312 14 7 14C9.82688 14 14 13.6203 14 12.1959C14 10.7708 12.0396 7.7076 7 7.7076Z"/>
                        </mask>
                        <path d="M7.00036 6.68504L7.00045 7.68504L7.00036 6.68504ZM3.50036 3.34286L4.50036 3.34275L3.50036 3.34286ZM4.52513 0.979243L3.83437 0.256159L4.52513 0.979243ZM9.49964 3.34228C9.49967 3.64337 9.43768 3.94268 9.3159 4.22355L11.1509 5.01911C11.3807 4.48889 11.4997 3.91888 11.4996 3.34207L9.49964 3.34228ZM9.3159 4.22355C9.19408 4.50454 9.01417 4.76294 8.78411 4.98271L10.1656 6.42888C10.5855 6.02783 10.921 5.54922 11.1509 5.01911L9.3159 4.22355ZM8.78411 4.98271C8.55396 5.20258 8.27825 5.37929 7.97162 5.50063L8.70755 7.36031C9.25008 7.14562 9.74591 6.82984 10.1656 6.42888L8.78411 4.98271ZM7.97162 5.50063C7.66493 5.622 7.33473 5.68501 7.00026 5.68504L7.00045 7.68504C7.58514 7.68498 8.16508 7.57498 8.70755 7.36031L7.97162 5.50063ZM7.00026 5.68504C6.32287 5.6851 5.68191 5.42773 5.21624 4.98305L3.83502 6.4295C4.6821 7.23839 5.82152 7.68515 7.00045 7.68504L7.00026 5.68504ZM5.21624 4.98305C4.75214 4.53987 4.50042 3.94882 4.50036 3.34275L2.50036 3.34297C2.50048 4.50988 2.98637 5.61912 3.83502 6.4295L5.21624 4.98305ZM4.50036 3.34275C4.50033 3.04167 4.56232 2.74236 4.68409 2.46149L2.84914 1.66593C2.61925 2.19615 2.5003 2.76616 2.50036 3.34297L4.50036 3.34275ZM4.68409 2.46149C4.80592 2.18049 4.98583 1.9221 5.21589 1.70233L3.83437 0.256159C3.41455 0.657212 3.07897 1.13582 2.84914 1.66593L4.68409 2.46149ZM5.21589 1.70233C5.68146 1.25757 6.32235 1.00007 6.99974 1L6.99954 -1C5.82061 -0.999885 4.68128 -0.5529 3.83437 0.256159L5.21589 1.70233ZM6.99974 1C7.67713 0.999934 8.31808 1.25731 8.78375 1.70198L10.165 0.255535C9.3179 -0.553353 8.17848 -1.00011 6.99954 -1L6.99974 1ZM8.78375 1.70198C9.24786 2.14516 9.49958 2.73622 9.49964 3.34228L11.4996 3.34207C11.4995 2.17516 11.0136 1.06591 10.165 0.255535L8.78375 1.70198ZM7 6.7076C1.57521 6.7076 -1 10.0651 -1 12.1959H1C1 11.4766 2.34553 8.7076 7 8.7076V6.7076ZM-1 12.1959C-1 13.1181 -0.313693 13.6689 0.219844 13.958C0.787609 14.2656 1.51407 14.4701 2.2481 14.6135C3.73487 14.9041 5.55713 15 7 15V13C5.61599 13 3.93824 12.906 2.63174 12.6507C1.96913 12.5212 1.47563 12.3637 1.1726 12.1995C0.835332 12.0168 1 11.9859 1 12.1959H-1ZM7 15C8.44287 15 10.2651 14.9041 11.7519 14.6135C12.4859 14.4701 13.2124 14.2656 13.7802 13.958C14.3137 13.6689 15 13.1181 15 12.1959H13C13 11.9859 13.1647 12.0168 12.8274 12.1995C12.5244 12.3637 12.0309 12.5212 11.3683 12.6507C10.0618 12.906 8.38401 13 7 13V15ZM15 12.1959C15 10.0651 12.4248 6.7076 7 6.7076V8.7076C11.6545 8.7076 13 11.4766 13 12.1959H15Z" fill="#515FF9" mask="url(#path-1-inside-1_399_206)"/>
                        </svg>
                        {props.test_info.done}명 참여
                    </div>
                    <p>{props.test_info.content}</p>
                </div>
                <div className={styles.btn_list}>
                    <a href={window.location.href} className={styles.restart_btn_a}>
                        <button className={styles.restart_btn}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.132 8.28631C14.8837 8.24314 14.6284 8.30021 14.4222 8.44497C14.2161 8.58972 14.0759 8.81032 14.0326 9.05823C13.786 10.473 13.0465 11.7552 11.9448 12.6782C10.8431 13.6013 9.45011 14.1058 8.01195 14.1026C4.64242 14.1026 1.90101 11.3653 1.90101 8C1.90101 4.6355 4.64242 1.89818 8.01195 1.89818C9.54384 1.89818 10.9846 2.46288 12.111 3.48315L11.3252 4.26773C11.2224 4.36998 11.1501 4.4987 11.1162 4.63957C11.0823 4.78045 11.0882 4.92795 11.1333 5.06567C11.1784 5.20338 11.2608 5.32591 11.3715 5.41962C11.4821 5.51333 11.6167 5.57454 11.7601 5.59645L15.0964 6.11053C15.2182 6.12929 15.3428 6.11909 15.46 6.08074C15.5772 6.0424 15.6837 5.977 15.7708 5.88985C15.8579 5.8027 15.9232 5.69627 15.9614 5.57919C15.9996 5.46211 16.0096 5.33768 15.9906 5.21602L15.4766 1.88552C15.4545 1.7424 15.3931 1.60819 15.2993 1.49778C15.2055 1.38736 15.0828 1.30506 14.945 1.26001C14.8072 1.21495 14.6595 1.2089 14.5185 1.24253C14.3774 1.27616 14.2484 1.34816 14.1459 1.45052L13.4552 2.14098C11.9789 0.762926 10.0328 -0.002538 8.01195 6.32249e-06C3.59449 6.32249e-06 0 3.58913 0 8C0 12.4117 3.59449 16 8.01195 16C11.9154 16 15.2342 13.2176 15.9051 9.38409C15.9483 9.13615 15.8912 8.88123 15.7462 8.67536C15.6012 8.4695 15.3803 8.32956 15.132 8.28631Z" fill="#2F2F2F"/>
                            </svg>
                            <p>다시 처음부터</p>
                            
                        </button>
                    </a>
                    <button className={props.likesClicked ? styles.button_clicked : null} onClick={() => props.setLikesClicked(!props.likesClicked)}>❤ 좋아요</button>
                    <button onClick={props.clickShare}>공유하기</button>
                </div>
            </div>
            </div>
        
    );
}

export default TestResult;