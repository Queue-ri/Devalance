import React, { useLayoutEffect, useState } from "react";
import styles from "./PlayPage.module.css"
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navigation/NavBar";
import TestCover from "../components/play/TestCover";
import TestPage from "../components/play/TestPage";
import TestResult from "../components/play/TestResult";
import { useLocation } from "react-router-dom";

// 개발
import test1_data from "../test/test1_data.json"
import test3_data from "../test/test3_data.json"
import test8_data from "../test/test8_data.json"
import test10_data from "../test/test10_data.json"

// 연애/성격
import test2_data from "../test/test2_data.json"
import test5_data from "../test/test5_data.json"
import test6_data from "../test/test6_data.json"
import test11_data from "../test/test11_data.json"


function PlayPage() {
    const id_data = useLocation();
    const id = id_data.state;

    const [testInfo, setTestInfo] = useState(
        {
            img: "",
            title: "",
            content: ""
        }
    )
    const [questionList, setQuestionList] = useState({})
    const [typeList, setTypeList] = useState({})

    useLayoutEffect(() => {
        init()
    }, []);

    function init() {
        let testfile; // file selector
        switch (id) {
            case 1: testfile = test1_data; break;
            case 2: testfile = test2_data; break;
            case 3: testfile = test3_data; break;
            case 5: testfile = test5_data; break;
            case 6: testfile = test6_data; break;
            case 8: testfile = test8_data; break;
            case 10: testfile = test10_data; break;
            case 11: testfile = test11_data; break;
        }

        setTestInfo(testfile["test_info"]);
        setQuestionList(testfile["question_list"])
        setTypeList(testfile["type_list"])
    }

    // test play
    const [likesClicked, setLikesClicked] = useState(false);
    const [page, setPage] = useState(0);
    const [userScore, setUserScore] = useState({});

    // test result
    const [result, setResult] = useState({});

    function prevPage(e) {
        let newPage = page;
        if(newPage == 1) {
            alert("첫 페이지입니다.");
            return;
        }
        setPage(newPage - 1)
    }

    function getResult() {
        // 이렇게 하면 실행 때마다 하나씩 set 되어서 안됨
        // setResultTypeName(Object.keys(userScore).reduce((a, b) => userScore[a] > userScore[b] ? a : b))
        // console.log(resultTypeName)
        // setResultTypeIdx(typeList.findIndex((x) => x.name === resultTypeName))
        // console.log(resultTypeIdx)
        // setResultTypeContent(typeList[resultTypeIdx].content)

        // 여러 개의 state는 한번에 set 해야 함
        let newResult = {}
        newResult.name = Object.keys(userScore).reduce((a, b) => userScore[a] > userScore[b] ? a : b)
        let idx = typeList.findIndex((x) => x.name === newResult.name)
        newResult.imagefile = typeList[idx].imagefile
        newResult.content = typeList[idx].content
        setResult(newResult)
    }

    function nextPage(e) {
        let newPage = page;
        try {
            if(newPage == questionList.length) {
                if (window.confirm('마지막 문제입니다. 결과를 확인할까요?')) {
                    getResult();
                } else {
                    return;
                }
            }
            setPage(newPage + 1)
        } catch (e) {
            alert("모든 문항을 체크해주세요!")
        }
    }

    function clickShare(e) {
        const body = "\"" + testInfo.title + "\"" + " Devalance에서 결과를 확인해보세요!\n"
        navigator.clipboard.writeText(body + window.location.href)
        alert("테스트 링크 복사 완료! 친구들에게 공유해보세요.")
    }

    return (
        <>
            <NavBar showDropdown={true} />
            <Container fluid="md" style={{height: "100%", paddingTop: "40px"}}>
                <Row>
                    <Col xs={page ? "0" : "2"}>
                    </Col>
                    <Col xs>
                        <div className={styles.test_sheet} style={page ? {margin: "0 auto", width: "58em"} : {marginLeft: "30px", width: "48em"}}>
                            {(() => {
                                if (page == 0) {
                                    return (
                                        <TestCover
                                            test_info={testInfo}
                                            nextPage={nextPage}
                                            setLikesClicked={setLikesClicked}
                                            likesClicked={likesClicked}
                                            clickShare={clickShare}
                                        />
                                    );
                                }
                                else if (page > questionList.length) {
                                    return (
                                        <TestResult
                                            result={result}
                                            setLikesClicked={setLikesClicked}
                                            likesClicked={likesClicked}
                                            clickShare={clickShare}
                                            test_info={testInfo}
                                        />
                                    );
                                }
                                else {
                                    return (
                                        <TestPage
                                            page={page}
                                            prevPage={prevPage}
                                            nextPage={nextPage}
                                            setLikesClicked={setLikesClicked}
                                            likesClicked={likesClicked}
                                            clickShare={clickShare}
                                            userScore={userScore}
                                            setUserScore={setUserScore}
                                            qobj={questionList[page-1]}
                                            test_info={testInfo}
                                        />
                                    );
                                }
                            })()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PlayPage;