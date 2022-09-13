//Carrousel js
var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 4000);

//Scroll nav-bar js
$(document).scroll( function(e){

    const y = $("html").scrollTop();

    if(y > 300) $(".menu").addClass("nav-black")
        else $(".menu").removeClass("nav-black")

})

//Smooth scroll
$(document).scroll( function(e){
    document.querySelector('.contacto').addEventListener('click', () => {
        const y = $("html").scrollTop(1700);
    })
})

$(document).scroll( function(e){
    document.querySelector('.about').addEventListener('click', () => {
        const y = $("html").scrollTop(600);
    })
})

$(document).scroll( function(e){
    document.querySelector('.destacados').addEventListener('click', () => {
        const y = $("html").scrollTop(1100);
    })
})