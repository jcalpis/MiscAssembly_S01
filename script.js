function ContactInfoAppear() {
  var x = document.getElementById("ContactInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
if (!touchsupport){
    document.documentElement.className += " non-touch"
}
