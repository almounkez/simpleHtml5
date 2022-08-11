
$("figure").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
//..................
window.onload=function(){
  document.getElementById("download")
  .addEventListener("click",()=>{
  const resume= this.document.getElementById("resume");
  console.log(resume);
  console.log(window);
  html2pdf().from(resume).save();
  
  })
}



//................................................................


// const banner=document.getElementsByClassName('banner')[0];
// const blocks=document.getElementsByClassName('blocks');
// for(var i=1;i<400;i++)
// {
//     banner.innerHTML+="<div class='blocks'></div>";
//     const duration =math.random()*5;
//     blocks[i].style.animationDuration=duration+'s';
// }


//...........................................
