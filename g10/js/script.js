/*my picture */
let myPic=document.getElementById("myPic");


function f1()
{ if(myPic.clientWidth <= 192){
    myPic.style.width="15rem";
    myPic.style.height="15rem";
    myPic.style.border="5px solid #FF8FB1";
}
else if(myPic.clientWidth <= 320){
  myPic.style.width="22rem";
  myPic.style.height="22rem";
  myPic.style.border="5px solid #FF8FB1";
}
  
}
function f2(){
  if(myPic.clientWidth <= 230){
    myPic.style.width="12rem";
    myPic.style.height="12rem";
    myPic.style.border="none";
}
else if(myPic.clientWidth <= 342){
  myPic.style.width="20rem";
  myPic.style.height="20rem";
  myPic.style.border="none";
}
}
/*my picture */
/*my contact */

let phone=document.getElementById("phone");
let email=document.getElementById("email");
let face=document.getElementById("face");
let insta=document.getElementById("insta");

function f3(x){
  x.style.borderBottom=" 3px solid #FF8FB1";
 
 

}
function f4(x){
 
  x.style.borderBottom=" none";
 
}
/*my contact */


/*navbar active change */
function f7(){
 let navbar=document.querySelector(".navbar").querySelectorAll("a");
 navbar.forEach(ele=>{
  ele.addEventListener("click",function(){
    navbar.forEach(nav=>nav.classList.remove("active"))
    this.classList.add("active");
    })

 });
}
f7();
/*navbar active change */
// let content=document.querySelector(".content");
// let about=document.getElementById("about");
// let education=document.getElementById("education");
// let knowledge=document.getElementById("knowledge");
// let skills=document.getElementById("skills");
// let language=document.getElementById("language");
// let interest=document.getElementById("interest");
// let projects=document.getElementById("projects");

// function fAbout(x){
//   about.style.visibility="visible";
//   education.style.visibility="hidden";
//   knowledge.style.visibility="hidden";
//   projects.style.visibility="hidden";
//   language.style.visibility="hidden";
//   interest.style.visibility="hidden";
//   content.style.height="25rem";


// }
// function fEducation(){
//   education.style.visibility="visible";
//   about.style.visibility="hidden";
//   knowledge.style.visibility="hidden";
//   projects.style.visibility="hidden";
//   language.style.visibility="hidden";
//   interest.style.visibility="hidden";
//   content.style.height="25rem";

// }
// function fProjects(){
//   projects.style.visibility="visible";
//   about.style.visibility="hidden";
//   education.style.visibility="hidden";
//   knowledge.style.visibility="hidden";
//   language.style.visibility="hidden";
//   interest.style.visibility="hidden";  
//   content.style.height="75rem";
  

//   }
 

// function fKnowledge(){
//   projects.style.visibility="hidden";
  
//   knowledge.style.visibility="visible";
//   about.style.visibility="hidden";
//   education.style.visibility="hidden";
//   content.style.height="55rem";
 
//   language.style.visibility="hidden";
//   interest.style.visibility="hidden";
// }
// function fLanguage(){
//   projects.style.visibility="hidden";
 
//   about.style.visibility="hidden";
//   education.style.visibility="hidden";
//   knowledge.style.visibility="hidden";
//   language.style.visibility="visible";
//   interest.style.visibility="hidden";  
//   content.style.height="30rem";

// }
// function fInterest(){
//   projects.style.visibility="hidden";
 
//   about.style.visibility="hidden";
//   education.style.visibility="hidden";
//   knowledge.style.visibility="hidden";
//   language.style.visibility="hidden";
//   interest.style.visibility="visible";  
//   content.style.height="25rem";

// }

/**project alert */
function projectH1(){
  let alert=document.getElementById("alertt1");
  alert.style.visibility="visible";
  
  setTimeout(()=>{
    alert.style.visibility="hidden";
  },2000);
}
function projectH2(){
  let alert=document.getElementById("alertt2")
  alert.style.visibility="visible";

  setTimeout(()=>{
    alert.style.visibility="hidden";
  },2000);
}
function projectH3(x){
  let alert=document.getElementById("alertt3");
  alert.style.visibility="visible";
   
  setTimeout(()=>{
    alert.style.visibility="hidden";
  },2000);         
  
}

// function c(){
//   document.querySelector(".slider2").style.visibility="visible";
//   document.querySelector(".slider3").style.visibility="visible";
//   content.style.height="100rem";
//   document.querySelector(".more").style.visibility="hidden";
// }
