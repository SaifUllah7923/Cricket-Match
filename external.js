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
    // let x;
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
        choice: "",
        // scoreSeet: [
        //     {
        //         runs: 0,
        //         isWicket: "",
        //         isNoball: "",
        //         isWideBall: ""
        //     }
        //     // {
        //     //     runs: 3,
        //     //     ballCount: 2,
        //     //     isWicket: false,
        //     //     isNoball: false,
        //     //     isWideBall: false
        //     // }
        // ]
    },
    {
        teamName: "",
        totalRuns: 0,
        ball: 0,
        overs: 0,
        wickets: 0,
        choice: "",
        // scoreSeet: [
        //     {
        //         runs: 0,
        //         ballCount: 1,
        //         isWicket: false,
        //         isNoball: false,
        //         isWideBall: false
        //     }
        //     // {
        //     //     runs: 3,
        //     //     ballCount: 2,
        //     //     isWicket: false,
        //     //     isNoball: false,
        //     //     isWideBall: false
        //     // }
        // ]
    }
]

let totalScore = [];
let overs ;

function result() {
    let wd ;
    let nb ;
    let runs = Math.floor(Math.random() * 6) + 1;
    
    innings[0].ball +=1
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
    if(innings[0].ball == 14){
        document.getElementById("ball").disabled = true;
    }

    total = ({
        runs,
        overs

    })
   
    totalScore = [...totalScore, total];
    
    innings[0].totalRuns += runs;


    // totalScore.forEach(element => {
    //     innings[0].totalRuns += element.runs;
    //     // console.log(innings[0].totalRuns);
    //     // console.log(element.runs);

    // });

//    console.log(innings);
   
    win = win.split(" ")[0]
    win = `${win}  ${innings[0].totalRuns} - ${innings[0].wickets}  Overs: ${num} `
    display(win);


    if (innings[0].ball == 7) {
        document.getElementById("wicket").style.display = "block";
    }
    else {
        setInterval(clear, 3000);
        function clear() {
            let targetOne = document.getElementById("wicket");
            targetOne.style.display = "none";
        }
    }
    if (innings[0].ball == 13) {
        document.getElementById("wicket").style.display = "block";
    }
    else {
        setInterval(clear, 3000);
        function clear() {
            let targetOne = document.getElementById("wicket");
            targetOne.style.display = "none";
        }
    }
    if (innings[0].ball == 8) {
        document.getElementById("wide").style.display = "block";
    }
    else {
        setInterval(clear, 6000);
        function clear() {
            let targetTwo = document.getElementById("wide");
            targetTwo.style.display = "none";
        }
    }
    if (innings[0].ball == 10) {
        document.getElementById("noball").style.display = "block";
    }
    else {
        setInterval(clear, 7000);
        function clear() {
            let targetThree = document.getElementById("noball");
            targetThree.style.display = "none";
        }
    }
}



let a = document.createElement("h4");
const display = (value) => {
    let b = document.createTextNode(value);
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    a.appendChild(b);
    document.getElementById("bat-first").appendChild(a);

    document.getElementById("toss").style.display = "none";
}

