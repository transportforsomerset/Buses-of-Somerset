function updatewatching(wanttowatch) {
  console.log(wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
  localStorage.setItem("watchRoute", wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
}
function whatamiwatching() {
  if (!localStorage.getItem("watchRoute"))
    localStorage.setItem("watchRoute", 0);
  
  const whatisbeingwatched = document.getElementById("whatisbeingwatched");
  
  document.write("<p>");
  document.write("Currently watching route: ");
  document.write(localStorage.getItem("watchRoute"));
  document.write("</p>");
}
