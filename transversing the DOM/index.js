const unorderedList = document.querySelector("ul")
const listItem = document.createElement("li")

listItem.innerText = 'x-men'
listItem.classList.add("list-item")
unorderedList.append(listItem)

listItem.remove()

console.log(unorderedList)