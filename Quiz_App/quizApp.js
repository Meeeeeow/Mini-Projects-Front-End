


//variables
var qn = document.getElementById("qstn");
var op1 = document.getElementById("btn1");
var op2 = document.getElementById("btn2");
var op3 = document.getElementById("btn3");
var op4 = document.getElementById("btn4");

var serial = 0;
var correctAns;
var count = 0;
var clock = 60;
var goal = 0;


//hover
function colorEdit(){
    this.style.backgroundColor = "blue";
}

//mouseout
function colorMouseOut(){
    this.style.backgroundColor = "rgb(75, 139, 155)";
}

const load = () =>{
    //initial background
    op1.style.backgroundColor ="rgb(75, 139, 155)";
    op2.style.backgroundColor ="rgb(75, 139, 155)";
    op3.style.backgroundColor ="rgb(75, 139, 155)";
    op4.style.backgroundColor ="rgb(75, 139, 155)";

    //pointer events
    op1.style.pointerEvents = "auto";
    op2.style.pointerEvents = "auto";
    op3.style.pointerEvents = "auto";
    op4.style.pointerEvents = "auto";

    //visibility
    document.getElementById("ans").style.visibility = "hidden";

    //mouseover event
    document.getElementById("btn1").addEventListener("mouseover",colorEdit);
    document.getElementById("btn2").addEventListener("mouseover",colorEdit);
    document.getElementById("btn3").addEventListener("mouseover",colorEdit);
    document.getElementById("btn4").addEventListener("mouseover",colorEdit);

    //mouseout event
    document.getElementById("btn1").addEventListener("mouseout",colorMouseOut);
    document.getElementById("btn2").addEventListener("mouseout",colorMouseOut);
    document.getElementById("btn3").addEventListener("mouseout",colorMouseOut);
    document.getElementById("btn4").addEventListener("mouseout",colorMouseOut);

    

    //data fetch
    fetch('Questions.json').then(function (response){
        console.log(response);
        return response.json();
    }).then(function(obj){
        count = Object.keys(obj.QuizBeginner).length;
        document.getElementById("points").innerHTML = "Score: " + goal;
        qn.innerHTML = (serial + 1) + ". " + obj.QuizBeginner[serial].question;
        op1.innerHTML = obj.QuizBeginner[serial].a;
        op2.innerHTML = obj.QuizBeginner[serial].b;
        op3.innerHTML = obj.QuizBeginner[serial].c;
        op4.innerHTML = obj.QuizBeginner[serial].d;
        correctAns = obj.QuizBeginner[serial].correctAnswer;
        
    }).catch(function(error){
        console.log("something wrong with fetching data");
    });
}

load();

//click
    document.getElementById("btn1").onclick = function(){
        let answer = document.getElementById("btn1").innerHTML;
        document.getElementById("btn1").style.pointerEvents = "none";
        document.getElementById("btn2").style.pointerEvents = "none";
        document.getElementById("btn3").style.pointerEvents = "none";
        document.getElementById("btn4").style.pointerEvents = "none";
        if(Number(answer) === correctAns)
        {
            document.getElementById("btn1").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn1").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn1").style.backgroundColor = "forestgreen";
            serial++;
            goal++;
            setTimeout(load,1000);
        }else{
            document.getElementById("btn1").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn1").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn1").style.backgroundColor = "darkred";
            document.getElementById("ans").innerHTML  = "Correct Answer is " + correctAns;
            document.getElementById("ans").style.visibility = "visible";
            serial++;
            setTimeout(load,1000);
        }
    }


    document.getElementById("btn2").onclick = function(){
        let answer = document.getElementById("btn2").innerHTML;
        document.getElementById("btn1").style.pointerEvents = "none";
        document.getElementById("btn2").style.pointerEvents = "none";
        document.getElementById("btn3").style.pointerEvents = "none";
        document.getElementById("btn4").style.pointerEvents = "none";
        if(Number(answer) === correctAns)
        {
            document.getElementById("btn2").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn2").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn2").style.backgroundColor = "forestgreen";
            serial++;
            goal++;
            setTimeout(load,1000);
        }else{
            document.getElementById("btn2").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn2").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn2").style.backgroundColor = "darkred";
            document.getElementById("ans").innerHTML  = "Correct Answer is " + correctAns;
            document.getElementById("ans").style.visibility = "visible";
            serial++;
            setTimeout(load,1000);
        }
    }


    document.getElementById("btn3").onclick = function(){
        let answer = document.getElementById("btn3").innerHTML;
        document.getElementById("btn1").style.pointerEvents = "none";
        document.getElementById("btn2").style.pointerEvents = "none";
        document.getElementById("btn3").style.pointerEvents = "none";
        document.getElementById("btn4").style.pointerEvents = "none";
        if(Number(answer) === correctAns)
        {
            document.getElementById("btn3").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn3").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn3").style.backgroundColor = "forestgreen";
            serial++;
            goal++;
            setTimeout(load,1000);
        }else{
            document.getElementById("btn3").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn3").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn3").style.backgroundColor = "darkred";
            document.getElementById("ans").innerHTML  = "Correct Answer is " + correctAns;
            document.getElementById("ans").style.visibility = "visible";
            serial++;
            setTimeout(load,1000);
        }
    }


    document.getElementById("btn4").onclick = function(){
        let answer = document.getElementById("btn4").innerHTML;
        document.getElementById("btn1").style.pointerEvents = "none";
        document.getElementById("btn2").style.pointerEvents = "none";
        document.getElementById("btn3").style.pointerEvents = "none";
        document.getElementById("btn4").style.pointerEvents = "none";
        if(Number(answer) === correctAns)
        {
            document.getElementById("btn4").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn4").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn4").style.backgroundColor = "forestgreen";
            serial++;
            goal++;
            setTimeout(load,1000);
        }else{
            document.getElementById("btn4").removeEventListener("mouseover",colorEdit);
            document.getElementById("btn4").removeEventListener("mouseout",colorMouseOut);
            document.getElementById("btn4").style.backgroundColor = "darkred";
            document.getElementById("ans").innerHTML  = "Correct Answer is " + correctAns;
            document.getElementById("ans").style.visibility = "visible";
            serial++;
            setTimeout(load,1000);
        }
    }


 
//time
function setClock()
{
    if(clock >= 0)
    {
        document.getElementById("time").innerHTML ="Time: " + clock;
        clock--;
    }else if(clock < 0)
    {
        console.log(count);
        console.log(serial);
        if(count != serial)
        {
            alert("Try again!You scored " + goal);
            clearInterval(stopexec);
            clock = 60;
            console.log(clock);
            stopexec = setInterval(setClock,1000);
            serial = 0;
            goal = 0;
            load();
        }else{
            alert("You win, You scored " + goal);
            clearInterval(stopexec);
            clock = 60;
            console.log(clock);
            stopexec = setInterval(setClock,1000);
            serial = 0;
            goal = 0;
            load();
        }
    }
    
}

var stopexec = setInterval(setClock,1000);

