var typeData = [
    {
        title: "용의주도한 전략가",
        detail: "최고가 되는 것은 외로운 일입니다. 매우 희귀한 성격이면서도 뛰어난 능력을 지닌 전략가(INTJ)는 이러한 말의 의미를 잘 알고 있습니다. 전략가는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다. 하지만 이로 인해 끊임없이 생각하고 주변의 모든 것을 분석하려는 자신의 성향을 이해할 수 있는 사람을 찾는 데 어려움을 겪기도 합니다."
    },
    {
        title: "논리술사",
        detail: "논리술사(INTP)는 자신의 독특한 관점과 활기 넘치는 지성에 자부심을 느끼며, 우주의 미스터리에 대해 깊이 생각하곤 합니다. 유명한 철학자와 과학자 중 논리술사 성격이 많은 것도 이 때문일 것입니다. 논리술사는 상당히 희귀한 성격이지만 뛰어난 창의성과 독창성으로 많은 사람 사이에서 존재감을 드러내곤 합니다. 이렇게 논리적이면서도 마술사와 같은 창의력을 발휘하는 성격이기에 ‘논리술사’라고 부르게 되었습니다."
    },
    {
        title: "통솔자",
        detail: "통솔자(ENTJ)는 타고난 지도자라고 할 수 있습니다. 이들은 카리스마와 자신감을 지니고 있으며 자신의 권한을 이용해 사람들이 공통된 목표를 위해 함께 노력하도록 이끕니다. 또한 이들은 냉철한 이성을 지닌 것으로 유명하며, 자신이 원하는 것을 성취하기 위해 열정과 결단력과 날카로운 지적 능력을 활용합니다. 이들은 전체 인구의 3%에 불과하지만 다른 많은 성격을 압도하는 존재감을 뽐내며, 많은 비즈니스와 단체를 이끄는 역할을 할 때가 많습니다."
    },
    {
        title: "변론가",
        detail: "변론가(ENTP)는 두뇌 회전이 빠르고 대담한 성격으로 현재 상황에 이의를 제기하는 데 거리낌이 없습니다. 변론가는 어떤 의견이나 사람에 반대하는 일을 두려워하지 않으며, 논란이 될 만한 주제에 대해 격렬하게 논쟁하는 일을 즐깁니다. 그렇다고 변론가가 반론을 제기하는 데만 관심이 있거나 악의를 지닌 것은 아닙니다. 사실 변론가는 지식이 풍부하고 호기심이 넘치며 활기찬 유머 감각으로 다른 사람을 즐겁게 할 수 있는 성격입니다. 다만 대부분의 성격과 달리 논쟁에서 즐거움을 찾는 성향이 있을 뿐입니다."
    }
]

var QnAData = [
    {
        q: "자취할 때 나는?",
        a: [
            { answer: "선택지1선택지1선택지1선택지1선택지1선택지1 선택지1", type: 0},
            { answer: "선택지2", type: 1},
            { answer: "선택지3", type: 2}
        ]
    },
    {
        q: "자취자취자취 질문 어쩌고",
        a: [
            { answer: "선택지1111", type: 0},
            { answer: "선택지222", type: 1}
        ]
    },
    {
        q: "당신의 생일파티에서 무엇을 할까?",
        a: [
            { answer: "선택지 어쩌고 어쩌고 선택지 저쩌고", type: 0},
            { answer: "선택지 어쩌고 어쩌고 선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고", type: 1},
            { answer: "선택지 어쩌고 어쩌고 선택지 저쩌고", type: 2},
            { answer: "선택지 어쩌고 어쩌고 어쩌고 선택지어쩌고 선택지어쩌고 선택지선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고", type: 3}
        ]
    }
];

// ---------------메인---------------

// 좋아요 버튼 토글
const likeBtn = document.querySelector('.like__btn');
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
});

var quizNum = 0; //몇번째 문제인지가 들어갈 변수
var quizTotalAmount = QnAData.length; //총 문제수
var typeTotalAmount = 4; //총 유형수 = 4개
var selectedAnswer = []; //문항마다 선택된 답변이 기록될 배열

for (let i in QnAData){ //문항 개수만큼 배열 늘리기
    selectedAnswer.push(null);
}

// 결과 창 안보이게
var resultSection = document.querySelector('section.result');
resultSection.style.display = 'none';

// 답변 버튼 토글
const answerBtn = document.querySelectorAll('#bbuuttoonn');
answerBtn.forEach(child => {
    child.addEventListener('click', () => {
        child.classList.toggle('active');
    });
});

setQnA()


// ---------------함수 정의---------------

// 이전 버튼 클릭
function goBefore() {
    quizNum -= 1;
    setQnA();
}

// 다음 버튼 클릭
function goNext() {
    if (quizNum+1 >= quizTotalAmount) {
        goResult()
        return;
    }
    quizNum += 1;
    setQnA();
}

// 답변 버튼 클릭 시
function selectA(selectNum) {
    selectedAnswer[quizNum] = selectNum;
    goNext();
}

// 결과 화면으로 전환
function goResult() {
    var playingSection = document.querySelector('section.playing'); //플레이 화면 가리기
    playingSection.style.display = 'none';
    var resultSection = document.querySelector('section.result'); //결과 화면 보이기
    resultSection.style.display = 'flex';
    setResult();
}

function setQnA() {
    //이전 답변버튼 삭제
    var children = document.querySelectorAll('#bbuuttoonn');
    children.forEach(child => {
        child.remove();
    });
    
    //답변 버튼 생성
    for (let i in QnAData[quizNum].a) { //문항별 답변 버튼 개수만큼
        var button = document.createElement('button');
        button.innerHTML = QnAData[quizNum].a[i].answer;
        button.className = 'answerBtn'+i;
        button.id = 'bbuuttoonn';
        button.onclick = function() {
            selectA(i)
        };
        button.classList.add('answerList');

        // 만든 답변버튼 화면에 추가하기
        var container = document.getElementById('anwsers');
        container.appendChild(button);
    }

    // 선택했던 답변이 있다면 토글
    if (selectedAnswer[quizNum] != null) {
        const selectedAnswerBtn = document.querySelector('.answerBtn'+selectedAnswer[quizNum]);
        selectedAnswerBtn.classList.toggle('active');
    }

    // 질문 타이틀 변경
    var quiz = document.querySelector('.quiz');
    quiz.innerHTML = QnAData[quizNum].q;
}

function setResult() {

    // 총 유형개수만큼 유형별 점수를 기록할 배열 생성
    var eachTypeScore = [];
    for(let i =0; i < typeTotalAmount; i++) {
        eachTypeScore.push(0);
    }

    for(let i in selectedAnswer) {

        // 선택을 안했다면 건너뜀
        console.log(selectedAnswer[i]);
        if (selectedAnswer[i] == null) {
            continue;
        }

        // 유형별 점수 기록
        let selectedType = QnAData[i].a[selectedAnswer[i]].type;
        ++eachTypeScore[selectedType];
    }

    console.log(eachTypeScore); //확인용

    // 최고점 비교해서 typeNum에 알맞은 유형 저장
    var typeNum = eachTypeScore.indexOf(Math.max(...eachTypeScore)); //근데 이러면 동점일때 앞에서 첫번쨰 요소가 반환됨

    // 유형에 맞게 [ 제목 / 설명 / 공유버튼 ] 출력
    var title = document.querySelector('.title__down');
    title.innerHTML = typeData[typeNum].title;
    var detail = document.querySelector('.detail');
    detail.innerHTML = typeData[typeNum].detail;
    var resultShareBtn = document.querySelector('.resultShare__btn');
    resultShareBtn.onclick = function() {
        resultShare(typeNum)
    };
}

function resultShare(num) {
    console.log(num, '번 유형을 결과로 공유합니다.');
    //어케하지..?
}

// 다른 유형 보기
function showOtherResult() {
    for (let i = 0; i < typeTotalAmount; i++) {

        var title__up = document.createElement('div');
        title__up.innerHTML = (+i + +1)+'번째 유형';
        title__up.className = 'otherResult__title__up';

        var title__down = document.createElement('div');
        title__down.innerHTML = typeData[i].title;
        title__down.className = 'otherResult__title__down';

        var detail = document.createElement('div');
        detail.innerHTML = typeData[i].detail;
        detail.className = 'otherResult__detail';

        // 만든 div를 화면에 추가하기
        var container = document.querySelector('.otherResult');
        container.appendChild(title__up);
        container.appendChild(title__down);
        container.appendChild(detail);
    }
}
