
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-navigation");
const navIcon = navToggle.querySelector("span");

// Abrir o cerrar el menú
function setMenuOpen(isOpen) {
    siteNav.classList.toggle("is-open", isOpen);

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

    navIcon.textContent = isOpen ? "×" : "☰";
}


navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("is-open");

    setMenuOpen(!isOpen);
});


siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        setMenuOpen(false);
    });
});

// Cerrar al pulsar fuera del menú
document.addEventListener("click", (event) => {
    if (
        !siteNav.contains(event.target) &&
        !navToggle.contains(event.target)
    ) {
        setMenuOpen(false);
    }
});

// Cerrar al pulsar Escape
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        siteNav.classList.contains("is-open")
    ) {
        setMenuOpen(false);
        navToggle.focus();
    }
});

// Restablecer al volver a escritorio
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        setMenuOpen(false);
    }
});
