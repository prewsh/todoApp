
const todos = []
const form = document.getElementById('listform')



const add = function(e){
    e.preventDefault()
    let item = document.getElementById("inputlist").value
    todos.push(item) 
    display()
    document.getElementById("inputlist").value = ""
}

const display = function(){
    let button = document.createElement("button")
    let newItem = document.createElement("li")
    let orderedList = document.getElementById("mylists")
    
    todos.forEach(function(todo){
        newItem.textContent = todo
        button.textContent = "X"
        button.addEventListener("click",function(){
            newItem.remove()
        })

        newItem.appendChild(button)
        orderedList.appendChild(newItem)
    })

}

form.addEventListener('submit',add)