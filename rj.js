// Get the navigation menu
var nav = document.getElementById("nav");
// Get the button that opens the navigation menu
var menuButton = document.getElementById("menu-button");
// When the user clicks on the button, toggle between showing and hiding the navigation menu
menuButton.onclick = function() {
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }
  // Get the form
var form = document.getElementById("form");

// Listen for form submission
form.addEventListener("submit", validateForm);

// Function to validate form
function validateForm(event) {
  event.preventDefault(); // prevent the form from submitting
  var name = form.elements.name.value; // Get the value of the name field
  var email = form.elements.email.value; // Get the value of the email field
  var message = form.elements.message.value; // Get the value of the message field

  // Check if name is filled
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  // Check if email is valid
  if (!validateEmail(email)) {
    alert("Invalid email address");
    return false;
  }

  // Check if message is filled
  if (message == "") {
    alert("Message must be filled out");
    return false;
  }

  // If all validation passed, submit the form
  form.submit();
}

// Function to validate email
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
// Get the audio element
var audio = document.getElementById("audio");

// Get the play button
var playButton = document.getElementById("play-button");

// Get the pause button
var pauseButton = document.getElementById("pause-button");

// Get the progress bar
var progressBar = document.getElementById("progress-bar");

// When the user clicks on the play button, play the audio
playButton.onclick = function() {
  audio.play();
}

// When the user clicks on the pause button, pause the audio
pauseButton.onclick = function() {
  audio.pause();
}

// Update the progress bar as the audio plays
audio.ontimeupdate = function() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
}
// Get the video element
var video = document.getElementById("video");

// Get the play button
var playButton = document.getElementById("play-button");

// Get the pause button
var pauseButton = document.getElementById("pause-button");

// Get the progress bar
var progressBar = document.getElementById("progress-bar");

// When the user clicks on the play button, play the video
playButton.onclick = function() {
  video.play();
}

// When the user clicks on the pause button, pause the video
pauseButton.onclick = function() {
  video.pause();
}

// Update the progress bar as the video plays
video.ontimeupdate = function() {
  progressBar.value = (video.currentTime / video.duration) * 100;
}
