/* window.onload = function() {
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
}; --> */

function submitForm() {
  const ans = confirm('Are you sure you want to submit this form?');
  alert(ans ? "Sent!" : "All good bro bro");
}