import React from "react";
import styles from "./ResultType.module.css"

function ResultType(props) {
    function changeFolded(key, val) {
        if(val == true) {
            // 입력 검사
            if (props.typeList[key].name == '') {
                alert("유형 이름을 입력해주세요.");
                return;
            }
            // 유형 이미지는 선택사항
            if (props.typeList[key].content == '') {
                alert("유형 설명을 입력해주세요.");
                return;
            }
        }

        let newTypeList = [...props.typeList]
        newTypeList[key].folded = val
        props.setTypeList(newTypeList)

        let count = props.type
        props.setType(count + (val == true ? 1 : -1))
    }

    function changeName(key, val) {
        let newTypeList = [...props.typeList]
        newTypeList[key].name = val
        props.setTypeList(newTypeList)
    }

    function changeImagefile(key, val) {
        let newTypeList = [...props.typeList]
        newTypeList[key].imagefile = val
        props.setTypeList(newTypeList)
    }

    function changeContent(key, val) {
        let newTypeList = [...props.typeList]
        newTypeList[key].content = val
        props.setTypeList(newTypeList)
    }

    function deleteType(key) {
        let newTypeList = [...props.typeList]
        newTypeList.splice(key, 1);
        props.setTypeList(newTypeList)
    }

    return (
        props.typeList && props.typeList.map((item, i) => {
            // console.log(item)
            return (
                <div key={i} className={styles.container}>
                    <div className={styles.folded_type} style={{ display: (item.folded ? 'flex': 'none') }} onClick={() => changeFolded(i, false)}>
                        {item.name}
                    </div>

                    <div className={styles.type} style={{ display: (item.folded ? 'none': 'flex') }}> 
                        <div>
                            <div>유형 이름</div>
                            <input type="text" placeholder="유형 이름을 입력해주세요" value={item.name} onChange={(e) => changeName(i, e.target.value)} />
                        </div>
                        <div>
                            <div>유형 이미지</div>
                            <input type="file" accept="image/png, image/jpeg" style={{cursor: "pointer"}} onChange={(e) => changeImagefile(i, e.target.files[0])} />
                        </div>
                        <div>
                            <div>유형 설명</div>
                            <textarea type="text" placeholder="유형 설명을 입력해주세요" value={item.content} onChange={(e) => changeContent(i, e.target.value)} />
                        </div>
                        <div className={styles.btn_container}>
                            <button className={styles.done_btn} onClick={() => changeFolded(i, true)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99992 2.49967C14.1666 2.49967 17.4999 5.83301 17.4999 9.99967C17.4999 14.1663 14.1666 17.4997 9.99992 17.4997C5.83325 17.4997 2.49992 14.1663 2.49992 9.99967C2.49992 5.83301 5.83325 2.49967 9.99992 2.49967ZM9.99992 0.833008C4.91659 0.833008 0.833252 4.91634 0.833252 9.99967C0.833252 15.083 4.91659 19.1663 9.99992 19.1663C15.0833 19.1663 19.1666 15.083 19.1666 9.99967C19.1666 4.91634 15.0833 0.833008 9.99992 0.833008Z" fill="#6C6C6C"/>
                            </svg>
                                완료
                            </button>
                            <button className={styles.delete_type_btn} onClick={() => deleteType(i)}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.51238 6.99994L13.2215 2.29077C13.3145 2.19791 13.3882 2.08767 13.4385 1.96632C13.4888 1.84498 13.5147 1.71492 13.5147 1.58356C13.5148 1.45221 13.4889 1.32213 13.4387 1.20076C13.3885 1.07939 13.3148 0.969096 13.222 0.876186C13.1291 0.783276 13.0189 0.709564 12.8975 0.659261C12.7762 0.608957 12.6461 0.583047 12.5148 0.583008C12.3834 0.582969 12.2533 0.608803 12.132 0.659035C12.0106 0.709267 11.9003 0.782914 11.8074 0.875769L7.09822 5.58577L2.38822 0.875769C2.19851 0.698583 1.94739 0.602032 1.68785 0.606496C1.42831 0.61096 1.18065 0.716089 0.997154 0.899694C0.813657 1.0833 0.708674 1.33102 0.704363 1.59056C0.700053 1.8501 0.796751 2.10117 0.974049 2.29077L5.68405 6.99994L0.974049 11.7091C0.834848 11.8493 0.740199 12.0275 0.702006 12.2213C0.663813 12.4151 0.68378 12.6159 0.759398 12.7984C0.835015 12.9809 0.962905 13.1369 1.12699 13.2469C1.29107 13.3569 1.48401 13.416 1.68155 13.4166C1.93738 13.4166 2.19322 13.3191 2.38822 13.1241L7.09822 8.4141L11.8074 13.1241C11.9001 13.2172 12.0103 13.291 12.1317 13.3414C12.253 13.3917 12.3831 13.4177 12.5145 13.4177C12.6458 13.4177 12.7759 13.3917 12.8973 13.3414C13.0186 13.291 13.1288 13.2172 13.2215 13.1241C13.3145 13.0312 13.3883 12.9209 13.4386 12.7995C13.4889 12.6781 13.5148 12.548 13.5148 12.4166C13.5148 12.2852 13.4889 12.1551 13.4386 12.0337C13.3883 11.9123 13.3145 11.802 13.2215 11.7091L8.51238 6.99994Z" fill="#6C6C6C"/>
                                </svg>
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
            );
        })
    );
}

export default ResultType;