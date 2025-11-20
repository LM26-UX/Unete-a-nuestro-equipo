window.addEventListener("DOMContentLoaded", () => {

    const email = localStorage.getItem("email");
    const nombre = localStorage.getItem("nombre");
    const intereses = JSON.parse(localStorage.getItem("intereses")) || [];

    console.log("Email guardado:", email);
    console.log("Nombre guardado:", nombre);
    console.log("Intereses guardados:", intereses);

    document.getElementById("res-email").textContent = email || "No especificado";
    document.getElementById("res-name").textContent = nombre || "No especificado";
    document.getElementById("res-interests").textContent =
        intereses.length > 0 ? intereses.join(", ") : "Ninguno seleccionado";
});
