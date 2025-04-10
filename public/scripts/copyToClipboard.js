document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-button");
    const emailInput = document.getElementById("email-input");
    const successMessage = document.getElementById("copy-success");

    if (!copyButton || !emailInput || !successMessage) {
        console.error("Uno o más elementos no se encontraron en el DOM.");
        return;
    }

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(emailInput.value)
            .then(() => {
                // Mostrar mensaje con opacidad para efecto fade-in
                successMessage.classList.remove("opacity-0");

                // Ocultar después de 2 segundos
                setTimeout(() => successMessage.classList.add("opacity-0"), 2000);
            })
            .catch(err => console.error("Error al copiar al portapapeles:", err));
    });
});