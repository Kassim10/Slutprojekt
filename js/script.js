"use strict";

const array = [1, 2, 3, 4, 5, 6];
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
const collection = document.getElementsByClassName("recept");

let i = 0;


for (const element of collection) {
    element.style.order = shuffledArray[i];
    i++;
}

function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var TopButton = document.getElementById("TopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        TopButton.style.display = "block";
    } else {
        TopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}