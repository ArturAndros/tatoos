function openBurger() {
    document.getElementById("burger").classList.toggle("open");

    let menu = document.getElementById("burger-menu");
    if(menu.style.display =="none"){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "none";
    }
};
$(document).ready(function() {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

});
let colWidth = 232;
if(screen.width<=600){
    colWidth=110;
}
$('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: colWidth

    }

});

function thisFileUpload() {
    document.getElementById("file").click();
}
