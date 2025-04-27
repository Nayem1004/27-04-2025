// document.querySelector("button").addEventListener("click",myFunction)

document.querySelector("button").addEventListener("click", function(){
    alert("hello")
});

function myFunction(){
    alert("heloo");
}

var myVar = document.querySelector("h1");
myVar.addEventListener("click", function(){
    alert("hii");
})

myVar.addEventListener("mouseover", function(){
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("my-style");
});

document.querySelectorAll(".myButton")[0].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked"
});

document.querySelectorAll(".myButton")[1].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked"
});

document.querySelectorAll(".myButton")[2].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked"
});






