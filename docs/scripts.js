localStorage.setItem("watchRoute", "2");

function updatewatching(wanttowatch) {
  console.log(wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
  localStorage.setItem("watchRoute", wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
}
function whatamiwatching() {
    var watching = localStorage.getItem("watchRoute");
    document.write("<p>");
    document.write("Currently watching route: ");
    document.write(watching);
    document.write("</p>");
}
