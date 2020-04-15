

function hidenTextFunction() {
    var x = document.getElementById("melburn-park-part");
    if (window.getComputedStyle(x).visibility === "hidden") {
      x.style.visibility = "visible";
    }
  }