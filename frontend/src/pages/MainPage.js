import React, { useState } from "react";
import styles from "./MainPage.module.css"
import Loading from "../components/ui/Loading";
import Card from "../components/content/Card";
import InfiniteScroll from "react-infinite-scroller";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/navigation/SideBar";
import NavBar from "../components/navigation/NavBar";


function MainPage() {
    const test_res_1 = [
        {
            img: "https://media.istockphoto.com/vectors/little-baby-kitten-vector-id1221209216?k=20&m=1221209216&s=612x612&w=0&h=3GBULc0ZU1VYhmYXQV0dTIckV-faB7Q_Dg3GlxfHuso=",
            title: "내가 고양이라면?",
            content: "나와 똑 닮은 성격의 고양이 찾기",
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
                        <SideBar highlighted={1}/>
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

export default MainPage;