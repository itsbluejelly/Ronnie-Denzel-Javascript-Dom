const secondDiv = document.getElementById("div-2")
const firstDiv = document.getElementById("div-1")
const linkBtn = document.getElementById("button")

window.addEventListener("click", () => {
    console.log("window clicked")
})

secondDiv.addEventListener("click", () => {
    console.log("div 2 clicked")
})

firstDiv.addEventListener("click", () => {
    console.log("div 1 clicked")
}, {once : true})

linkBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (e.target.textContent !== "clicked"){
        e.target.textContent = "clicked"
    }else{
        e.target.textContent = "Click Me"
    }

    console.log(e.target.textContent)
})