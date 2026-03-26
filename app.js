let input = document.querySelector("#input-add")
let btn = document.querySelector("#add")
let ul = document.querySelector("#list-container")
let form = document.querySelector("form")
let search = document.querySelector("#searchform input");
btn.addEventListener("click", function addTask() {
     if(input.value === ''){
          alert("You Must Write Something")
     }
     else {
          let li = document.createElement("li")
          li.textContent = input.value
          ul.appendChild(li)
          let edit = document.createElement("span")
          edit.textContent = "Edit"
          li.appendChild(edit)
          let span = document.createElement("span")
          span.textContent = "Delete"
          li.appendChild(span)
     }
     input.value = ''
     saveData()
})
ul.addEventListener("click", function(e){
     if (e.target.tagName === "LI"){
          e.target.classList.toggle("checked")
          saveData()
     }
     else if (e.target.tagName === "SPAN" && e.target.textContent === "Delete") {
          e.target.parentElement.remove()
          saveData()
     }
     else if (e.target.tagName === "SPAN" && e.target.textContent === "Edit") {
          e.target.parentElement.innerHTML = `<input type = "text" value = ${e.target.parentElement.innerText}><span style = "background-color: lightgreen">Save</span><span>Delete</span>`
          let save = document.createElement("span")
          save.textContent = "Save"
          save.style.background = "lightgreen"
          let span = document.createElement("span")
          span.textContent = "Delete"
          e.target.parentElement.children[1].remove()
          e.target.parentElement.children[0].remove()
          saveData()
     }
     else if (e.target.tagName === "SPAN" && e.target.textContent === "Save") {
          let li = document.createElement("li")
          li.textContent = e.target.parentElement.children[0].value
          ul.appendChild(li)
          let edit = document.createElement("span")
          edit.textContent = "Edit"
          li.appendChild(edit)
          let span = document.createElement("span")
          span.textContent = "Delete"
          li.appendChild(span)
          e.target.parentElement.remove();
          saveData()
     }
},false)

function saveData() {
     localStorage.setItem('data', ul.innerHTML)
}
function showData() {
     ul.innerHTML = localStorage.getItem("data")
}
showData()
search.addEventListener("keyup", function (e) {
     let term = search.value.trim().toLowerCase();
     let items = ul.children;
     for (let i = 0; i < items.length; i++) {
        if(!items[i].textContent.toLowerCase().includes(term)){
            items[i].classList.add("d-none");
        }
        else{
            items[i].classList.remove("d-none");
        }
    }
} 
)