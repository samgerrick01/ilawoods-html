// Open modal function
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Close modal function
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close modal when clicking outside the image
var modal = document.getElementById("myModal");
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
