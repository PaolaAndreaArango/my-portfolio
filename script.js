document.getElementById("addRecommendationBtn").addEventListener("click", () => {
    const textarea = document.getElementById("newRecommendation");
    const text = textarea.value.trim();

    if (text === "") {
        alert("Por favor escribe una recomendación antes de enviar.");
        return;
    }

    const newRec = document.createElement("div");
    newRec.classList.add("recommendation");
    newRec.textContent = `"${text}" – Nuevo usuario`;

    document.getElementById("recommendation-list").appendChild(newRec);
    textarea.value = "";

    alert("✅ Recomendación enviada correctamente.");
});