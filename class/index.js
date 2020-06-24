console.log("jenny");

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    document.getElementById("main").setAttribute("style", "background:yellow;");
  }
});
