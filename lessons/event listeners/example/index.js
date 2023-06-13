const revealBtn = document.getElementById("reveal-button")
const hiddenContent = document.getElementById("hidden-content")

function showText(button, text){
    if (text.classList.contains("hidden")){
        button.innerText = "Reveal Less"
        text.classList.remove("hidden")
    }else{
        button.innerText = "Reveal More"
        text.classList.add("hidden")
    }
}

revealBtn.addEventListener("click", ()=> showText(revealBtn, hiddenContent))