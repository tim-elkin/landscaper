let currentIndex = 0; 

function showSlide(index) {
    const slides = document.querySelectorAll(".slide"); 
    if (index >= slides.length) currentIndex = 0; 
    else if (index < 0) currentIndex = slides.length - 1; 
    else currentIndex = index;

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

document.addEventListener("DOMContentLoaded", () => showSlide(currentIndex));
