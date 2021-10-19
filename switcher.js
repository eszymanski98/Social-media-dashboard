let switchBtn = document.querySelector(".switcher");

function colorIterator(object, style) {
  for (var i = 0; i < object.length; i++) {
    var currentObject = object[i];
    currentObject.style.color = style;
  }
}

function backgroundColorIterator(object, style) {
  for (var i = 0; i < object.length; i++) {
    var currentObject = object[i];
    currentObject.style.backgroundColor = style;
  }
}

const switchMode = (el) => {
  let body = document.querySelector("body");
  let mainText = document.querySelector(".dashboard__top__main__text");
  let totalFollowers = document.querySelector(
    ".dashboard__top__total_followers"
  );
  let darkModeTxt = document.querySelector(".dashboard__top__darkmode");
  let profileTxt = document.querySelectorAll(
    ".dashboard__top__tile__profile__text"
  );
  let profileNum = document.querySelectorAll(
    ".dashboard__top__tile__profile__number"
  );
  let profileTxtBlw = document.querySelectorAll(
    ".dashboard__top__tile__profile__textbelow"
  );
  let btmTxt = document.querySelector(".dashboard__bottom__text");
  let topTile = document.querySelectorAll(".dashboard__top__tile");
  let btmTileTxt = document.querySelectorAll(".dashboard__bottom__tile__text");
  let btmTile = document.querySelectorAll(".dashboard__bottom__tile");
  let btmTileNum = document.querySelectorAll(
    ".dashboard__bottom__tile__number"
  );

  if (el.checked) {
    backgroundColorIterator(topTile, "hsl(228, 28%, 20%)");
    backgroundColorIterator(btmTile, "hsl(228, 28%, 20%)");
    colorIterator(profileTxt, "hsl(228, 34%, 66%)");
    colorIterator(profileNum, "white");
    colorIterator(btmTileNum, "white");
    colorIterator(profileTxtBlw, "hsl(228, 34%, 66%)");
    colorIterator(btmTileTxt, "hsl(228, 34%, 66%)");
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    mainText.style.color = "white";
    totalFollowers.style.color = "hsl(228, 34%, 66%)";
    darkModeTxt.style.color = "white";
    btmTxt.style.color = "white";
  } else {
    backgroundColorIterator(topTile, "hsl(227, 47%, 96%)");
    backgroundColorIterator(btmTile, "hsl(227, 47%, 96%)");
    colorIterator(profileTxt, "grey");
    colorIterator(profileNum, "black");
    colorIterator(btmTileNum, "black");
    colorIterator(profileTxtBlw, "grey");
    colorIterator(btmTileTxt, "grey");
    body.style.backgroundColor = "white";
    mainText.style.color = "black";
    totalFollowers.style.color = "grey";
    darkModeTxt.style.color = "hsl(228, 34%, 66%)";
    btmTxt.style.color = "grey";
  }
};
