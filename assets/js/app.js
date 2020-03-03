// Flickity Main Carousel //
// options //
var flkty = new Flickity('.main-carousel',{
    fade:true,
    prevNextButtons:true,
    draggable:false,
    autoPlay: true,
    pauseAutoPlayOnHover: true,
    pageDots: true,
    wrapAround: true,
    imagesLoaded: true,
    percentPosition: true,
    cellSelector: '.carousel-cell',
    autplay: 2000
});

// Flickity Company Carousel //
// options //
var flkty2 = new Flickity('.company-carousel',{
    draggable: false,
    prevNextButtons: false,
    contain: true,
    fade: true,
    pageDots: false,
    prevNextButtons: false,
    groupCells: true
}); 

