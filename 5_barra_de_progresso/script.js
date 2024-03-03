const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

function updateProgressBar(){
    progressBar.style.width = "%";
}

function nextStep(){
    progress += 10;
    if(progress > 100) progress = 100;
    updateProgressBar();
}

nextBtn.addEventListener("click", nextStep);