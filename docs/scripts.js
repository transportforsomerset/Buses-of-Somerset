localStorage.setItem("watchRoute", "2");

function updatewatching(wanttowatch) {
  console.log(wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
  localStorage.setItem("watchRoute", wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
}
function whatamiwatching() {
    document.write("<p>");
    document.write("Currently watching route: ");
    document.write(localStorage.getItem("watchRoute"));
    document.write("</p>");
}
