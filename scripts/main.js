// var coll = document.getElementsByClassName("toggle");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.maxHeight){
//         content.style.maxHeight = null;
//       } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//       }
//     });
// }


// let aboutButton = document.querySelector('#about');

// document.querySelector('#github').onmouseover = function() {mouseOver('#github')};
// document.querySelector('#github').onmouseout = function() {mouseOut('#github')};

// document.querySelector('#linkedin').onmouseover = function() {mouseOver('#linkedin')};
// document.querySelector('#linkedin').onmouseout = function() {mouseOut('#linkedin')};

// document.querySelector('#email').onmouseover = function() {mouseOver('#email')};
// document.querySelector('#email').onmouseout = function() {mouseOut('#email')};

// document.querySelector('#instagram').onmouseover = function() {mouseOver('#instagram')};
// document.querySelector('#instagram').onmouseout = function() {mouseOut('#instagram')};


// /* For making the icon you hover on blue */


// function mouseOver(item){
//     document.querySelector(item).style.color = '#2587bc'; 
//     document.querySelector(item).style.transform = 'rotate(15deg)';  
// }

// function mouseOut(item) {
//     document.querySelector(item).style.color = 'white';
//     document.querySelector(item).style.transform = '';

// }


/* For darkening all the the other icons you aren't hovering */

// let list = document.querySelectorAll('.link-button');

// function mouseOver(item){
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] == document.querySelector(item)) {
//             continue;
//         } else {
//             list[i].style.filter = 'brightness(30%)'
//         } 
//     }       
// }

// function mouseOut() {
//     for (let i = 0; i < list.length; i++) {
//         list[i].style.filter = 'brightness(100%)'
//     }
// }