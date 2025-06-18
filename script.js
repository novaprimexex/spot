let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Auto advance slides
function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 10000); // Change slide every 10 seconds
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    autoSlide();
});