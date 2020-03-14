"use strict";

window.addEventListener("DOMContentLoaded", start);
let characterCounter = 0;

function start() {
  const element = document.querySelector(".typewritten");
  typewriter(element, done);
}

function done() {
  console.log("Done!");
}

function typewriter(element, callback) {
  let typedSubstring;
  let characters = element.textContent;
  displayNewCharacter();

  function displayNewCharacter() {
    characterCounter++;
    element.textContent = "";
    typedSubstring = characters.substring(0, characterCounter + 1);
    element.textContent = typedSubstring;

    if (characterCounter < characters.length) {
      const typing = Math.random() * 200 + 50;
      setTimeout(displayNewCharacter, typing);
    } else {
      callback();
    }
  }
}
