function updatewatching(wanttowatch) {
  console.log(wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
  localStorage.setItem("watchRoute", wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
  
  whatamiwatching();
}
function whatamiwatching() {
  var watchRoute = 0;
  if (localStorage.getItem("watchRoute"))
    watchRoute = localStorage.getItem("watchRoute")
  else
    localStorage.setItem("watchRoute", watchRoute);
  
  const whatisbeingwatched = document.getElementById("whatisbeingwatched");
  
  const para = document.createElement("p");
  const paratext1 = document.createTextNode("Currently watching route: " + watchRoute);
  para.appendChild(paratext1);
  whatisbeingwatched.appendChild(para);
  
  /*
document.body.insertBefore(para, whatisbeingwatched);
  
  document.write("<p>");
  document.write("Currently watching route: ");
  document.write(localStorage.getItem("watchRoute"));
  document.write("</p>");
*/
}
