const itemInput = document.getElementById("item-input")
const addItemBtn = document.getElementById("add-item-button")
const listOfItems = document.querySelector("ul")

let cancelItemBtn = null
let removeItemBtn = null

function addItem(){
    const li = document.createElement("li")
    const p = document.createElement("p")
    const buttonsContainer = document.createElement("div")
    cancelItemBtn = document.createElement("button")
    removeItemBtn = document.createElement("button")

    if (itemInput.value === ""){
        alert("Enter a Task First")
    }else{
        p.textContent = itemInput.value

        cancelItemBtn.classList.add("listed-item-buttons")
        cancelItemBtn.setAttribute("id", "cancel-item-button")
        cancelItemBtn.setAttribute("onclick", "cancelItem(this)")
        cancelItemBtn.innerHTML = "&#10003"
        
        removeItemBtn.classList.add("listed-item-buttons")
        removeItemBtn.setAttribute("id", "remove-item-button")
        removeItemBtn.setAttribute("onclick", "removeItem(this)")
        removeItemBtn.innerHTML = "&#128465"

        buttonsContainer.classList.add("buttons-container")

        buttonsContainer.appendChild(cancelItemBtn)
        buttonsContainer.appendChild(removeItemBtn)
        
        li.appendChild(p)
        li.appendChild(buttonsContainer)
        
        listOfItems.appendChild(li)
    }

    itemInput.value = ""
}

function cancelItem(element){
    element.parentElement.previousElementSibling.style.textDecoration = 'line-through'
}

function removeItem(element){
    element.parentElement.parentElement.remove()
}

addItemBtn.addEventListener("click", () => addItem())