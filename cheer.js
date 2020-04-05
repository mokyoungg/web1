const form = document.querySelector(".js-form"), input = form.querySelector("input"),
cheer = document.querySelector(".js-cheer");

const USER_T = "currentT",
SHOWING_ON = "showing";

function saveCheer(text){
  localStorage.setItem(USER_T, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintCheer(currentValue);
  saveCheer(currentValue);
}

function endgame() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintCheer(text){
  form.classList.remove(SHOWING_ON);
  cheer.classList.add(SHOWING_ON);
  cheer.innerText = `Thanks ${text}`
}

function load() {
  const currentT = localStorage.getItem(USER_T);
  if(currentT === null){
    endgame();
  } else {
    paintCheer(currentT);
  }
}


function init() {
  load();
}

init();
