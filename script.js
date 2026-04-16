// add javascript here
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");
console.log("Modal element:", modal);

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
console.log("Button element:", btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
console.log("Close span element:", span);

// When the user clicks on the button, open the modal
if (btn) {
  btn.onclick = function() {
    console.log("Button clicked, opening modal");
    modal.style.display = "block";
  }
} else {
  console.log("ERROR: Button not found!");
}

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function() {
    console.log("Close clicked, closing modal");
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
