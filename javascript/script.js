// declaration des variables interessante.
const cons=document.getElementsByClassName("carousel__title");
const slideElement=document.getElementsByClassName("carousel__element");
const main=document.querySelector(".carousel__main");
const slide=document.querySelector(".carousel__content");
const nextBtn=document.querySelector(".carousel__direction--right");
const prevBtn=document.querySelector(".carousel__direction--left");
const navlines=document.querySelector(".carousel__point-direction");
const lines=document.querySelector(".carousel__point");


// creating the mecanism to move the slide.
function moveSlide(currentElement,targetElement,targetElementIndex){
   slide.style.transform='translatex(-'+100*targetElementIndex+'%'+')';
   currentElement.classList.remove("current");
   targetElement.classList.add("current");
}
// creating a convertor function which will be taking in parameter the name of the class to be changed in a proper array
function converter(toBeConverted){
   const arrayElmenent=[];
   for (let element of toBeConverted){
      arrayElmenent.push(element);
  }
  return arrayElmenent;
}
// next button click listener created
nextBtn.addEventListener("click", function(){
   const currentElement=main.querySelector(".current");
   const nextElement=currentElement.nextElementSibling;
   const nextTargetIndex=converter(slideElement).findIndex(slide=> slide===nextElement);
   console.log(nextTargetIndex);
   moveSlide(currentElement,nextElement,nextTargetIndex);
});
prevBtn.addEventListener("click", function(){
   const currentElement=main.querySelector(".current");
   const prevElement=currentElement.previousElementSibling;
   const prevTargetIndex=converter(slideElement).findIndex(slide=> slide===prevElement);
   moveSlide(currentElement,prevElement,prevTargetIndex);
   
});
navlines.addEventListener("click",function(e){
   const currentDot=navlines.querySelector(".carousel__point--current");
   const targetElement=e.target.closest('span');
   const prevdot=currentDot.previousElementSibling;
   console.log(prevdot);
   targetElement.classList.add("carousel__point--current");
   currentDot.classList.remove("carousel__point--current");
   prevBtn.classList.remove('carousel__point--current');
});