let img1=document.getElementById('img1')
let btn =document.getElementById('btn1')




window.addEventListener('onscroll',  ()=>{
    if(scrollY <= 200){
        btn.style.display ='none'
    }
    else{
        btn.style.display = 'block'
    }
});  
btn.onclick = function (){
    scroll({
        top:0,
        behavior:'smooth'
    })
}