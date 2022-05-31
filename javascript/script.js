// declaration des variables interessante.
const carouselMenuContainer=document.querySelector(".carousel__menuContainer");
const carouselMenuContent=document.querySelector(".carousel__menu-content");
const slideElement=document.getElementsByClassName("carousel__element");
const main=document.querySelector(".carousel__main");
const slide=document.querySelector(".carousel__content");
const nextBtn=document.querySelector(".carousel__direction--right");
const prevBtn=document.querySelector(".carousel__direction--left");
const navlines=document.querySelector(".carousel__point-direction");
const lines=document.querySelectorAll(".carousel__point");
const textMenu=document.querySelector(".carousel__menuItems")
const menu=document.querySelector(".carousel__menu");
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

function updateDots(targetElement,currentDot){
   targetElement.classList.add("carousel__point--current");
   currentDot.classList.remove("carousel__point--current");
   if (targetElement==null){
      targetElement.classList.add("current");
   }
}
// next button click listener created
nextBtn.addEventListener("click", function(e){
   const currentDot=navlines.querySelector(".carousel__point--current");
   const nextDot=currentDot.nextElementSibling;
   const currentElement=main.querySelector(".current");// find the current elment on which we are
   const nextElement=currentElement.nextElementSibling;// create the next element simbling
   const nextTargetIndex=converter(slideElement).findIndex(slide=> slide===nextElement);// find a target index 
   moveSlide(currentElement,nextElement,nextTargetIndex);
   updateDots(nextDot,currentDot);
   
});
prevBtn.addEventListener("click", function(e){
   const currentDot=navlines.querySelector(".carousel__point--current");
   const prevDot=currentDot.previousElementSibling;
   const currentElement=main.querySelector(".current");
   const prevElement=currentElement.previousElementSibling;
   const prevTargetIndex=/* this is an array*/converter(slideElement).findIndex(slide=> slide===prevElement);
   moveSlide(currentElement,prevElement,prevTargetIndex);
   updateDots(prevDot,currentDot);
   
  
   
});
navlines.addEventListener("click",function(e){
   const currentElement=main.querySelector(".current");
   const currentDot=navlines.querySelector(".carousel__point--current");
   const targetElement=e.target.closest('span');
   const targetIndex=converter(lines).findIndex(dot=> dot===targetElement);//Find the index of the line
   const targetSlide=converter(slideElement)[targetIndex];
   moveSlide(currentElement,targetSlide,targetIndex);
   //slide.style.transform='translatex(-'+100*targetIndex+'%'+')';// move the element by targetting the index of the line element.
   updateDots(targetElement,currentDot);
});

menu.addEventListener("click", function(){
   carouselMenuContainer.classList.toggle("active");
   carouselMenuContent.classList.toggle("toggle");
   textMenu.classList.toggle("toggle");
   menu.classList.toggle("close");
   
});
carouselMenuContainer.addEventListener("click", function(){
   carouselMenuContainer.classList.remove("active");
   carouselMenuContent.classList.remove("toggle");
   textMenu.classList.remove("toggle");
   menu.classList.remove("close");

});