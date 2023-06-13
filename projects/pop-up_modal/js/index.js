const exitBtn = document.getElementById("exit-button")
const popupBtn = document.getElementById("popup-button")
const popupModal = document.querySelector("#popup-modal")

popupBtn.addEventListener("click", () => {
    popupModal.style.display = "flex"
})

window.addEventListener("click", (e) => {
    if (e.target === popupModal){
        popupModal.style.display = "none"
    }
})

exitBtn.addEventListener("click", () => {
    popupModal.style.display = "none"
})