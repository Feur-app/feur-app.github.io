const texts = document.querySelectorAll(".text");
const dotsl = document.querySelector(".dotss");

let progress1 = 0;

updateText(texts[0], progress1, 90);

function updatePercent(text, percent) {
    if (percent % 8 === 0) {
        dotsl.innerHTML += ".";
    }
}

function updateText(text, progress, interval, limit) {
    const percent = Math.floor(progress / interval * 100);
    updatePercent(text, percent);
    if (progress < interval) {
        progress++;
        setTimeout(() => updateText(text, progress, interval), 30);
    } else {
        text.innerHTML += " ✓";
    }
}

setTimeout(() => {
    const dots = texts[0].querySelectorAll(".dots");
    dots.forEach(dot => dot.classList.add("hidden"));
    texts[0].classList.add('opacity');
    texts[1].classList.remove("hidden");

}, 4000);

setTimeout(() => {
    texts[1].innerHTML += " ";
}, 8000);


