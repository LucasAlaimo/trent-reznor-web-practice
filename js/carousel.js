
const albumList = document.querySelector(".album-list");
const prevButton = document.querySelector(".album-carousel__prev");
const nextButton = document.querySelector(".album-carousel__next");

// Calcula cuánto debe desplazarse el carrusel
function getScrollDistance() {
    const album = albumList.querySelector(".album-item");

    const albumWidth = album.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(albumList).columnGap);

    return albumWidth + gap;
}

// Desplazamiento hacia la izquierda
prevButton.addEventListener("click", () => {
    albumList.scrollBy({
        left: -getScrollDistance(),
        behavior: "smooth"
    });
});

// Desplazamiento hacia la derecha
nextButton.addEventListener("click", () => {
    albumList.scrollBy({
        left: getScrollDistance(),
        behavior: "smooth"
    });
});

// Actualiza el estado de las flechas
function updateButtons() {
    const maxScroll = albumList.scrollWidth - albumList.clientWidth;

    prevButton.disabled = albumList.scrollLeft <= 1;
    nextButton.disabled = albumList.scrollLeft >= maxScroll - 1;
}

// Detecta el desplazamiento del carrusel
albumList.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);

// Establece el estado inicial
updateButtons();
