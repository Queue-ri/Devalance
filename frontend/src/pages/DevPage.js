import React, { useState } from "react";
import styles from "./MainPage.module.css"
import Loading from "../components/ui/Loading";
import Card from "../components/content/Card";
import InfiniteScroll from "react-infinite-scroller";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/navigation/SideBar";
import NavBar from "../components/navigation/NavBar";


function DevPage() {
    const test_res_1 = [
        {
            img: "https://qph.cf2.quoracdn.net/main-qimg-95ab4d5d315a7528da02f410a366c3ce-pjlq",
            title: "자스 VS 타스",
            content: "세기의 자강두천 대결",
            likes: 7777
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 9999
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 9999
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 9999
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 9999
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 9999
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 9999
        },
        {
            img: "",
            title: "✨Test Title",
            content: "첫 데이터의 마지막 카드입니다.",
            likes: 9999
        }
    ];

    const test_res_2 = [
        {
            img: "",
            title: "✨두 번째 데이터",
            content: "데이터 불러오기 성공~",
            likes: 1111
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 1234
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 1234
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 1234
        },
        {
            img: "",
            title: "Test Title",
            content: "테스트용 데이터입니다.",
            likes: 1234
        }
    ];

    const test_res_length = test_res_1.length + test_res_2.length;

    const [cards, setCardData] = useState(test_res_1);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoad, setInitFlag] = useState(true);
    const [showloading, setLoadingFlag] = useState(false);

    function loadNext() {
        setLoadingFlag(true);
        setTimeout(() => { // fake axios fetching
            setLoadingFlag(false);
            setCardData([...cards, ...test_res_2]);
        }, "1000");
        setHasMore(false);
        setInitFlag(false); // https://github.com/danbovey/react-infinite-scroller/issues/163#issuecomment-411201250
    }

    return (
        <>
            <NavBar />
            <Container fluid="md" style={{height: "100%", paddingTop: "40px"}}>
                <Row>
                    <Col xs="3">
                        <SideBar selected={1}/>
                    </Col>
                    <Col xs>
                        <InfiniteScroll
                            pageStart={0}
                            initialLoad={initialLoad}
                            loadMore={loadNext}
                            hasMore={hasMore}
                            threshold={1}
                            useWindow={true}
                        >
                            <div className={styles.headline}>{test_res_length}개의 테스트가 기다리고 있어요 :P</div>
                            <div className={styles.cardlist}>
                                {cards?.map((x) => {
                                    return (
                                        <Card
                                            img={x.img}
                                            title={x.title}
                                            content={x.content}
                                            likes={x.likes}
                                        />
                                    );
                                })}
                            </div>
                        </InfiniteScroll>
                        {showloading ? <Loading /> : null}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DevPage;