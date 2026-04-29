const fileInput = document.getElementById("fileInput");
const statusText = document.getElementById("status");
const bar = document.getElementById("bar");
const openBtn = document.getElementById("openBtn");

const steps = [
    "Inicializando sistema...",
    "Lendo arquivo...",
    "Injetando arquivo...",
    "Aplicando dados...",
    "Finalizando..."
];

fileInput.addEventListener("change", () => {
    if (!fileInput.files.length) return;

    let progress = 0;
    let step = 0;

    statusText.innerText = steps[0];

    const interval = setInterval(() => {

        progress += Math.random() * 10;
        if (progress > 100) progress = 100;

        bar.style.width = progress + "%";

        if (progress > (step + 1) * (100 / steps.length)) {
            step++;
            if (steps[step]) {
                statusText.innerText = steps[step];
            }
        }

        if (progress >= 100) {
            clearInterval(interval);
            statusText.innerText = "";

const successBox = document.getElementById("successBox");

successBox.classList.remove("hidden");

setTimeout(() => {
    successBox.classList.add("show");
}, 50);

            setTimeout(() => {
                openBtn.classList.remove("hidden");
            }, 600);
        }

    }, 400);
});

openBtn.addEventListener("click", () => {

    openBtn.innerText = "Abrindo...";
    openBtn.disabled = true;

    const intents = [
        // mais completas
        "intent://#Intent;package=com.dts.freefireth;scheme=freefire;end;",
        "intent://#Intent;package=com.dts.freefireth;end;",
        "intent://launch/#Intent;package=com.dts.freefireth;end;",
        "intent://open/#Intent;package=com.dts.freefireth;end;",
        
        // variações de scheme (alguns devices aceitam)
        "intent://freefire/#Intent;package=com.dts.freefireth;end;",
        "intent://game/#Intent;package=com.dts.freefireth;end;"
    ];

    let i = 0;
    let opened = false;

    function tryOpen() {
        if (i >= intents.length || opened) return;

        window.location.href = intents[i];
        i++;

        setTimeout(tryOpen, 700);
    }

    tryOpen();

    // fallback inteligente
    const start = Date.now();

    setTimeout(() => {
        if (Date.now() - start < 2500) {
            openBtn.innerText = "Abrir Free Fire";
            openBtn.disabled = false;
        } else {
            opened = true;
        }
    }, 2000);
});

