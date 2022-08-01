import React, { useEffect, useState } from "react";
import styles from "./NewPage.module.css"
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navigation/NavBar";
import Progress from "../components/ui/Progress";
import ResultType from "../components/new/ResultType";
import Question from "../components/new/Question";
import StickyBox from "react-sticky-box";


function NewPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])

    const categories = [
        '👩‍💻 개발',
        '💖 연애/성격',
        '🍣 음식',
        '👾 게임',
        '🙃 기타'
    ]

    const [category, setCategory] = useState(-1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState(0);
    const [question, setQuestion] = useState(0);
    const [password, setPassword] = useState("");

    const [typeList, setTypeList] = useState([{
        folded: false,
        name: '',
        imagefile: {},
        content: ''
    }])
    const [questionList, setQuestionList] = useState([{
        folded: false,
        question: '',
        choice: [{answer: '', type: '유형선택'}]
    }])

    function addType() {
        let typeArr = [...typeList]
        let typeInfo = {
            folded: false,
            name: '',
            imagefile: {},
            content: ''
        }
        typeArr.push(typeInfo)
        setTypeList(typeArr)
    }

    function addQuestion() {
        let questionArr = [...questionList]
        let questionInfo = {
            folded: false,
            question: '',
            choice: [{answer: '', type: '유형'}]
        }
        questionArr.push(questionInfo)
        setQuestionList(questionArr)
    }

    function post() {
        // 양식 체크
        if (category > -1 &&
            title.length > 0 &&
            type > 1 &&
            question > 0
        ) {
            var body = {};
            body.category = categories[category];
            body.title = title;
            body.content = content;
            body.typeList = typeList;
            body.questionList = questionList;
            body.password = password; // 나중에 암호화하기

            console.log(body);
            alert("등록되었습니다.")
        }
        else {
            alert("모든 필수 항목을 완성해주세요!")
        }
    }

    return (
        <>
            <NavBar showDropdown={true} new={true} />
            <Container fluid="md" style={{height: "100%", paddingTop: "40px", alignSelf: "flex-start" /* 매우 중요 */}}>
                <Row>
                    <Col xs="3" style={{width: "21%"}}> {/* override xs="3" (width: 25%) */}
                        <StickyBox offsetTop={120} offsetBottom={20}>
                            <Progress
                                categoryCheck={category > -1}
                                titleCheck={title.length > 0}
                                contentCheck={content.length > 0}
                                typeCheck={type > 1}
                                questionCheck={question > 0}
                                password={password}
                                setPassword={setPassword}
                                post={post}
                            />
                        </StickyBox>
                    </Col>
                    <Col xs style={{marginBottom: "50px"}}>
                        <div className={styles.form}>

                            <div>
                                <p>카테고리 설정</p>
                                <div className="categories">
                                    {categories?.map((e, i) => { // foreach는 rendering 불가
                                        return (
                                            <button value={i} className={category == i ?  styles.chip_clicked : styles.chip} onClick={(e) => setCategory(e.target.value)}>{e}</button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={styles.title}>
                                <p>테스트 제목</p>
                                <input type="text" placeholder="제목을 입력해주세요" value={title.value} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className={styles.content}>
                                <p>테스트 설명</p>
                                <textarea type="text" placeholder="설명을 입력해주세요" value={content.value} onChange={(e) => setContent(e.target.value)} />
                            </div>

                            <div className="types">
                                <p>결과유형 설정</p>
                                <ResultType
                                    typeList={typeList}
                                    type={type}
                                    setTypeList={setTypeList}
                                    setType={setType}
                                />

                                <button className={styles.add_btn} onClick={addType}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.392 6.65013H8.43363V1.6918C8.43363 1.46636 8.34407 1.25016 8.18467 1.09076C8.02526 0.93135 7.80906 0.841797 7.58363 0.841797C7.35819 0.841797 7.14199 0.93135 6.98259 1.09076C6.82318 1.25016 6.73363 1.46636 6.73363 1.6918V6.65013H1.77529C1.54986 6.65013 1.33366 6.73968 1.17425 6.89909C1.01485 7.0585 0.925293 7.2747 0.925293 7.50013C0.925293 7.72556 1.01485 7.94176 1.17425 8.10117C1.33366 8.26058 1.54986 8.35013 1.77529 8.35013H6.73363V13.3085C6.73363 13.5339 6.82318 13.7501 6.98259 13.9095C7.14199 14.0689 7.35819 14.1585 7.58363 14.1585C7.80906 14.1585 8.02526 14.0689 8.18467 13.9095C8.34407 13.7501 8.43363 13.5339 8.43363 13.3085V8.35013H13.392C13.6174 8.35013 13.8336 8.26058 13.993 8.10117C14.1524 7.94176 14.242 7.72556 14.242 7.50013C14.242 7.2747 14.1524 7.0585 13.993 6.89909C13.8336 6.73968 13.6174 6.65013 13.392 6.65013Z" fill="#535353"/>
                                    </svg>
                                    유형 추가하기
                                </button>
                            </div>

                            <div className="types">
                                <p>문제 설정</p>
                                <Question
                                    typeList={typeList}
                                    questionList={questionList}
                                    question={question}
                                    setQuestionList={setQuestionList}
                                    setQuestion={setQuestion}
                                />

                                <button className={styles.add_btn} onClick={addQuestion}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.392 6.65013H8.43363V1.6918C8.43363 1.46636 8.34407 1.25016 8.18467 1.09076C8.02526 0.93135 7.80906 0.841797 7.58363 0.841797C7.35819 0.841797 7.14199 0.93135 6.98259 1.09076C6.82318 1.25016 6.73363 1.46636 6.73363 1.6918V6.65013H1.77529C1.54986 6.65013 1.33366 6.73968 1.17425 6.89909C1.01485 7.0585 0.925293 7.2747 0.925293 7.50013C0.925293 7.72556 1.01485 7.94176 1.17425 8.10117C1.33366 8.26058 1.54986 8.35013 1.77529 8.35013H6.73363V13.3085C6.73363 13.5339 6.82318 13.7501 6.98259 13.9095C7.14199 14.0689 7.35819 14.1585 7.58363 14.1585C7.80906 14.1585 8.02526 14.0689 8.18467 13.9095C8.34407 13.7501 8.43363 13.5339 8.43363 13.3085V8.35013H13.392C13.6174 8.35013 13.8336 8.26058 13.993 8.10117C14.1524 7.94176 14.242 7.72556 14.242 7.50013C14.242 7.2747 14.1524 7.0585 13.993 6.89909C13.8336 6.73968 13.6174 6.65013 13.392 6.65013Z" fill="#535353"/>
                                    </svg>
                                    문제 추가하기
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NewPage;