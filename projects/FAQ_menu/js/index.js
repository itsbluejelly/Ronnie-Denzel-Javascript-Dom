const questionTexts = document.querySelectorAll("#question-text")
const hiddenTexts = document.querySelectorAll("#hidden-text")

for (let i = 0; i < questionTexts.length; i++){
    questionTexts[i].addEventListener("click", () => {
        questionTexts[i].classList.toggle("shown")
        hiddenTexts[i].classList.toggle("shown")
    })
}