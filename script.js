// Récupération des éléments
const range = document.querySelector("#compare__ip");
const after = document.querySelector(".after");

// Ecoute de l'événement input sur range
range.addEventListener("input", (e) => {
  after.style.width = e.target.value + "px";
});

// Ecoute de l'événement change sur range
range.addEventListener("change", (e) => {
  after.style.width = e.target.value + "px";
});
