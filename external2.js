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
let x;
function toss() {
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

const innings = [
    {
        teamName: "",
        totalRuns: 0,
        ball: 0,
        overs: 0,
        wickets: 0,
        choice: ""

    },
    {
        teamName: "",
        totalRuns: 0,
        ball: 0,
        overs: 0,
        wickets: 0,
        choice: ""

    }
]