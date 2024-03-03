const progressBar = document.querySelector(".progress");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

function updateProgressBar(){
    progressBar.style.width = progress + "%";
}


function step(direction){
    if(direction === "next"){
        progress += 10;
        if(progress > 100) progress = 100;
    } else if(direction === "previous"){
        progress -= 10;
        if(progress < 0) progress = 0;
    }

    updateProgressBar();
}

function nextStep(){
    
}

function previousStep(){

}

nextBtn.addEventListener("click", function (){
    step("next");
});
previousBtn.addEventListener("click", function(){
    step("previous");
});