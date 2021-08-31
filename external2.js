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
    let a = document.createElement("h4");
    let b = document.createTextNode(win);
    a.appendChild(b);

    document.getElementById("bat-first").appendChild(a);

    document.getElementById("toss").style.display = "none";
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
    
      
    let overs;
    let totalScore = []
    let runs = Math.floor(Math.random() * 6) + 1;
    
    
    innings[0].ball += 1
    innings[0].overs += 0.1
    num = innings[0].overs.toFixed(1);


    if (innings[0].ball == 6) {
        num = "1"

    } else if (innings[0].ball == 7) {
        num = "1.1"
        innings[0].wickets += 1
        innings[0].totalRuns += -runs;

    } else if (innings[0].ball == 8) {
        num = "1.1"
        wd += 1

    } else if (innings[0].ball == 9) {
        num = "1.2"

    } else if (innings[0].ball == 10) {
        num = "1.2"
        nb += 1

    } else if (innings[0].ball == 11) {
        num = "1.3"

    } else if (innings[0].ball == 12) {
        num = "1.4"

    } else if (innings[0].ball == 13) {
        num = "1.5"
        innings[0].wickets += 1
        innings[0].totalRuns += -runs;

    } else if (innings[0].ball == 14) {
        num = "2"
    }
    
    innings[0].totalRuns += runs;
     
    total = ({
        runs,
        overs

    })

    totalScore = [...totalScore, total];



    innings[1].ball += 1
    innings[1].overs += 0.1
    num = innings[1].overs.toFixed(1);



    if (innings[1].ball == 6) {
        num = "1"

    } else if (innings[1].ball == 7) {
        num = "1.1"
        innings[1].wickets += 1
        innings[1].totalRuns += -runs;

    } else if (innings[1].ball == 8) {
        num = "1.1"
        wd += 1

    } else if (innings[1].ball == 9) {
        num = "1.2"

    } else if (innings[1].ball == 10) {
        num = "1.2"
        nb += 1

    } else if (innings[1].ball == 11) {
        num = "1.3"

    } else if (innings[1].ball == 12) {
        num = "1.4"

    } else if (innings[1].ball == 13) {
        num = "1.5"
        innings[1].wickets += 1
        innings[1].totalRuns += -runs;

    } else if (innings[1].ball == 14) {
        num = "2"
    }
    innings[1].totalRuns+=runs;
     
    innings.forEach(values => {
        console.log(values);
    });
   

  