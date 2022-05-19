const enroll=document.querySelector("#add");
const clear=document.querySelector("#clear");
const studentName=document.querySelector("#name");
const students=document.querySelector("#students");
const studentEmail=document.querySelector("#email");
const studentWeb=document.querySelector("#website");
const studentImg=document.querySelector("#img");

enroll.addEventListener("click",()=>{
  const addName=studentName.value;
  if(addName.trim()===""){
    return;
  }

  let gender="";
  if(document.getElementById("male").checked){
    gender="male";
    document.getElementById("male").checked=false;
  }else if(document.getElementById("female").checked){
    gender="female";
    document.getElementById("female").checked=false;
  }

  const addEmail=studentEmail.value;
  if(addEmail.trim()===""){
    return;
  }

  const addWebsite=studentWeb.value;
  if(addWebsite.trim()===""){
    return;
  }

  let skill=[];
  if(document.getElementById("java").checked){
    skill.push("Java");
    document.getElementById("java").checked=false;
  }if(document.getElementById("html").checked){
    skill.push("HTML");
    document.getElementById("html").checked=false;
  }if(document.getElementById("css").checked){
    skill.push("CSS");
    document.getElementById("css").checked=false;
  }

  const newTR=document.createElement("TR");
  newTR.setAttribute("class","data");
  const newTD1=document.createElement("TD");
  newTD1.setAttribute("class","description")
  newTD1.innerHTML="<b>"+addName+"</b>"+"<br>"+gender+"<br>"+addEmail+"<br>"+"<a href='"+addWebsite+"'>"+addWebsite+"</a>"+"<br>"+skill;
  newTR.appendChild(newTD1);
  const newTD2=document.createElement("TD");
  newTD2.innerHTML=`<img id="image" src="${studentImg.value}" onerror="this.src='https://img.icons8.com/ios-glyphs/344/user--v1.png'">`;
  newTR.appendChild(newTD2);
  students.appendChild(newTR);
  studentName.value="";
  studentEmail.value="";
  studentWeb.value="";
  studentImg.value="";
})

clear.addEventListener("click",()=>{
  studentName.value="";
  studentEmail.value="";
  studentWeb.value="";
  studentImg.value="";
  let hide=document.getElementsByClassName("data");
  for(let i=0;i<hide.length;i++){
    hide[i].style.display="none";
  }
  document.getElementById("male").checked=false;
  document.getElementById("female").checked=false;
  document.getElementById("java").checked=false;
  document.getElementById("html").checked=false;
  document.getElementById("css").checked=false;
})