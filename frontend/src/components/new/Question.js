import React from "react";
import styles from "./Question.module.css"


function Question(props) {
    function changeFolded(key, val) {
        if(val == true) {
            // 입력 검사
            if (props.questionList[key].question == '') {
                alert("문제 제목을 입력해주세요.");
                return;
            }
            let invalid = false;
            props.questionList[key].choice.forEach((obj) => {
                if (obj.answer == '' || obj.type == '유형선택') {
                    alert("문제 선택지를 완성해주세요.");
                    invalid = true;
                }
            })
            if(invalid) return;
        }

        let newQuestionList = [...props.questionList]
        newQuestionList[key].folded = val
        props.setQuestionList(newQuestionList)

        let count = props.question
        props.setQuestion(count + (val == true ? 1 : -1))
    }

    function changeQuestion(key, val) {
        let newQuestionList = [...props.questionList]
        newQuestionList[key].question = val
        props.setQuestionList(newQuestionList)
    }

    function addChoice(ikey) {
        let newQuestionList = [...props.questionList]
        newQuestionList[ikey].choice.push({answer: '', type: '유형선택'})
        props.setQuestionList(newQuestionList)
    }

    function deleteChoice(ikey, jkey) {
        let newQuestionList = [...props.questionList]
        newQuestionList[ikey].choice.splice(jkey, 1);
        props.setQuestionList(newQuestionList)
    }

    function changeChoiceAnswer(ikey, jkey, val) {
        let newQuestionList = [...props.questionList]
        newQuestionList[ikey].choice[jkey].answer = val
        props.setQuestionList(newQuestionList)
    }

    function changeChoiceType(ikey, jkey, val) {
        let newQuestionList = [...props.questionList]
        newQuestionList[ikey].choice[jkey].type = val
        props.setQuestionList(newQuestionList)
    }

    function deleteQuestion(key) {
        let newQuestionList = [...props.questionList]
        newQuestionList.splice(key, 1);
        props.setQuestionList(newQuestionList)
    }

    return (
        props.questionList && props.questionList.map((item, i) => {
            // console.log(item)
            return (
                <div key={i} className={styles.container}>
                    <div className={styles.folded_question} style={{ display: (item.folded ? 'flex': 'none') }} onClick={() => changeFolded(i, false)}>
                        <div>{i+1 + '. '}</div>
                        {item.question}
                    </div>

                    <div className={styles.question} style={{ display: (item.folded ? 'none': 'flex') }}> 
                        <div>
                            <div>제목</div>
                            <input type="text" placeholder="제목을 입력해주세요" value={item.question} onChange={(e) => changeQuestion(i, e.target.value)} />
                        </div>
                        <div>
                            <div>선택지</div>
                            <div className={styles.choice_container}>
                                {
                                    item.choice.map((citem, j) => {
                                        return (
                                            <div key={j} className={styles.choice}>
                                                <input type="text" placeholder="선택지를 입력해주세요" value={citem.answer} onChange={(e) => changeChoiceAnswer(i, j, e.target.value)} />
                                                <select className={styles.type_dropdown} onChange={(e) => changeChoiceType(i, j, e.target.value)}>
                                                    <option value="유형선택">유형선택</option>
                                                    {
                                                        props.typeList.map((titem, k) => {
                                                            return (titem.name == '' ? null : <option value={titem.name}>{titem.name}</option>);
                                                        })
                                                    }
                                                </select>
                                                <div onClick={() => deleteChoice(i, j)}>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.81505 8.00012L15.4661 2.34912C15.5775 2.23769 15.666 2.1054 15.7264 1.95978C15.7867 1.81417 15.8178 1.6581 15.8179 1.50047C15.8179 1.34284 15.7869 1.18675 15.7266 1.0411C15.6664 0.895458 15.578 0.763111 15.4666 0.651619C15.3551 0.540126 15.2228 0.451673 15.0772 0.391308C14.9316 0.330944 14.7755 0.299851 14.6179 0.299805C14.4603 0.299758 14.3042 0.330759 14.1585 0.391038C14.0129 0.451316 13.8805 0.539692 13.7691 0.651118L8.11805 6.30312L2.46605 0.651118C2.23841 0.438495 1.93706 0.322634 1.62561 0.327991C1.31416 0.333347 1.01698 0.459502 0.79678 0.679828C0.576584 0.900154 0.450605 1.19741 0.445432 1.50887C0.440258 1.82032 0.556296 2.1216 0.769054 2.34912L6.42105 8.00012L0.769054 13.6511C0.602013 13.8193 0.488434 14.0331 0.442602 14.2657C0.39677 14.4983 0.420732 14.7392 0.511473 14.9582C0.602213 15.1772 0.755682 15.3645 0.952577 15.4965C1.14947 15.6285 1.381 15.6994 1.61805 15.7001C1.92505 15.7001 2.23205 15.5831 2.46605 15.3491L8.11805 9.69712L13.7691 15.3491C13.8803 15.4608 14.0126 15.5494 14.1582 15.6098C14.3038 15.6703 14.4599 15.7014 14.6176 15.7014C14.7752 15.7014 14.9313 15.6703 15.0769 15.6098C15.2225 15.5494 15.3548 15.4608 15.4661 15.3491C15.5776 15.2377 15.6661 15.1053 15.7265 14.9596C15.7869 14.814 15.818 14.6578 15.818 14.5001C15.818 14.3424 15.7869 14.1863 15.7265 14.0406C15.6661 13.8949 15.5776 13.7626 15.4661 13.6511L9.81505 8.00012Z" fill="#6C6C6C"/>
                                                    </svg>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.btn_container}>
                            <div style={{paddingTop: "0px", cursor: "pointer"}} onClick={() => addChoice(i)}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.392 6.65013H8.43363V1.6918C8.43363 1.46636 8.34407 1.25016 8.18467 1.09076C8.02526 0.93135 7.80906 0.841797 7.58363 0.841797C7.35819 0.841797 7.14199 0.93135 6.98259 1.09076C6.82318 1.25016 6.73363 1.46636 6.73363 1.6918V6.65013H1.77529C1.54986 6.65013 1.33366 6.73968 1.17425 6.89909C1.01485 7.0585 0.925293 7.2747 0.925293 7.50013C0.925293 7.72556 1.01485 7.94176 1.17425 8.10117C1.33366 8.26058 1.54986 8.35013 1.77529 8.35013H6.73363V13.3085C6.73363 13.5339 6.82318 13.7501 6.98259 13.9095C7.14199 14.0689 7.35819 14.1585 7.58363 14.1585C7.80906 14.1585 8.02526 14.0689 8.18467 13.9095C8.34407 13.7501 8.43363 13.5339 8.43363 13.3085V8.35013H13.392C13.6174 8.35013 13.8336 8.26058 13.993 8.10117C14.1524 7.94176 14.242 7.72556 14.242 7.50013C14.242 7.2747 14.1524 7.0585 13.993 6.89909C13.8336 6.73968 13.6174 6.65013 13.392 6.65013Z" fill="#535353"/>
                                </svg>
                                선택지 추가하기
                            </div>
                            <button className={styles.done_btn} onClick={() => changeFolded(i, true)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99992 2.49967C14.1666 2.49967 17.4999 5.83301 17.4999 9.99967C17.4999 14.1663 14.1666 17.4997 9.99992 17.4997C5.83325 17.4997 2.49992 14.1663 2.49992 9.99967C2.49992 5.83301 5.83325 2.49967 9.99992 2.49967ZM9.99992 0.833008C4.91659 0.833008 0.833252 4.91634 0.833252 9.99967C0.833252 15.083 4.91659 19.1663 9.99992 19.1663C15.0833 19.1663 19.1666 15.083 19.1666 9.99967C19.1666 4.91634 15.0833 0.833008 9.99992 0.833008Z" fill="#6C6C6C"/>
                            </svg>
                                완료
                            </button>
                            <button className={styles.delete_type_btn} onClick={() => deleteQuestion(i)}>
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

export default Question;