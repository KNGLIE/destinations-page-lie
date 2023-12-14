// When form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (event) => {
  // event is the event object
  //
  event.preventDefault();

  const PLACEHOLDER_PHOTO = "https://imageio.forbes.com/specials-images/imageserve/647facd9f5654bc6b057b386/Couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island/960x0.jpg?format=jpg&width=960"

  const destinationName = destination_name.value;
  const locName = location_name.value;
  const photoUrl = photo_url.value || PLACEHOLDER_PHOTO;
  const descr = description.value;

  user_input_form.reset()
  const card = createCard({destinationName, locName, photoUrl, descr});

  cards_container.appendChild(card);
});

function createCard({destinationName, locName, photoUrl, descr}){
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem;");
    card.innerHTML = `
    <img src="${photoUrl}" class="card-img-top" alt="${destinationName} at ${locName}">
    <div class="card-body">
        <h5 class="card-title">${destinationName}</h5>
        <p class="card-text">${locName}</p>
        ${descr ? `<p class="card-text">${descr}</p>` : ''}
        <button type="button" btn_type="edit" class="btn btn-info">Edit</button>
        <button type="button" btn_type="delete" class="btn btn-danger">Delete</button>
    </div>
`;

    return card;
}

cards_container.addEventListener("click", (evt) => {
    const clickedEvent = evt.target;

    if (clickedEvent.getAttribute("btn_type") === "delete"){
        clickedEvent.parentElement.parentElement.remove();
    }
})