const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");

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

  // sukuriu automobilio kortele
  const carCard = document.createElement("div");
  carCard.className = "car-card";

  // pripildau kortele informacija
  carCard.innerHTML = `
  <img src=${image} alt="car">
  <h3>${name}</h3>
  <p>${description}</p>
  <p>${year}</p>
  <p>Automobilio kaina: ${price}</p>
  <p>Automobilio kuras: ${fuel}</p>
  <p>
  `;

  // pridedu kortele i HTML'a
  carsDiv.appendChild(carCard);

  // Atsatyk forma i pradine padeti
  carForm.reset();
});
