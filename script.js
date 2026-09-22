
/*
const button = document.getElementById("Berlin")

button.onclick = function() {
    alert("TEst")
};

const button2 = document.getElementById("Brandenburg")

button2.onclick = function() {
    alert("TEst")
};

const button3 = document.getElementById("Hamburg")

button3.onclick = function() {
    alert("TEst")
};

const button4 = document.getElementById("Niedersachsen")

button4.onclick = function() {
    alert("TEst")
};

const button5 = document.getElementById("Hessen")

button5.onclick = function() {
    alert("TEst")
};

const button6 = document.getElementById("Mecklenburg-Vorpommern")

button6.onclick = function() {
    alert("TEst")
};

const button7 = document.getElementById("Schleswig-Holstein")

button7.onclick = function() {
    alert("TEst")
};

const button8 = document.getElementById("Rheinland-Pfalz")

button8.onclick = function() {
    alert("TEst")
};

const button9 = document.getElementById("Baden-Württemberg")

button9.onclick = function() {
    alert("TEst")
};

const button10 = document.getElementById("Saarland")

button10.onclick = function() {
    alert("TEst")
};

const button11 = document.getElementById("Bayern")

button11.onclick = function() {
    alert("TEst")
};

const button12 = document.getElementById("Thüringen")

button12.onclick = function() {
    alert("TEst")
};

const button13 = document.getElementById("Nordrhein-Westfalen")

button13.onclick = function() {
    alert("TEst")
};

const button14 = document.getElementById("Sachsen")

button14.onclick = function() {
    alert("TEst")
};

const button15 = document.getElementById("Sachsen-Anhalt")

button15.onclick = function() {
    alert("TEst")
};

const button16 = document.getElementById("Schleswig-Holstein")

button16.onclick = function() {
    alert("TEst")
};
*/

/*const button = document.getElementById("Berlin")
const button1 = document.getElementById("Brandenburg")
const button2 = document.getElementById("Hamburg")
const button3 = document.getElementById("Niedersachsen")
const button4 = document.getElementById("Hessen")
const button5 = document.getElementById("Mecklenburg-Vorpommern")
const button6 = document.getElementById("Schleswig-Holstein")
const button7 = document.getElementById("Rheinland-Pfalz")
const button8 = document.getElementById("Baden-Würtemberg")
const button9 = document.getElementById("Saarland")
const button10 = document.getElementById("Bayern")
const button11 = document.getElementById("Thüringen")
const button12 = document.getElementById("Nordrhein-Westfalen")
const button13 = document.getElementById("Sachsen")
const button14 = document.getElementById("Sachsen-Anhalt")
const button15 = document.getElementById("Schleswig-Holstein")*/

let score = 0;
let richtig = 0;
let falsch = 0;

const richtigCountElement = document.getElementById("richtigCount");
const falschCountElement = document.getElementById("falschCount");

function updateScoreboard() {
    richtigCountElement.textContent = richtig;
    falschCountElement.textContent = falsch;
}

const laender = [
    {
        name: "Berlin",
        img: "location/Deutschland_Lage_Berlins.svg",
        id: 1
    },
    {
        name: "Brandenburg",
        img: "location/Deutschland_Lage_von_Brandenburg.svg",
        id: 2
    },
    {
        name: "Hamburg",
        img: "location/Deutschland_Lage_von_Hamburg.svg",
        id: 3
    },
    {
        name: "Niedersachsen",
        img: "location/Deutschland_Lage_von_Niedersachsen.svg",
        id: 4
    },
    {
        name: "Hessen",
        img: "location/Deutschland_Lage_von_Hessen.svg",
        id: 5
    },
    {
        name: "Mecklenburg-Vorpommern",
        img: "location/Deutschland_Lage_von_Mecklenburg-Vorpommern.svg",
        id: 6
    },
    {
        name: "Schleswig-Holstein",
        img: "location/Deutschland_Lage_von_Schleswig-Holstein.svg",
        id: 7
    },
    {
        name: "Rheinland-Pfalz",
        img: "location/Deutschland_Lage_von_Rheinland-Pfalz.svg",
        id: 8
    },
    {
        name: "Baden-Württemberg",
        img: "location/Deutschland_Lage_von_Baden-Württemberg.svg",
        id: 9
    },
    {
        name: "Saarland",
        img: "location/Deutschland_Lage_des_Saarlandes.svg",
        id: 10
    },
    {
        name: "Bayern",
        img: "location/Deutschland_Lage_von_Bayern.svg",
        id: 11
    },
    {
        name: "Thüringen",
        img: "location/Deutschland_Lage_von_Thüringen.svg",
        id: 12
    },
    {
        name: "Nordrhein-Westfalen",
        img: "location/Deutschland_Lage_von_Nordrhein-Westfalen.svg",
        id: 13
    },
    {
        name: "Sachsen",
        img: "location/Deutschland_Lage_von_Sachsen.svg",
        id: 14
    },
    {
        name: "Sachsen-Anhalt",
        img: "location/Deutschland_Lage_von_Sachsen-Anhalt.svg",
        id: 15
    },
    {
        name: "Bremen",
        img: "location/Deutschland_Lage_von_Bremen.svg",
        id: 16
    }
];

/*document.getElementById("reloadBtn").onclick = () => */
    currentButton(Math.floor(Math.random()*laender.length))






function currentButton(i) {

    
    const image = document.getElementById("Question")
    image.src = laender[i].img
    image.alt = laender[i].name

    for (let j = 1; j <= 16; j++) {
    const button = document.getElementById("Picture" + j);
    button.onclick = function() {

        if (j == laender[i].id) {

            document.getElementById("body") .style.backgroundColor = "green"
            setTimeout(() => {
                document.getElementById("body") .style.backgroundColor = "white";
            }, 1000);

            richtig++;
            updateScoreboard();
            currentButton(Math.floor(Math.random()*laender.length));

         } else {

            document.getElementById("body") .style.backgroundColor = "red"
            setTimeout(() => {
                document.getElementById("body") .style.backgroundColor = "white";
            }, 1000);

            falsch++;
            updateScoreboard();
        }

    };
        
    }
    
    
}

