window.onload = function() {
  document.getElementById("header").innerHTML = '<object type="text/html" data="header.html" ></object>';
  document.getElementById("nav").innerHTML = '<object type="text/html" data="nav.html" ></object>';
  document.getElementById("footer").innerHTML = '<object type="text/html" data="footer.html" ></object>';

  // add active class to current page in nav
  var current_url = window.location.pathname;
  var nav_links = document.getElementsByTagName("a");
  for (var i = 0; i < nav_links.length; i++) {
    if (nav_links[i].href == current_url) {
      nav_links[i].classList.add("active");
    }
  }
};

const welcomeText = document.getElementById("welcome-text");
const text = "Welcome to my page";
let index = 0;

function animateText() {
  if (index < text.length) {
    welcomeText.innerHTML += text.charAt(index);
    index++;
    setTimeout(animateText, 100);
  }
}

animateText();
