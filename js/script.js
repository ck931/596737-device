var mapImage = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var closeMapModal = document.querySelector(".close-map");
var write = document.querySelector(".button-write");
var writeModal = document.querySelector(".modal-write-us");
var closeWriteModal = document.querySelector(".close-write");
var userName = writeModal.querySelector("[name=your-name]");
var sendForm = writeModal.querySelector("#write-us-form");
var userMessage = writeModal.querySelector("[name=message]");

mapImage.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

closeMapModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

write.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeModal.classList.add("modal-show");
  userName.focus();
});

closeWriteModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeModal.classList.remove("modal-show");
});

sendForm.addEventListener("submit", function(evt) {
  if (!userMessage.value) {
    evt.preventDefault();
    writeModal.classList.add("error");
  }
});
