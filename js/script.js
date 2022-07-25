let attackPlayer;
let attackEnemy;
let playerLifes = 3;
let enemyLifes = 3;

function initGame() {
  let sectionSelectAttack = document.getElementById("select-attack");
  sectionSelectAttack.style.display = "none";
  let sectionRestart = document.getElementById("restart");
  sectionRestart.style.display = "none";

  let btnPetPlayer = document.getElementById("btn-pet");
  btnPetPlayer.addEventListener("click", selectPetPlayer);

  let btnFire = document.getElementById("btn-fire");
  btnFire.addEventListener("click", attackFire);
  let btnWater = document.getElementById("btn-water");
  btnWater.addEventListener("click", attackWater);
  let btnEarth = document.getElementById("btn-earth");
  btnEarth.addEventListener("click", attackEarth);

  let btnRestart = document.getElementById("btn-restart");
  btnRestart.addEventListener("click", restartGame);
}

function selectPetPlayer() {
  let sectionSelectPet = document.getElementById("select-pet");
  sectionSelectPet.style.display = "none";

  let sectionSelectAttack = document.getElementById("select-attack");
  sectionSelectAttack.style.display = "block";

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

function combat() {
  let spanLifePlayer = document.getElementById("lifePlayer");
  let spanLifeEnemy = document.getElementById("lifeEnemy");

  if (attackEnemy == attackPlayer) {
    createMessage("EMPATE");
  } else if (attackPlayer == "FUEGO" && attackEnemy == "TIERRA") {
    createMessage("GANASTE");
    enemyLifes--;
    spanLifeEnemy.innerHTML = enemyLifes;
  } else if (attackPlayer == "AGUA" && attackEnemy == "FUEGO") {
    createMessage("GANASTE");
    enemyLifes--;
    spanLifeEnemy.innerHTML = enemyLifes;
  } else if (attackPlayer == "TIERRA" && attackEnemy == "AGUA") {
    createMessage("GANASTE");
    enemyLifes--;
    spanLifeEnemy.innerHTML = enemyLifes;
  } else {
    createMessage("PERDISTE");
    playerLifes--;
    spanLifePlayer.innerHTML = playerLifes;
  }

  reviewLives()


}

function reviewLives() {
  if (enemyLifes == 0) {
    messageFinish("FELICITACIONES HAS GANADO EL JUEGO 🥳");
  } else if (playerLifes == 0) {
    messageFinish("Lo siento, Perdiste 😭");
  }
}

function createMessage(result) {
  let sectionMessage = document.getElementById("messages");

  let message = document.createElement("p");
  message.innerHTML = `Tu mascota ataco con: ${attackPlayer}, la mascota del enemigo atacó con: ${attackEnemy} - ${result}`;
  sectionMessage.appendChild(message);
}

function messageFinish(resultFinish) {
  let sectionMessage = document.getElementById("messages");

  let message = document.createElement("p");
  message.innerHTML = resultFinish;
  sectionMessage.appendChild(message);

  let btnFire = document.getElementById("btn-fire");
  btnFire.disabled = true;
  let btnWater = document.getElementById("btn-water");
  btnWater.disabled = true;
  let btnEarth = document.getElementById("btn-earth");
  btnEarth.disabled = true;

  let sectionRestart = document.getElementById("restart");
  sectionRestart.style.display = "block";
}

function restartGame() {
  location.reload();
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", initGame);
