document.getElementById("suscripcionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;

    const interesesSeleccionados = Array.from(
        document.querySelectorAll('input[name="intereses"]:checked')
    ).map(i => i.value);

    localStorage.setItem("email", email);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("intereses", JSON.stringify(interesesSeleccionados));

    window.location.href = "Resultado.html";  // ⚠ asegúrate del nombre del archivo
});
