export const isLiked = (likes, id) => {
  let song = likes.filter(song => song.id === id);
  if (song.length === 1) return true;
  return false;
};

export const unlike = (likes, id) => {
  return likes.filter(song => song.id !== id);
};

export const shorten = (text, n) => {
  return text.length > n ? text.substr(0, n - 1) + "..." : text;
};

export const abbreviate = (number, maxPlaces, forcePlaces, forceLetter) => {
  number = Number(number);
  forceLetter = forceLetter || false;
  if (forceLetter !== false) {
    return annotate(number, maxPlaces, forcePlaces, forceLetter);
  }
  var abbr;
  if (number >= 1e12) {
    abbr = "T";
  } else if (number >= 1e9) {
    abbr = "B";
  } else if (number >= 1e6) {
    abbr = "M";
  } else if (number >= 1e3) {
    abbr = "K";
  } else {
    abbr = "";
  }
  return annotate(number, maxPlaces, forcePlaces, abbr);
};

function annotate(number, maxPlaces, forcePlaces, abbr) {
  // set places to false to not round
  var rounded = 0;
  switch (abbr) {
    case "T":
      rounded = number / 1e12;
      break;
    case "B":
      rounded = number / 1e9;
      break;
    case "M":
      rounded = number / 1e6;
      break;
    case "K":
      rounded = number / 1e3;
      break;
    case "":
      rounded = number;
      break;
  }
  if (maxPlaces !== false) {
    var test = new RegExp("\\.\\d{" + (maxPlaces + 1) + ",}$");
    if (test.test("" + rounded)) {
      rounded = rounded.toFixed(maxPlaces);
    }
  }
  if (forcePlaces !== false) {
    rounded = Number(rounded).toFixed(forcePlaces);
  }
  return rounded + abbr;
}

abbreviate(1200000, 2, false, false);
abbreviate(1248000, 2, false, false);
abbreviate(248000, 2, false, false);

abbreviate(1200000, 2, 2, false);
abbreviate(1248000, 2, 2, false);
abbreviate(248000, 2, 2, false);

abbreviate(1200000, 3, 3, "M");
abbreviate(1248000, 3, 3, "M");
abbreviate(248000, 3, 3, "M");
