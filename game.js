var seconds = document.getElementById("timer").textContent;
const bubblesContainer = document.getElementById("bubbles-container");
const paper = document.getElementById("paper");
const bamboo = document.getElementById("bamboo");
const jute = document.getElementById("jute");
const cotten = document.getElementById("cotten");
const animalwaste = document.getElementById("animalwaste");
const plantwaste = document.getElementById("plantwaste");
const kitchenwaste = document.getElementById("kitchenwaste");
const recycledmetal = document.getElementById("recycledmetal");
const backButton = document.getElementById("go-back");
const playButton = document.getElementById("play-now");
const rulesButton = document.getElementById("how-to-play");
const gameButtons = document.getElementById("game-buttons");
const instructions = document.getElementById("instructions");
var score = 0;

makeBubbles(20);

function makeBubbles(number) {
    for (let i = 1; i <= number; i++) {
        makeBubble(i);
    }
    for (let i = 1; i <= number; i++) {
        let bubble = document.getElementById(`bubble${i}`);
        bubble.style.left = `${getRandomInt(0, 100)}%`;
        bubble.style.animationDuration = `${getRandomInt(30, 100) / 10}s`;  
        bubble.onclick = (evt) => {
            bubble.style.visibility = "hidden";
            playSound();
            document.getElementById("score").innerHTML = score;
            setTimeout((evt) => {
                bubble.style.visibility = "visible";
                location.href="./gameover.html";    
            }, 3000);
        };
    }
}

paper.onclick = (evt) => {
    paper.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        paper.style.visibility = "visible";
    }, 3000);
};

bamboo.onclick = (evt) => {
    bamboo.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        bamboo.style.visibility = "visible";
    }, 3000);
};

jute.onclick = (evt) => {
    jute.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        jute.style.visibility = "visible";
    }, 3000);
};

cotten.onclick = (evt) => {
    cotten.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        cotten.style.visibility = "visible";
    }, 3000);
};

animalwaste.onclick = (evt) => {
    animalwaste.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        animalwaste.style.visibility = "visible";
    }, 3000);
};

plantwaste.onclick = (evt) => {
    plantwaste.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        plantwaste.style.visibility = "visible";
    }, 3000);
};

kitchenwaste.onclick = (evt) => {
    kitchenwaste.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        kitchenwaste.style.visibility = "visible";
    }, 3000);
};

recycledmetal.onclick = (evt) => {
    recycledmetal.style.visibility = "hidden";
    playSound();
    score++;
    sessionStorage.setItem("score",score);
    document.getElementById("score").innerHTML = score;
    setTimeout((evt) => {
        recycledmetal.style.visibility = "visible";
    }, 3000);
};

function playSound() {
    console.log("sound");
    document.getElementById("play").play();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}

function makeBubble(i) {
    bubblesContainer.innerHTML += `<div class="bubble" id=bubble${i}></div>`;
}

var timer = setInterval(function () {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds == 0) {
        clearInterval(timer);
        endGame();
    }
}, 1000);



function endGame() {
    document.getElementById("bubbles-container").style.display = "none";
    document.getElementById("game-over").style.display = "flex";
    document.getElementById("final-score").textContent = score;
    document.getElementById("play-again").onclick = () => {
        console.log("foo");
        location.href = "./game.html";
    };
}

