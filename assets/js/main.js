/* tulis JS nya sendiri ya, mengikuti seperti dalam video,
selamat belajar.. ^^ */


$('#galeri-slider').owlCarousel({
    loop:true,
    nav:true,

    items:3,
    dots:false,
    margin:20,
    navText: [
        
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '#slider-tools-3',
});

