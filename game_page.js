player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");
score1=0;
score2=0;
document.getElementById("player1_name").innerHTML=player1+": "; 
document.getElementById("player2_name").innerHTML=player2+": "; 
document.getElementById("player1_score").innerHTML=score1; 
document.getElementById("player2_score").innerHTML=score2; 

document.getElementById("player_question").innerHTML="Question turn - "+player1;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case is "+word );
    c1=word.charAt(1);
    console.log(c1);
    middle=Math.floor(word.length/2);
    cm=word.charAt(middle);
    console.log(cm);
    end=word.length-1;
    ce=word.charAt(end);
    console.log(ce);
    remove1=word.replace(c1,"_");
    remove2=remove1.replace(cm,"_");
    remove3=remove2.replace(ce,"_");
    console.log(remove3);
    question_word="<h4 id='word_display'>Q. "+remove3 +"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check </button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer is lowercase is "+answer);
    if (answer==word){
        if(answer_turn=="player1"){
            score1=score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else{
            score2=score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2;
        }
        else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question turn - "+player1;
        }
        if(answer_turn=="player1"){
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer turn - "+player2;
        }
        else{
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML="Answer turn -"+player1;
        }
        document.getElementById("output").innerHTML="";
}
