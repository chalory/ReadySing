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

    recognition.addEventListener("end", recognition.stop);

    micBtn.addEventListener("click", e => {
        pulse.classList.toggle("show");

        speech = !speech;
        console.log(speech);

        if (speech) {
            recognition.start();
        } else {
            recognition.abort();
            recognition.stop();
        }
    });
}

const warmupVid1 = document.querySelector("#warmup-vid");
if (warmupVid1) {
}
