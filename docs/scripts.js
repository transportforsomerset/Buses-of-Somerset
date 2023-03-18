localStorage.setItem("watchRoute", "2");

function updatewatching(wanttowatch) {
  console.log(wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
  localStorage.setItem("watchRoute", wanttowatch);
  console.log(localStorage.getItem("watchRoute"));
}
