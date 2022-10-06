let currentSlideId = 1;
const amountOfSlides = 3;
let descriptions = [
    "A beautiful painting of the gold world very huge transparent burning" +
    " a lonely oak on a hill, dark fantasy, elden ring, hyper detailed, " +
    "sharp focus, soft light. unreal engine 5 lumen. ray tracing. trending " +
    "on artstation",
    "A beautiful painting of the waterfall and rainbow, dark fantasy," +
    " elden ring, hyper detailed, sharp focus, soft light. unreal engine 5 lumen." +
    " ray tracing. trending on artstation",
    "a lonely bottle with a galaxy inside stands on a table by the window behind" +
    " which is a forest, cinematic shot, intricate, ornate, photorealistic, ultra " +
    "detailed, realistic, 1 0 0 mm, photography, octane, high definition, depth of" +
    " field, bokeh, 8 k, artstation",
    "gothic temple, candles, gold jewelry, twilight, cinematic shot, intricate, ornate," +
    " photorealistic, ultra detailed, realistic, 1 0 0 mm, photography, octane," +
    " high definition, depth of field, bokeh, 8 k"];

console.log(0);
goToSlide(1);


function previousSlide() {
    console.log('Slide: ${currentSlideId}');
    goToSlide(currentSlideId - 1);
}

function nextSlide() {
    console.log('Slide: ${currentSlideId}');
    goToSlide(currentSlideId + 1);
}


function goToSlide(n) {
    if ((n >= 0) && (n < amountOfSlides))
        currentSlideId = n;
    else if (n < 0)
        currentSlideId = amountOfSlides - 1;
    else
        currentSlideId = 0;
    if (currentSlideId - 1 >= 0)
        previousSlideId = currentSlideId - 1;
    else
        previousSlideId = amountOfSlides - 1;
    if (currentSlideId + 1 < amountOfSlides)
        nextSlideId = currentSlideId + 1;
    else
        nextSlideId = 0;

    let previous_slide = document.getElementById('previous_slide');
    previous_slide.src = 'assets/gallery/examples/' + (previousSlideId) + '.jpeg';

    let background = document.getElementById('background-image');
    background.style = 'background-image: url(assets/gallery/examples/back_' + (currentSlideId) + '.jpeg);';

    let current_slide = document.getElementById('current_slide');
    current_slide.src = 'assets/gallery/examples/' + (currentSlideId) + '.jpeg';


    let next_slide = document.getElementById('next_slide');
    next_slide.src = 'assets/gallery/examples/' + (nextSlideId) + '.jpeg';

    let description = document.getElementById('description');
    description.textContent = descriptions[currentSlideId];
}


setInterval(nextSlide, 10000)
