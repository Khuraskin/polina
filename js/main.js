//carousel

const prev = document.getElementById ("carousel__prev"),
next = document.getElementById ("carousel__next"),
slides = document.querySelectorAll (".carousel__foto");

let index = 0;

 const activeSlide = n => {   
     for(slide of slides) {
         slide.classList.remove ("carousel__foto--active");
    }
    slides[n].classList.add ("carousel__foto--active");
 }

const prepareCurrentSlide = ind => {
    activeSlide(ind);   
}

 const nextSlide = () => {
     if(index == slides.length - 1) {
         index = 0; 
         prepareCurrentSlide(index);       
     }else {
        index ++;
        prepareCurrentSlide(index);           
    }
 }

 const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index);   
    }else {
       index --;
       prepareCurrentSlide(index);   
   }
}

 next.addEventListener("click", nextSlide);
 prev.addEventListener("click", prevSlide);