import React, { useState } from "react";
import styles from "./MainPage.module.css"
import Loading from "../components/ui/Loading";
import Card from "../components/content/Card";
import InfiniteScroll from "react-infinite-scroller";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/navigation/SideBar";
import NavBar from "../components/navigation/NavBar";
import test_res from "../test/mainpage_test_res.json"


function MainPage() {
    const test_res_1 = test_res["res_1"]
    const test_res_2 = test_res["res_2"]

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
                        <SideBar highlighted={1} />
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
                                            id={x.id}
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