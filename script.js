let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")

let index = 0

function showSlide(i){

slides.forEach(slide=>slide.classList.remove("active"))
dots.forEach(dot=>dot.classList.remove("active"))

slides[i].classList.add("active")
dots[i].classList.add("active")

}

document.querySelector(".next").onclick = ()=>{

index++

if(index>=slides.length){
index=0
}

showSlide(index)

}

document.querySelector(".prev").onclick = ()=>{

index--

if(index<0){
index=slides.length-1
}

showSlide(index)

}

dots.forEach((dot,i)=>{

dot.onclick = ()=>{
index=i
showSlide(index)
}

})

setInterval(()=>{

index++

if(index>=slides.length){
index=0
}

showSlide(index)

},4000)