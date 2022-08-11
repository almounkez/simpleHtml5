let trans =document.querySelector(".trans")
let spans =document.querySelectorAll(".progress span")


window.addEventListener('scroll', ()=>{
    if(scrollY >= trans.offsetTop -100){
        
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
}) 