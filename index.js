let colors = [
  "#F4DF4EFF",
  "#FFFEEA4",
  "#5B84B1FF",
  "#97BC62FF",
  "#42EADDFF",
  "#CDB599FF",
  "#00A4CCFF",
  "#ADEFD1FF",
  "#EEA47FFF",
];

document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
    });

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("body").style.background = randomColor;
});
