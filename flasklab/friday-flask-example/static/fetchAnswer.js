
function updateAnswer(data){
    json = data;
    answer = json["Answer"];
    answerBox = document.getElementById("ans");
    answerBox.innerHTML = answer;
}

function fetchAnswer(){
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    operation = document.getElementById("operation").value;
    URL = "/" + operation + "/" + x + "/"+y;
    fetch(URL).then( response => response.json()).then( data => updateAnswer(data));
}