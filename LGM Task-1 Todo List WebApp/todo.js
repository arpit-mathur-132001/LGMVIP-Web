// get elements input, button and list
const addButton=document.querySelector("#add");
const input=document.querySelector("#todo");
const list=document.querySelector("#list");

// On click add todo and a delete button
addButton.addEventListener("click",()=>{
  // Extract input
  const todo=input.value;
  if(todo.trim()===""){
    return;
  }

  // create new todo(li) and set its inner text to extracted input and make input empty
  const newLI=document.createElement("li");
  newLI.innerText=todo;
  input.value="";

  // create a span for delete button and create a new text with code of multiplication sign
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  // add a class to span with name "close" and appendchild new text to span 
  span.className = "close";
  span.appendChild(txt);

  // appendchild span to li(todo) and prepend todo to ul(list) so that new todo appears top
  newLI.appendChild(span);
  list.prepend(newLI);

  // get all elements with class "close" and run a loop
  // this is span and on click on span set display of its parent which is li(todo) to none
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
})

// On Enter in input field, trigger add button 
input.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    document.getElementById("add").click();
  }
})

// On click on any li, add a checked mark and line-through the todo
var check = document.querySelector('ul');
check.addEventListener('click', function(ev) {
  // if click is on any li, then add checked class to that li only
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});