// Function to inject the modal into the page
var modalHTML = `
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>
  `;

// Inject the modal HTML into the body
document.body.insertAdjacentHTML("beforeend", modalHTML);

// Get the modal
var modal = document.getElementById("myModal");

// Get all images with the class 'modal-trigger'
var images = document.querySelectorAll(".modal-trigger");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all selected images and add the click event
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
