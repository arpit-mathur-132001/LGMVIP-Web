const viewScreen=document.querySelector("#viewScreen");
const square=document.getElementById("square");
const squareRoot=document.getElementById("squareRoot");
const button=document.getElementsByTagName("button");
const ul=document.getElementById("ul");

viewScreen.focus();
viewScreen.value=0;

document.onmousedown = (e) => {
  e.preventDefault();
}

function onOneByX(){
  viewScreen.value=1/viewScreen.value;
}

function onSquare(){
  viewScreen.value=viewScreen.value**2;
}

function onSquareRoot(){
  viewScreen.value=Math.sqrt(viewScreen.value);
}

function invert(){
  viewScreen.value=-viewScreen.value
}

function backSpace(){
  viewScreen.value=viewScreen.value.slice(0,-1);
  if(viewScreen.value===""){
    viewScreen.value="0";
  }
}

function onCE(){
  viewScreen.value=0;
}

function clearZeros(){
  if(viewScreen.value==="0"){
    viewScreen.value="";
  }
}

function appendValue(num){
  viewScreen.value=viewScreen.value+num;
}

function resultPercentage(){
  let exp=viewScreen.value;
  
}

function result(){
  let expression=viewScreen.value;
  if(expression){
    viewScreen.value=eval(expression);
  }
  let newExp=document.createElement("LI");
  newExp.className="newExp";
  newExp.innerText=expression+"=";
  let newRes=document.createElement("LI");
  newRes.className="newRes";
  newRes.innerText=viewScreen.value;
  let newBR=document.createElement("BR");

  ul.prepend(newRes);
  ul.prepend(newExp);
  ul.prepend(newBR);
}

viewScreen.addEventListener("keypress",function(event){
  if(viewScreen.value==="0"&&event.key!=="."){
    viewScreen.value="";
  }
  if(event.key==="%"){
    event.preventDefault();
    document.getElementById("percent").click();
  }else if(event.key==="/"){
    event.preventDefault();
    document.getElementById("divide").click();
  }else if(event.key==="7"){
    event.preventDefault();
    document.getElementById("seven").click();
  }else if(event.key==="8"){
    event.preventDefault();
    document.getElementById("eight").click();
  }else if(event.key==="9"){
    event.preventDefault();
    document.getElementById("nine").click();
  }else if(event.key==="*"){
    event.preventDefault();
    document.getElementById("multiply").click();
  }else if(event.key==="4"){
    event.preventDefault();
    document.getElementById("four").click();
  }else if(event.key==="5"){
    event.preventDefault();
    document.getElementById("five").click();
  }else if(event.key==="6"){
    event.preventDefault();
    document.getElementById("six").click();
  }else if(event.key==="-"){
    event.preventDefault();
    document.getElementById("minus").click();
  }else if(event.key==="1"){
    event.preventDefault();
    document.getElementById("one").click();
  }else if(event.key==="2"){
    event.preventDefault();
    document.getElementById("two").click();
  }else if(event.key==="3"){
    event.preventDefault();
    document.getElementById("three").click();
  }else if(event.key==="+"){
    event.preventDefault();
    document.getElementById("add").click();
  }else if(event.key==="0"){
    event.preventDefault();
    document.getElementById("zero").click();
  }else if(event.key==="."){
    event.preventDefault();
    document.getElementById("decimal").click();
  }else if(event.key==="="){
    event.preventDefault();
    document.getElementById("evaluate").click();
  }else if(event.key==="Enter"){
    event.preventDefault();
    document.getElementById("evaluate").click();
  }else{
    event.preventDefault();
    if(viewScreen.value==="0"||viewScreen.value===""){
      viewScreen.value="0";
    }
  }
});

viewScreen.addEventListener("keydown",function(event){
  if(event.key==="Backspace"){
    event.preventDefault();
    document.getElementById("back").click();
  }
})