let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")
post.addEventListener("click", TodoPost)
clear.addEventListener("click", TodoClear)
mark.addEventListener("click", TodoMark)
del.addEventListener("click", TodoDel)

function TodoPost(event) {
    event.preventDefault() // SE NECESITA PORQUE ESTA DENTRO DE UN FORMULARIO

    //1 obtener el texto del textArea
    let todo = document.getElementById("todoText").value

    //2 necesito la referencia del place holder
    let list = document.getElementById("todoList")

    let currentList = list.innerHTML
    list.innerHTML = currentList + `<input type = "checkbox" name = "todo" /> ${todo} <br>`
    document.getElementById("todoText").value = ""//borrar el contenido de la caja
}

function TodoClear() {

    let todos = document.getElementsByName("todo")
    //console.log(todos)

    for (let i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }

}

function TodoMark() {
    let todos = document.getElementsByName("todo")
    //console.log(todos)

    for (let i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }

}

function TodoDel() {
    
    let list = document.getElementById("todoList")
    list.innerHTML=""
}