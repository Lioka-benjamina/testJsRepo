let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Incrémente le compte de 1
  displayCount();
  checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Affiche le compte dans l'HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations !");
  } else if (count === 20) {
    alert("Votre publication Instagram a gagné 20 abonnés ! Continuez comme ça !");
  }else if (count === 0) {
    alert("Votre publication Instagram est réinitialisé !");
  }
}

function renisialisingCount(){
    count = 0
    displayCount();
    checkCountValue()
}