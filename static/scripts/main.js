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

const dropZone = document.querySelector("#dropZone");
const animalsContainer = document.querySelector("#animals");
const animals = document.querySelectorAll(".animal-img");
const dropBoxes = document.querySelectorAll(".drop-box");

if (dropZone) {
    function allowDrop(event) {
        event.preventDefault();
    }

    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    function drop(event) {
        console.log(event);
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        console.log(data);
        event.target.appendChild(document.getElementById(data));
    }

    // dropBoxes.forEach(box => {
    //     box.addEventListener("ondrop", e => {
    //         drop(e);
    //         console.log(e);
    //     });

    //     box.addEventListener("ondragover", e => {
    //         allowDrop(e);
    //     });
    // });

    // animalsContainer.addEventListener("ondrop", e => {
    //     drop(e);
    // });

    // animalsContainer.addEventListener("ondragover", e => {
    //     allowDrop(e);
    // });

    // animals.forEach(box => {
    //     box.addEventListener("ondragstart", e => {
    //         drag(e);
    //     });
    // });
}

const wordsList = document.querySelector(".words-container .words");
const wordsForm = document.querySelector(".words-form");
const inputWordEl = document.querySelector(".input-word");
if (wordsForm) {
    wordsForm.addEventListener("submit", e => {
        e.preventDefault();

        const inputWord = inputWordEl.value.trim();
        const placeholder = document.createElement("li");
        placeholder.textContent = inputWord;
        placeholder.style.fontStyle = "capitalize";
        placeholder.draggable = "true";
        placeholder.id = inputWord;

        placeholder.addEventListener("ondragstart", function (event) {
            drop(event);
        });

        // placeholder.addEventListener("ondragover", function (event) {
        //     allowDrop(placeholder);
        //     console.log(12321321);
        // });

        wordsList.appendChild(placeholder);

        inputWord.innerHTML = "";
    });
}
