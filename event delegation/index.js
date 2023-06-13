const sportsContainer = document.getElementById("sports")
const sport = document.createElement("li")

sportsContainer.addEventListener("click", (e) => {
    if (e.target.matches("li")){
        console.log(e.target.innerText + " is clicked")

        const target = e.target

        if(target.style.backgroundColor === "grey"){
            target.style.backgroundColor = "inherit"
        }else{
            target.style.backgroundColor = "grey"
        }
    }
})

sport.innerText = "Rugby"
sport.classList.add("container")
sportsContainer.appendChild(sport)