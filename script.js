function myList(){
    var item = document.getElementById("inputlist").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("mylists").appendChild(newItem)
}