let figures = document.querySelectorAll("figure");
let currentImageIndex = 0;

function showNextImage() {
    figures[currentImageIndex].style.display = "none";
    currentImageIndex++;
    if (currentImageIndex >= figures.length) {
        currentImageIndex = 0;
    }
    figures[currentImageIndex].style.display = "block";
}

function showPreviousImage() {
    figures[currentImageIndex].style.display = "none";
    currentImageIndex--;
    if(currentImageIndex < 0) {
        currentImageIndex = figures.length - 1;
    }
    figures[currentImageIndex].style.display = "block";
}

setInterval(showNextImage, 4000);
