function initGame() {
  let btnPetPlayer = document.getElementById("btn-pet");
  btnPetPlayer.addEventListener("click", selectPetPlayer);
}

function selectPetPlayer() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");

  if (inputHipodoge.checked) {
    alert("Usted ha seleccionado hipodoge");
  } else if(inputCapipepo.checked) {
    alert("Usted ha seleccionado capipepo");
  } else if (inputRatigueya.checked) {
    alert("Usted ha seleccionado ratigueya");
  } else{
    alert("Usted no ha seleccionado ninguna mascota")
  }
}



window.addEventListener("load", initGame);
