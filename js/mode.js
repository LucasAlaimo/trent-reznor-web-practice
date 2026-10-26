const modeToggle = document.querySelector(".theme-toggle");
const html = document.documentElement;

// Recuperar la preferencia guardada
const savedMode = localStorage.getItem("mode");

// Aplicar un modo y actualizar el interruptor
function applyMode(mode) {
    html.dataset.theme = mode;

    modeToggle.setAttribute(
        "aria-checked",
        String(mode === "light")
    );
}

// modo inicial
const initialMode = savedMode === "light" ? "light" : "dark";
applyMode(initialMode);

// Escuchar los clics del interruptor
modeToggle.addEventListener("click", () => {
    const currentMode = html.dataset.theme;
    const newMode = currentMode === "dark" ? "light" : "dark";

    applyMode(newMode);
    localStorage.setItem("mode", newMode);
});