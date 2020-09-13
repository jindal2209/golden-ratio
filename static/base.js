var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    console.log("sown");
  } else {
    document.getElementById("navbar").style.top = "-150px";
    console.log('up');
  }
  prevScrollpos = currentScrollPos;
} 
