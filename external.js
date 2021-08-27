let squadA = [];
function getNameA(player) {

    if (squadA.length <= 4) {

        squadA.push(player);

        let li = document.createElement("li");
        let text = document.createTextNode(player);
        li.appendChild(text);

        document.getElementById("teamA").appendChild(li);
    } else {
        alert("limit extend");
    }

}

let squadB = [];
function getNameB(player) {

    if (squadB.length <= 4) {

        squadB.push(player);

        var li = document.createElement("li");
        var text = document.createTextNode(player);
        li.appendChild(text);

        document.getElementById("teamB").appendChild(li);
    } else {
        alert("limit extend");
    }

}
let win;
function toss() {
    let x;
    let rand = Math.floor(Math.random() * 2) + 0;
    if (rand == 1) {
        let x = prompt("Team A won the toss and choose to:");
        alert(x + " " + "first");
        if (x.toLocaleLowerCase() === "bat")
            win = "TeamA  0-0"
        else
            win = "TeamB  0-0"
    }
    else {
        let x = prompt("Team B won the toss and choose to:");
        alert(x + " " + "first");
        if (x.toLocaleLowerCase() === "bat")
            win = "TeamB  0-0"
        else
            win = "TeamA  0-0"

    }
    display(win);
   
}



let totalScore = []; 
let ball = 0;
let overs = 0;

function result() {
    let wt = 0;
    let wd = 0;
    let nb = 0;
    let totalRuns = 0;
    let runs = Math.floor(Math.random() * 6) + 1;

    ball+=1
    overs += 0.1;
    num  = overs.toFixed(1);

    if (ball == 6) {
        num = "1"
        
    }else if(ball == 7){
        num = "1.1"
        wt+=1
        totalRuns+=-runs;

    }else if(ball == 8){
        num = "1.1"
         wt+=1
         wd+=1
      
    }else if(ball == 9){
        num = "1.2"
        wt+=1

    }else if(ball == 10){
        num = "1.2"
        wt+=1
        nb+=1

    }else if(ball == 11){
        num = "1.3"
        wt+=1

    }else if(ball == 12){
        num = "1.4"
        wt+=1

    }else if(ball == 13){
        num = "1.5"
        wt+=2
        totalRuns+=-runs;

    }else if(ball == 14){
        num = "2"
        wt+=2
      
    }

    total = ({
        runs,
        ball,
        overs
        
    })

        totalScore = [...totalScore, total];
    
        totalScore.forEach(element => {
         totalRuns+=element.runs;

        });

    win = win.split(" ")[0]
    win = `${win}  ${totalRuns} - ${wt}  Overs: ${num} `
    display(win);
   
    if (ball==14) {
        document.getElementById("ball").disabled = true;
    }
    if (ball==7) {
        document.getElementById("wicket").style.display = "block";
    }
    else{
        setInterval(clear, 4000);
        function clear() {
            let targetOne = document.getElementById("wicket");
            targetOne.style.display = "none";
        }
    }
    if (ball==8) {
        document.getElementById("wide").style.display = "block";
    }
    else{
        setInterval(clear, 4000);
        function clear() {
            let targetTwo = document.getElementById("wide");
            targetTwo.style.display = "none";
        }
    }
    if (ball==10) {
        document.getElementById("noball").style.display = "block";
    }
    else{
        setInterval(clear, 4000);
        function clear() {
            let targetThree = document.getElementById("noball");
            targetThree.style.display = "none";
        }
    }

}



let a = document.createElement("h4");
const display = (value) =>{
    let b = document.createTextNode(value);
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    a.appendChild(b);
    document.getElementById("bat-first").appendChild(a);

    document.getElementById("toss").style.display = "none";
}
