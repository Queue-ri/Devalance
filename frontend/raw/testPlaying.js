const likeBtn = document.querySelector('.like__btn');


likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
});

var QnAData = [
    {
        q: "자취할 때 나는?",
        a: [
            { answer: "선택지1선택지1선택지1선택지1선택지1선택지1 선택지1", type: "typeA"},
            { answer: "선택지2", type: "typeB"},
            { answer: "선택지3", type: "typeC"}
        ]
    },
    {
        q: "자취자취자취 질문 어쩌고",
        a: [
            { answer: "선택지1111", type: "typeB"},
            { answer: "선택지222", type: "typeA"}
        ]
    },
    {
        q: "당신의 생일파티에서 무엇을 할까?",
        a: [
            { answer: "선택지 어쩌고 어쩌고 선택지 저쩌고", type: "typeD"},
            { answer: "선택지 어쩌고 어쩌고 선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고", type: "typeB"},
            { answer: "선택지 어쩌고 어쩌고 선택지 저쩌고", type: "typeC"},
            { answer: "선택지 어쩌고 어쩌고 어쩌고 선택지어쩌고 선택지어쩌고 선택지선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고", type: "typeA"}
        ]
    }
];


var quizNum = 0; //몇번째 문제인지가 들어갈 변수
var quizTotalAmount = QnAData.length; //총 문제수
var selectAnswer = [];
for (let i in QnAData){
    selectAnswer.push(0);
}

// 결과 창 안보이게
var resultSection = document.querySelector('section.result');
resultSection.style.display = 'none';
setQnA();


function goBefore() {
    removeBtns();
    quizNum -= 1;
    setQnA();
}


function goNext() {
    if (quizNum+1 >= quizTotalAmount) {
        goResult()
        return;
    }

    removeBtns();
    quizNum += 1;
    setQnA();
}

function removeBtns() {
    var children = document.querySelectorAll('.answerList'); //이전문제의 버튼 삭제
    children.forEach(child => {
        child.remove();
    });
}

function selectA(selectNum) {
    selectAnswer[quizNum] = selectNum;
    goNext();
}


function goResult() {
    var playingSection = document.querySelector('section.playing');
    playingSection.style.display = 'none';
    var resultSection = document.querySelector('section.result');
    resultSection.style.display = 'flex';
}

function setQnA() {
    var quiz = document.querySelector('.quiz');
    quiz.innerHTML = QnAData[quizNum].q;

    for (let i in QnAData[quizNum].a) {
        var button = document.createElement('button');
        button.innerHTML = QnAData[quizNum].a[i].answer;
        button.className = 'answerBtn';
        button.onclick = function() {
            selectA(+i + +1)
        };
        button.classList.add('answerList');
    
        var container = document.getElementById('anwsers');
        container.appendChild(button);
    }
}
