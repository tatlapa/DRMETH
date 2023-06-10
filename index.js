// Déclare les boutons
const btnMeth = document.getElementById("meth");
const btnMoney = document.getElementById("money");
const btnDealer = document.getElementById("dealer");
const btnChemist1 = document.getElementById("chemist1");
const btnTrailer = document.getElementById("trailer");

// Déclare une variable pour stocker le nombre
let compteurMeth = 0;
let compteurMoney = 0;
let compteurPurity = 0;
let compteurDealer = 0;
let compteurChemist1 = 0;
let maxDealer = 1000;
let maxChemist1 = 5;
let methSec = 0;
let moneySec = 0;

updateButtonColorDealer();
updateButtonColorChemist1();
updateButtonColorTrailer();

document.getElementById("info1").innerHTML = compteurMeth + "G";
document.getElementById("info2").innerHTML = compteurMoney + "$";
document.getElementById("info3").innerHTML = compteurPurity + "%";
document.getElementById("info01").innerHTML = methSec + "/SEC";
document.getElementById("info02").innerHTML = moneySec + "/SEC";

function updateCompteurChemist1() {
  if (compteurChemist1 > maxChemist1) {
    compteurChemist1 = maxChemist1;
  } else if (compteurChemist1 < 0) {
    compteurChemist1 = 0;
  }
}

function updateCompteurDealer() {
  if (compteurDealer > maxDealer) {
    compteurDealer = maxDealer;
  } else if (compteurDealer < 0) {
    compteurDealer = 0;
  }
}

function incrementMethSec() {
  compteurMeth += methSec;
  document.getElementById("info1").innerHTML = compteurMeth + "G";
}

setInterval(incrementMethSec, 100);

function incrementMoneySec() {
  compteurMoney += moneySec;
  document.getElementById("info2").innerHTML = compteurMoney + "$";

  if (moneySec > 0) {
    let decrementMeth = moneySec / 100;
    if (decrementMeth > compteurMeth) {
      decrementMeth = compteurMeth; // Vérifie si decrementMeth est supérieur à compteurMeth
    }
    compteurMeth -= decrementMeth;
    document.getElementById("info1").innerHTML = compteurMeth + "G";
  }
}

setInterval(incrementMoneySec, 100);

// Fonction pour mettre à jour la couleur du bouton DEALER
function updateButtonColorDealer() {
  if (compteurMoney >= 1000) {
    btnDealer.style.backgroundColor = "green";
  } else {
    btnDealer.style.backgroundColor = "grey";
  }
}

// Fonction pour mettre à jour la couleur du bouton chemist1
function updateButtonColorChemist1() {
  if (compteurMoney >= 500 && compteurChemist1 < maxChemist1) {
    btnChemist1.style.backgroundColor = "green";
  } else {
    btnChemist1.style.backgroundColor = "grey";
  }
}

// Fonction pour mettre à jour la couleur du bouton Trailer
function updateButtonColorTrailer() {
  if (compteurMoney >= 2000) {
    btnTrailer.style.backgroundColor = "green";
  } else {
    btnTrailer.style.backgroundColor = "blue";
  }
}

// Récupère le bouton et ajoute un événement de clic
btnMeth.addEventListener("click", function () {
  // Incrémente la variable compteur
  compteurMeth++;
  document.getElementById("info1").innerHTML = compteurMeth + "G";
});

btnMoney.addEventListener("click", function () {
  // Décrémente meth et incrémente money
  compteurMeth--;
  if (compteurMeth <= 0) {
    compteurMeth = 0;
  } else {
    compteurMoney += 20;
  }
  document.getElementById("info1").innerHTML = compteurMeth + "G";
  document.getElementById("info2").innerHTML = compteurMoney + "$";

  // Mettre à jour la couleur du bouton après l'incrémentation
  updateButtonColorDealer();
  updateButtonColorChemist1();
  updateButtonColorTrailer();
});

btnDealer.addEventListener("click", function () {
  if (compteurMoney >= 1000 && btnDealer.style.backgroundColor === "green") {
    compteurMoney -= 1000;
    document.getElementById("info2").innerHTML = compteurMoney + "$";

    compteurDealer++; // Ajoute +1 au compteur compteurDealer
    updateCompteurDealer();

    document.getElementById("nbdealer").innerHTML = compteurDealer; // Met à jour l'affichage du compteur compteurDealer

    // Met à jour le texte de la balise HTML avec le compteurDealer
    document.getElementById("nbdealer").innerHTML =
      compteurDealer + "/" + maxDealer;

    moneySec += 10;
    document.getElementById("info02").innerHTML = moneySec + "/SEC";
  }
});

btnChemist1.addEventListener("click", function () {
  if (compteurMoney >= 500 && btnChemist1.style.backgroundColor === "green") {
    compteurMoney -= 500;
    document.getElementById("info2").innerHTML = compteurMoney + "$";

    compteurChemist1++; // Ajoute +1 au compteur compteurChemist1
    updateCompteurChemist1();

    document.getElementById("nbchemist1").innerHTML = compteurChemist1; // Met à jour l'affichage du compteur compteurChemist1

    // Met à jour le texte de la balise HTML avec le compteurChemist1
    document.getElementById("nbchemist1").innerHTML =
      compteurChemist1 + "/" + maxChemist1;

    methSec += 2;
    document.getElementById("info01").innerHTML = methSec + "/SEC";
  }
});

btnTrailer.addEventListener("click", function () {
  if (btnTrailer.style.backgroundColor === "green") {
    var rectangle02 = document.getElementsByClassName("rectangle02")[0];
    rectangle02.style.display = "block";
  }
});

// Fonction appelée lorsque l'un des boutons est cliqué
function filtrerElements(event) {
  // Réinitialiser la visibilité de tous les éléments
  const hidenElements = document.querySelectorAll(
    ".container .sidebar .selector .table .tbody"
  );
  for (let i = 0; i < hidenElements.length; i++) {
    hidenElements[i].style.display = "none";
  }

  // Afficher les éléments correspondant au bouton cliqué
  const btnId = event.target.id;
  if (btnId === "col1") {
    console.log("fedp");
    const trElements = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody, " +
        ".container .sidebar .selector .table .tbody .tr1, " +
        ".container .sidebar .selector .table .tbody .tr2, " +
        ".container .sidebar .selector .table .tbody .tr3," +
        ".container .sidebar .selector .table .tbody .tr4, " +
        ".container .sidebar .selector .table .tbody .tr5, " +
        ".container .sidebar .selector .table .tbody .tr6, " +
        ".container .sidebar .selector .table .tbody .tr7, " +
        ".container .sidebar .selector .table .tbody .tr8, " +
        ".container .sidebar .selector .table .tbody .tr9," +
        ".container .sidebar .selector .table .tbody .tr10, " +
        ".container .sidebar .selector .table .tbody .tr11," +
        ".container .sidebar .selector .table .tbody .tr12"
    );
    for (let j = 0; j < trElements.length; j++) {
      trElements[j].style.display = "flex";
    }
  } else if (btnId === "col2") {
    const trElements = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody, " +
        ".container .sidebar .selector .table .tbody .tr01, " +
        ".container .sidebar .selector .table .tbody .tr02, " +
        ".container .sidebar .selector .table .tbody .tr03, " +
        ".container .sidebar .selector .table .tbody .tr04, " +
        ".container .sidebar .selector .table .tbody .tr05"
    );
    for (let j = 0; j < trElements.length; j++) {
      trElements[j].style.display = "flex";
    }
  } else if (btnId === "col3") {
    const trElements = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody, " +
        ".container .sidebar .selector .table .tbody .tr001, " +
        ".container .sidebar .selector .table .tbody .tr002, " +
        ".container .sidebar .selector .table .tbody .tr003, " +
        ".container .sidebar .selector .table .tbody .tr004, " +
        ".container .sidebar .selector .table .tbody .tr005, " +
        ".container .sidebar .selector .table .tbody .tr006, " +
        ".container .sidebar .selector .table .tbody .tr007, " +
        ".container .sidebar .selector .table .tbody .tr008, " +
        ".container .sidebar .selector .table .tbody .tr009, " +
        ".container .sidebar .selector .table .tbody .tr0010, " +
        ".container .sidebar .selector .table .tbody .tr0011, " +
        ".container .sidebar .selector .table .tbody .tr0012"
    );
    for (let j = 0; j < trElements.length; j++) {
      trElements[j].style.display = "flex";
    }
  } else if (btnId === "col4") {
    const trElements = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody, " +
        ".container .sidebar .selector .table .tbody .tr0001"
    );
    for (let j = 0; j < trElements.length; j++) {
      trElements[j].style.display = "flex";
    }
  }
}

// Appeler la fonction filtrerElements avec l'ID "col1" lors du chargement de la page
window.addEventListener("DOMContentLoaded", function () {
  const loadCol1 = { target: { id: "col1" } };
  filtrerElements(loadCol1);
});

const btnCol1 = document.getElementById("col1");
const btnCol2 = document.getElementById("col2");
const btnCol3 = document.getElementById("col3");
const btnCol4 = document.getElementById("col4");
// Ajout d'un écouteur d'événement sur chaque bouton pour appeler la fonction filtrerElements

btnCol1.addEventListener("click", filtrerElements);
btnCol2.addEventListener("click", filtrerElements);
btnCol3.addEventListener("click", filtrerElements);
btnCol4.addEventListener("click", filtrerElements);

/*

btnCol1.addEventListener("click", function () {
  tr1.style.display = "flex";
  tr2.style.display = "flex";
  tr3.style.display = "flex";
  tr4.style.display = "flex";
  tr5.style.display = "flex";
  tr6.style.display = "flex";
  tr7.style.display = "flex";
  tr8.style.display = "flex";
  tr9.style.display = "flex";
  tr10.style.display = "flex";
  tr11.style.display = "flex";
  tr12.style.display = "flex";
  tr01.style.display = "none";
  tr02.style.display = "none";
  tr03.style.display = "none";
  tr04.style.display = "none";
  tr05.style.display = "none";
  tr001.style.display = "none";
  tr002.style.display = "none";
  tr003.style.display = "none";
  tr004.style.display = "none";
  tr005.style.display = "none";
  tr006.style.display = "none";
  tr007.style.display = "none";
  tr008.style.display = "none";
  tr009.style.display = "none";
  tr0010.style.display = "none";
  tr0011.style.display = "none";
  tr0012.style.display = "none";
  tr0001.style.display = "none";
  btnCol1.style.backgroundColor = "blue";
  btnCol2.style.backgroundColor = "grey";
  btnCol3.style.backgroundColor = "grey";
  btnCol4.style.backgroundColor = "grey";
});

btnCol2.addEventListener("click", function () {
  tr1.style.display = "none";
  tr2.style.display = "none";
  tr3.style.display = "none";
  tr4.style.display = "none";
  tr5.style.display = "none";
  tr6.style.display = "none";
  tr7.style.display = "none";
  tr8.style.display = "none";
  tr9.style.display = "none";
  tr10.style.display = "none";
  tr11.style.display = "none";
  tr12.style.display = "none";
  tr01.style.display = "block";
  tr02.style.display = "block";
  tr03.style.display = "block";
  tr04.style.display = "block";
  tr05.style.display = "block";
  tr001.style.display = "none";
  tr002.style.display = "none";
  tr003.style.display = "none";
  tr004.style.display = "none";
  tr005.style.display = "none";
  tr006.style.display = "none";
  tr007.style.display = "none";
  tr008.style.display = "none";
  tr009.style.display = "none";
  tr0010.style.display = "none";
  tr0011.style.display = "none";
  tr0012.style.display = "none";
  tr0001.style.display = "none";
  btnCol1.style.backgroundColor = "grey";
  btnCol2.style.backgroundColor = "blue";
  btnCol3.style.backgroundColor = "grey";
  btnCol4.style.backgroundColor = "grey";
});

btnCol3.addEventListener("click", function () {
  tr1.style.display = "none";
  tr2.style.display = "none";
  tr3.style.display = "none";
  tr4.style.display = "none";
  tr5.style.display = "none";
  tr6.style.display = "none";
  tr7.style.display = "none";
  tr8.style.display = "none";
  tr9.style.display = "none";
  tr10.style.display = "none";
  tr11.style.display = "none";
  tr12.style.display = "none";
  tr01.style.display = "none";
  tr02.style.display = "none";
  tr03.style.display = "none";
  tr04.style.display = "none";
  tr05.style.display = "none";
  tr001.style.display = "block";
  tr002.style.display = "block";
  tr003.style.display = "block";
  tr004.style.display = "block";
  tr005.style.display = "block";
  tr006.style.display = "block";
  tr007.style.display = "block";
  tr008.style.display = "block";
  tr009.style.display = "block";
  tr0010.style.display = "block";
  tr0011.style.display = "block";
  tr0012.style.display = "block";
  tr0001.style.display = "none";
  btnCol1.style.backgroundColor = "grey";
  btnCol2.style.backgroundColor = "grey";
  btnCol3.style.backgroundColor = "blue";
  btnCol4.style.backgroundColor = "grey";
});

btnCol4.addEventListener("click", function () {
  tr1.style.display = "none";
  tr2.style.display = "none";
  tr3.style.display = "none";
  tr4.style.display = "none";
  tr5.style.display = "none";
  tr6.style.display = "none";
  tr7.style.display = "none";
  tr8.style.display = "none";
  tr9.style.display = "none";
  tr10.style.display = "none";
  tr11.style.display = "none";
  tr12.style.display = "none";
  tr01.style.display = "none";
  tr02.style.display = "none";
  tr03.style.display = "none";
  tr04.style.display = "none";
  tr05.style.display = "none";
  tr001.style.display = "none";
  tr002.style.display = "none";
  tr003.style.display = "none";
  tr004.style.display = "none";
  tr005.style.display = "none";
  tr006.style.display = "none";
  tr007.style.display = "none";
  tr008.style.display = "none";
  tr009.style.display = "none";
  tr0010.style.display = "none";
  tr0011.style.display = "none";
  tr0012.style.display = "none";
  tr0001.style.display = "block";
  btnCol1.style.backgroundColor = "grey";
  btnCol2.style.backgroundColor = "grey";
  btnCol3.style.backgroundColor = "grey";
  btnCol4.style.backgroundColor = "blue";
});
*/
