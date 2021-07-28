// IMG-DARKEN
const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("mouseover", () => {
            gridItem.childNodes[1].classList.add("img-darken");
        });
        gridItem.addEventListener("mouseout", () => {
            gridItem.childNodes[1].classList.remove("img-darken");
        });
    });

  // TUNE OF MONTH
  var theBox = document.getElementById("theBox");
  var icon = document.getElementById("icon-green");
  var text = document.querySelector(".text-only");

  icon.onclick = function () {
    if (theBox.paused) {
      theBox.play();
      icon.src = "icons/pause-icon-green-scaled.png";
    } else {
      theBox.pause();
      icon.src = "icons/play-icon-color-turquoise-scaled.png";
    }
  };

  text.onclick = () => {
    if (theBox.paused) {
      theBox.play();
      icon.src = "icons/pause-icon-green-scaled.png";
    } else {
      theBox.pause();
      icon.src = "icons/play-icon-color-turquoise-scaled.png";
    }
  };