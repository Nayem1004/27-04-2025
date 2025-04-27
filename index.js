// // document.querySelector("button").addEventListener("click",myFunction)

// document.querySelector("button").addEventListener("click", function(){
//     alert("hello")
// });

// function myFunction(){
//     alert("heloo");
// }

// var myVar = document.querySelector("h1");
// myVar.addEventListener("click", function(){
//     alert("hii");
// })

// myVar.addEventListener("mouseover", function(){
//     myVar.classList.add("my-style");
// });

// myVar.addEventListener("mouseout", function(){
//     myVar.classList.remove("my-style");
// });

// document.querySelectorAll(".myButton")[0].addEventListener("click", function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked"
// });

// document.querySelectorAll(".myButton")[1].addEventListener("click", function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked"
// });

// document.querySelectorAll(".myButton")[2].addEventListener("click", function(){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked"
// });



    let slides = document.querySelectorAll('.slide-moves');

    let slider = document.querySelector(".slider");

    let prevButton = document.getElementById('prev');
    let nextButton = document.getElementById('next');

    let currentSlide = 0;

    nextButton.addEventListener("click", () => {
        imageMove('next');
    })

    prevButton.addEventListener("click", () => {
        imageMove('prev');
    })

    function imageMove(direction) {
        const image = document.querySelectorAll('[data-imag]');
        image.forEach((item,index) => {
            if(index === currentSlide){
                item.classList.add("active");
            }else{
                item.classList.remove("active");
            }
        });

        if(direction === "next"){
            currentSlide++;
        }else{
            currentSlide--;
        }

        if(currentSlide < 0){
            currentSlide = image.length - 1;
        }else if(currentSlide >= image.length){
            currentSlide = 0;
        }    
    

        // image[currentSlide].classList.add("active");
    }






