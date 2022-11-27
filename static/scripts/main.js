const timerContainer = document.querySelector(".meditation .timer");
const timerContentEl = document.querySelector(".meditation .timer .value");
if (timerContainer) {
    let timeleft = 59;
    let downloadTimer = setInterval(() => {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
        }
        timerContentEl.textContent = timeleft;
        timeleft -= 1;

        console.log(timeleft);
    }, 1000);

    // <progress value="0" max="10" id="progressBar"></progress>;
}

// ! SPEECH TO TEXT
const speechContainer = document.querySelector("#speech-container");
const micBtn = document.querySelector(".mic-btn");
const pulse = document.querySelector(".pulse-ring");

// const audioCherryBlossom = document.querySelector("#diary-bg-music");

if (speechContainer) {
    let speech = false;

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    const words = document.querySelector(".words");
    words.appendChild(p);

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");

        document.getElementById("p").innerHTML = transcript;
    });

    recognition.addEventListener("end", recognition.start);

    micBtn.addEventListener("click", e => {
        pulse.classList.toggle("show");

        speech = !speech;
        console.log(speech);

        if (speech) {
            document.getElementById("p").innerHTML = "";
            document.getElementById("p").style.display = "block";
            recognition.start();
        } else {
            document.getElementById("p").style.display = "none";
            recognition.abort();
            recognition.stop();
        }
    });
}

const wordsForm = document.querySelector(".words-form");
const submitBtn = document.querySelector("#submitBtn");
const dropZone = document.querySelector("#dropZone");
const animalsContainer = document.querySelector("#animals");
const animals = document.querySelectorAll(".animal-img");
const dropBoxes = document.querySelectorAll(".drop-box");
const draggableItemsList = document.getElementById("draggableItemsList");
const thoughtInput = document.getElementById("thought-input");

submitBtn.addEventListener("click", appendList);

function appendList(e) {
    e.preventDefault();
    let liElement = document.createElement("li");
    let pElement = document.createElement("p");
    pElement.textContent = thoughtInput.value;
    pElement.draggable = "true";
    pElement.id = thoughtInput.value;
    pElement.addEventListener("dragstart", e => {
        console.log(e.target);
        drag(e);
    });

    liElement.appendChild(pElement);
    draggableItemsList.appendChild(liElement);
    thoughtInput.value = "";
}

if (dropZone) {
    function allowDrop(event) {
        event.preventDefault();
    }

    function drag(event) {
        console.log(event.target.id);
        event.dataTransfer.setData("text", event.target.id);
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    }
}

// const wordsList = document.querySelector(".words-container .words");
// const wordsForm = document.querySelector(".words-form");
// const inputWordEl = document.querySelector(".input-word");
// if (wordsForm) {
//     wordsForm.addEventListener("submit", e => {
//         e.preventDefault();

//         const inputWord = inputWordEl.value.trim();
//         const placeholder = document.createElement("li");
//         placeholder.textContent = inputWord;
//         placeholder.style.fontStyle = "capitalized";
//         placeholder.draggable = "true";
//         placeholder.id = inputWord;

//         placeholder.addEventListener("dragstart", function (event) {
//             drop(event);
//         });

//         // placeholder.addEventListener("ondragover", function (event) {
//         //     allowDrop(placeholder);
//         //     console.log(12321321);
//         // });

//         inputWord.innerHTML = "";

//         wordsList.appendChild(placeholder);
//         draggableItemsList.appendChild(placeholder);
//     });
// }
