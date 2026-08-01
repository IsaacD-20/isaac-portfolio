const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");


document.querySelectorAll(".lightbox-image").forEach(img => {

    img.addEventListener("click", function () {

        lightbox.classList.add("active");

        lightboxImg.src = this.src;

    });

});


lightbox.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

});