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
function toss() {
    let x;
    let win;
    let rand = Math.floor(Math.random() * 2) + 0;
    if (rand == 1) {
        let x = prompt("Team A won the toss and choose to:");
        alert(x + " " + "first");
        console.log(x);
        if (x.toLocaleLowerCase() === "bat")
            win = "TeamA  0-0"
        else
            win = "TeamB  0-0"
    }
    else {
        let x = prompt("Team B won the toss and choose to:");
        alert(x + " " + "first");
        console.log(x);
        if (x.toLocaleLowerCase() === "bat")
            win = "TeamB  0-0"
        else
            win = "TeamA  0-0"

    }

    let a = document.createElement("h4");
    let b = document.createTextNode(win);
    a.appendChild(b);
    document.getElementById("bat-first").appendChild(a);

    document.getElementById("toss").style.display= "none";
  
}


    let ball = 0;
    function result() {
        let result = Math.floor(Math.random() * 6) + 1;
        ball += 1;

    if (ball == 13) {
        console.log("overs completed");
    }else{
        console.log(result);
    }
  
     total_runs.push(result);

     console.log(total_runs);
    
  
}