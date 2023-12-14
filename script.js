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
  console.log(destinationName, locName, photoUrl, descr);
});
