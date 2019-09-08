function ContactInfoAppear() {
  var x = document.getElementById("ContactInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document);
