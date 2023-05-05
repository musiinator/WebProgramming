$(document).ready(function() {
    let prevButton = $("#prevButton");
    let nextButton = $("#nextButton");
    let figures = $("figure");
    let currentImageIndex = 0;

    prevButton.click(showPreviousImage);
    nextButton.click(showNextImage);

    function showNextImage() {
        $(figures[currentImageIndex]).hide();
        currentImageIndex++;
        if (currentImageIndex >= figures.length) {
            currentImageIndex = 0;
        }
        $(figures[currentImageIndex]).show();
    }

    function showPreviousImage() {
        $(figures[currentImageIndex]).hide();
        currentImageIndex--;
        if(currentImageIndex < 0) {
            currentImageIndex = figures.length - 1;
        }
        $(figures[currentImageIndex]).show();
    }

    setInterval(showNextImage, 4000);
});
