window.onload = function () {
  const fbLogo = document.getElementsByClassName("facebook")[0];

  fbLogo.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.5)";
    console.log(event.target.style.transform);
  });
  console.log(fbLogo);
};
