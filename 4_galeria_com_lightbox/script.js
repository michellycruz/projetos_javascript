const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelectorAll(".lightbox");
const lightboxImage = document.querySelectorAll(".lightbox-image");
const lightboxClose = document.querySelectorAll(".lightbox-close");


galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("clicou");
    })
})