var data = [
    ["자취할 때 나는?","선택지1선택지1선택지1선택지1선택지1선택지1 선택지1","선택지2","선택지3"],
    ["자취자취자취 질문 어쩌고","선택지1111","선택지2222"],
    ["당신의 생일파티에서 무엇을 할까?","선택지 어쩌고 어쩌고 선택지 저쩌고","선택지 어쩌고 어쩌고 선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고","선택지 어쩌고 어쩌고 선택지 저쩌고","선택지 어쩌고 어쩌고 어쩌고 선택지어쩌고 선택지어쩌고 선택지선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고선택지 어쩌고 어쩌고 선택지 저쩌고"]
];

var num = 2; //몇번째 문제인지가 들어갈 변수

document.addEventListener('DOMContentLoaded', function() {

    var label = document.createElement('label');
    label.innerHTML = data[num][0];

    var container = document.getElementById('quiz');
    container.appendChild(label);

    for (i = 1; i <= data[num].length-1; i++) {
        var button = document.createElement('button');
        button.innerHTML = data[num][i];
    
        button.onclick = function() {
            // …
        };
    
        var container = document.getElementById('anwsers');
        container.appendChild(button);
    }
}, false);