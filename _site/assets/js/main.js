document.addEventListener("DOMContentLoaded", function () {
  // Create modal HTML structure
  const modalHTML = `
      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
        <div id="caption"></div>
      </div>
    `;

  // Append modal to the body
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Get modal elements
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Function to handle image click
  function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }

  // Apply modal functionality to all images in posts
  document.querySelectorAll("article img").forEach(function (img) {
    img.style.cursor = "pointer"; // Change cursor to pointer
    img.addEventListener("click", function () {
      openModal(img);
    });
  });

  // Close modal on clicking the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal on clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
