const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");
const carCount = document.getElementById("carCount");
let carCounter = 0;

carForm.addEventListener("submit", function (event) {
  // Sustabdys standartine formos elgsena, nepekraus puslapio
  event.preventDefault();

  // paimu info is formos kai ji paspaudziama
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;
  const image = document.getElementById("image").value;
  const fuel = document.getElementById("fuel").value;

  if (name.length < 3) {
    alert("Pavadinimas turi buti bent 3 simboliu");
    return;
  }

  if (price <= 0) {
    alert("Kaina turi buti didesne uz 0");
    return;
  }

  // sukuriu automobilio kortele
  const carCard = document.createElement("div");
  carCard.className = "car-card";

  if (fuel === "Benzinas") {
    carCard.classList.add("benzinas");
  } else if (fuel === "Dyzelinas") {
    carCard.classList.add("dyzelinas");
  } else if (fuel === "Elektra") {
    carCard.classList.add("elektra");
  }

  // pripildau kortele informacija
  carCard.innerHTML = `
  <img src=${image} alt="car">
  <h3>${name}</h3>
  <p>${description}</p>
  <p>${year}</p>
  <p>Automobilio kaina: ${price}</p>
  <p>Automobilio kuras: ${fuel}</p>
  
  <button class="delete-btn">Istrinti</button>

  `;
  // pridedam istrynimo logika
  const deleteBtn = carCard.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    carCard.remove();
    carCounter--;
    carCount.textContent = `Automobiliu skaicius: ${carCounter}`;
  });

  // pridedu kortele i HTML'a
  carsDiv.appendChild(carCard);
  carCounter++;
  carCount.textContent = `Automobiliu skaicius: ${carCounter}`;

  // Atsatyk forma i pradine padeti
  carForm.reset();
});
