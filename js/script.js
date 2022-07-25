let attackPlayer;
let attackEnemy;

function initGame() {
  let btnPetPlayer = document.getElementById("btn-pet");
  btnPetPlayer.addEventListener("click", selectPetPlayer);

  let btnFire = document.getElementById("btn-fire");
  btnFire.addEventListener("click", attackFire);
  let btnWater = document.getElementById("btn-water");
  btnWater.addEventListener("click", attackWater);
  let btnEarth = document.getElementById("btn-earth");
  btnEarth.addEventListener("click", attackEarth);
}

function selectPetPlayer() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanPetPlayer = document.getElementById("petPlayer");

  if (inputHipodoge.checked) {
    spanPetPlayer.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanPetPlayer.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanPetPlayer.innerHTML = "Ratigueya";
  } else {
    alert("Usted no ha seleccionado ninguna mascota");
  }

  selectPetEnemy();
}

function selectPetEnemy() {
  let petRandom = random(1, 3);
  let spanPetEnemy = document.getElementById("petEnemy");

  if (petRandom == 1) {
    spanPetEnemy.innerHTML = "Hipodoge";
  } else if (petRandom == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
  } else {
    spanPetEnemy.innerHTML = "Ratigueya";
  }
}

function attackFire() {
  attackPlayer = "FUEGO";
  attackRandomEnemy();
}

function attackWater() {
  attackPlayer = "AGUA";
  attackRandomEnemy();
}

function attackEarth() {
  attackPlayer = "TIERRA";
  attackRandomEnemy();
}

function attackRandomEnemy() {
  let attackRandom = random(1, 3);
  if (attackRandom == 1) {
    attackEnemy = "FUEGO";
  } else if (attackRandom == 2) {
    attackEnemy = "AGUA";
  } else {
    attackEnemy = "TIERRA";
  }
  combat();
}

function createMessage(result) {
  let sectionMessage = document.getElementById("messages");

  let message = document.createElement("p");
  message.innerHTML = `Tu mascota ataco con: ${attackPlayer}, la mascota del enemigo atacó con: ${attackEnemy} - ${result}`;
  sectionMessage.appendChild(message);
}

function combat() {
  if (attackEnemy == attackPlayer) {
    createMessage("EMPATE");
  } else if (attackPlayer == "FUEGO" && attackEnemy == "TIERRA") {
    createMessage("GANASTE");
  } else if (attackPlayer == "AGUA" && attackEnemy == "FUEGO") {
    createMessage("GANASTE");
  } else if (attackPlayer == "TIERRA" && attackEnemy == "AGUA") {
    createMessage("GANASTE");
  } else {
    createMessage("PERDISTE");
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", initGame);
