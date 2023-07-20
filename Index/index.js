// Déclare les boutons
const btnMeth = document.getElementById("meth");
const btnMoney = document.getElementById("money");
const btnPurify1 = document.getElementById("line006");
const btnDealer = document.getElementById("dealer");
const btnChemist1 = document.getElementById("chemist1");
const btnTrailer = document.getElementById("trailer");
const btnSellTrailer = document.getElementById("sellTrailer");

// Déclare une variable pour stocker le nombre
let compteurMeth = 0;
let compteurMoney = 0;
let compteurPurity = 25;
let compteurDealer = 0;
let compteurChemist1 = 0;
let maxDealer = 1000;
let maxChemist1 = 0;
let methSec = 0;
let moneySec = 0;

function updateButtonColorAll() {
  updateButtonColorDealer();
  updateButtonColorChemist1();
  updateButtonColorTrailer();
  updateButtonColorPurify1();
}

document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
document.getElementById("info2").innerHTML = Math.floor(compteurMoney) + "$";
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
  document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
  updateButtonColorAll();
}

setInterval(incrementMethSec, 100);

function incrementMoneySec() {
  document.getElementById("info2").innerHTML = Math.floor(compteurMoney) + "$";
  if ((moneySec > 0) & (compteurMeth > 0)) {
    compteurMoney += moneySec;
    updateButtonColorChemist1();
    let decrementMeth = moneySec / 100;
    if (decrementMeth > compteurMeth) {
      decrementMeth = compteurMeth; // Vérifie si decrementMeth est supérieur à compteurMeth
    }
    compteurMeth -= decrementMeth;
    document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
  }
}

setInterval(incrementMoneySec, 100);

updateButtonColorAll();

// Fonction pour mettre à jour la couleur du bouton Purify1
btnPurify1.style.backgroundColor = "blue";

function updateButtonColorPurify1() {
  if (compteurMeth >= 100000 && btnPurify1.style.backgroundColor === "blue") {
    btnPurify1.style.backgroundColor = "green";
  }
}

btnPurify1.addEventListener("click", function () {
  // Vérifie si l'opération est un succès avec une probabilité de 75%
  if (btnPurify1.style.backgroundColor === "green" && Math.random() >= 0.25) {
    compteurPurity += 15;
    compteurMeth -= 100000;
    document.getElementById("info3").innerHTML = compteurPurity + "%";
    document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
    btnPurify1.style.backgroundColor = "grey";
  } else if (
    btnPurify1.style.backgroundColor === "green" &&
    Math.random() >= 0.75
  ) {
    compteurMeth -= 100000;
    document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
    btnPurify1.style.backgroundColor = "red";
    setTimeout(function () {
      btnPurify1.style.backgroundColor = "blue";
    }, 1200); // Temporisation de 1200 millisecondes (1,2 seconde)
  }
});

btnDealer.addEventListener("click", function () {
  if (
    (btnDealer.style.backgroundColor === "green" &&
      btnPurify1.style.backgroundColor === "blue") ||
    btnPurify1.style.backgroundColor === "green"
  ) {
    compteurMoney -= 1000;

    compteurDealer++; // Ajoute +1 au compteur compteurDealer
    updateButtonColorAll();

    document.getElementById("nbdealer").innerHTML = compteurDealer; // Met à jour l'affichage du compteur compteurDealer

    // Met à jour le texte de la balise HTML avec le compteurDealer
    document.getElementById("nbdealer").innerHTML =
      compteurDealer + "/" + maxDealer;

    moneySec += 10;
    document.getElementById("info02").innerHTML = moneySec + "/SEC";
    document.getElementById("info2").innerHTML =
      Math.floor(compteurMoney) + "$";
  } else if (
    btnDealer.style.backgroundColor === "green" &&
    btnPurify1.style.backgroundColor === "grey"
  ) {
    compteurMoney -= 1000;
    document.getElementById("info2").innerHTML =
      Math.floor(compteurMoney) + "$";

    compteurDealer++;
    updateButtonColorAll();

    document.getElementById("nbdealer").innerHTML = compteurDealer;

    document.getElementById("nbdealer").innerHTML =
      compteurDealer + "/" + maxDealer;
    moneySec += 10 * 1.15;
    document.getElementById("info02").innerHTML = moneySec + "/SEC";
  }
});

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

btnMeth.addEventListener("click", function () {
  // Incrémente la variable compteurMeth
  compteurMeth++;
  document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
  updateButtonColorAll();
});

btnMoney.addEventListener("click", function () {
  // Décrémente meth et incrémente money
  compteurMeth--;
  if (compteurMeth <= 0) {
    compteurMeth = 0;
  } else {
    compteurMoney += 20;
  }
  document.getElementById("info1").innerHTML = Math.floor(compteurMeth) + "G";
  document.getElementById("info2").innerHTML = Math.floor(compteurMoney) + "$";

  // Mettre à jour la couleur du bouton après l'incrémentation
  updateButtonColorAll();
});

btnChemist1.addEventListener("click", function () {
  if (compteurMoney >= 500 && btnChemist1.style.backgroundColor === "green") {
    compteurMoney -= 500;
    document.getElementById("info2").innerHTML =
      Math.floor(compteurMoney) + "$";

    compteurChemist1++; // Ajoute +1 au compteur compteurChemist1
    updateButtonColorAll();

    document.getElementById("nbchemist1").innerHTML = compteurChemist1; // Met à jour l'affichage du compteur compteurChemist1

    document.getElementById("nbchemist1").innerHTML =
      compteurChemist1 + "/" + maxChemist1;

    methSec++;
    document.getElementById("info01").innerHTML = methSec + "/SEC";
  }
});

let compteurTrailer = 0;

const rectangle02 = document.getElementsByClassName("rectangle02")[0];

btnTrailer.addEventListener("click", function () {
  if (btnTrailer.style.backgroundColor === "green") {
    compteurMoney -= 2000;
    rectangle02.style.display = "flex";
    maxChemist1 += 5;
    // Met à jour le texte de la balise HTML avec le compteurChemist1
    document.getElementById("nbchemist1").innerHTML =
      compteurChemist1 + "/" + maxChemist1;
    compteurTrailer++;
    document.getElementById("nbTrailer").innerHTML = compteurTrailer;
    updateButtonColorAll();
  }
});

btnSellTrailer.addEventListener("click", function () {
  if (compteurTrailer > 0) {
    compteurTrailer = 0;
    rectangle02.style.display = "none";
    compteurMoney += 1750;
  }
});

updateButtonColorAll();
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
    const trElementsNone = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody .tr01," +
        ".container .sidebar .selector .table .tbody .tr02," +
        ".container .sidebar .selector .table .tbody .tr03," +
        ".container .sidebar .selector .table .tbody .tr04," +
        ".container .sidebar .selector .table .tbody .tr05, " +
        ".container .sidebar .selector .table .tbody .tr06, " +
        ".container .sidebar .selector .table .tbody .tr07, " +
        ".container .sidebar .selector .table .tbody .tr08, " +
        ".container .sidebar .selector .table .tbody .tr09, " +
        ".container .sidebar .selector .table .tbody .tr010, " +
        ".container .sidebar .selector .table .tbody .tr011, " +
        ".container .sidebar .selector .table .tbody .tr012, " +
        ".container .sidebar .selector .table .tbody .tr001," +
        ".container .sidebar .selector .table .tbody .tr002," +
        ".container .sidebar .selector .table .tbody .tr003," +
        ".container .sidebar .selector .table .tbody .tr004," +
        ".container .sidebar .selector .table .tbody .tr005," +
        ".container .sidebar .selector .table .tbody .tr006," +
        ".container .sidebar .selector .table .tbody .tr007," +
        ".container .sidebar .selector .table .tbody .tr008," +
        ".container .sidebar .selector .table .tbody .tr009," +
        ".container .sidebar .selector .table .tbody .tr0010," +
        ".container .sidebar .selector .table .tbody .tr0011," +
        ".container .sidebar .selector .table .tbody .tr0012," +
        ".container .sidebar .selector .table .tbody .tr0001," +
        ".container .sidebar .selector .table .tbody .tr0002," +
        ".container .sidebar .selector .table .tbody .tr0003," +
        ".container .sidebar .selector .table .tbody .tr0004," +
        ".container .sidebar .selector .table .tbody .tr0005," +
        ".container .sidebar .selector .table .tbody .tr0006," +
        ".container .sidebar .selector .table .tbody .tr0007," +
        ".container .sidebar .selector .table .tbody .tr0008," +
        ".container .sidebar .selector .table .tbody .tr0009," +
        ".container .sidebar .selector .table .tbody .tr00010," +
        ".container .sidebar .selector .table .tbody .tr00011," +
        ".container .sidebar .selector .table .tbody .tr00012"
    );
    for (let j = 0; j < trElementsNone.length; j++) {
      trElementsNone[j].style.display = "none";
    }

    btnCol1.style.backgroundColor = "blue";
    btnCol2.style.backgroundColor = "grey";
    btnCol3.style.backgroundColor = "grey";
    btnCol4.style.backgroundColor = "grey";
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

    const trElementsNone = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody .tr1,   " +
        ".container .sidebar .selector .table .tbody .tr2, " +
        ".container .sidebar .selector .table .tbody .tr3, " +
        ".container .sidebar .selector .table .tbody .tr4, " +
        ".container .sidebar .selector .table .tbody .tr5, " +
        ".container .sidebar .selector .table .tbody .tr6, " +
        ".container .sidebar .selector .table .tbody .tr7, " +
        ".container .sidebar .selector .table .tbody .tr8, " +
        ".container .sidebar .selector .table .tbody .tr9, " +
        ".container .sidebar .selector .table .tbody .tr10," +
        ".container .sidebar .selector .table .tbody .tr11," +
        ".container .sidebar .selector .table .tbody .tr12, " +
        ".container .sidebar .selector .table .tbody .tr001," +
        ".container .sidebar .selector .table .tbody .tr002," +
        ".container .sidebar .selector .table .tbody .tr003," +
        ".container .sidebar .selector .table .tbody .tr004," +
        ".container .sidebar .selector .table .tbody .tr005," +
        ".container .sidebar .selector .table .tbody .tr006," +
        ".container .sidebar .selector .table .tbody .tr007," +
        ".container .sidebar .selector .table .tbody .tr008," +
        ".container .sidebar .selector .table .tbody .tr009," +
        ".container .sidebar .selector .table .tbody .tr0010," +
        ".container .sidebar .selector .table .tbody .tr0011," +
        ".container .sidebar .selector .table .tbody .tr0012," +
        ".container .sidebar .selector .table .tbody .tr0001," +
        ".container .sidebar .selector .table .tbody .tr0002," +
        ".container .sidebar .selector .table .tbody .tr0003," +
        ".container .sidebar .selector .table .tbody .tr0004," +
        ".container .sidebar .selector .table .tbody .tr0005," +
        ".container .sidebar .selector .table .tbody .tr0006," +
        ".container .sidebar .selector .table .tbody .tr0007," +
        ".container .sidebar .selector .table .tbody .tr0008," +
        ".container .sidebar .selector .table .tbody .tr0009," +
        ".container .sidebar .selector .table .tbody .tr00010," +
        ".container .sidebar .selector .table .tbody .tr00011," +
        ".container .sidebar .selector .table .tbody .tr00012"
    );

    for (let j = 0; j < trElementsNone.length; j++) {
      trElementsNone[j].style.display = "none";
    }

    const trElementsHidden = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody .tr06,   " +
        ".container .sidebar .selector .table .tbody .tr07,   " +
        ".container .sidebar .selector .table .tbody .tr08,   " +
        ".container .sidebar .selector .table .tbody .tr09,   " +
        ".container .sidebar .selector .table .tbody .tr010,   " +
        ".container .sidebar .selector .table .tbody .tr011,   " +
        ".container .sidebar .selector .table .tbody .tr012  "
    );

    for (let j = 0; j < trElementsHidden.length; j++) {
      trElementsHidden[j].style.display = "flex";
    }

    btnCol1.style.backgroundColor = "grey";
    btnCol2.style.backgroundColor = "blue";
    btnCol3.style.backgroundColor = "grey";
    btnCol4.style.backgroundColor = "grey";
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
    const trElementsNone = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody .tr1,   " +
        ".container .sidebar .selector .table .tbody .tr2, " +
        ".container .sidebar .selector .table .tbody .tr3, " +
        ".container .sidebar .selector .table .tbody .tr4, " +
        ".container .sidebar .selector .table .tbody .tr5, " +
        ".container .sidebar .selector .table .tbody .tr6, " +
        ".container .sidebar .selector .table .tbody .tr7, " +
        ".container .sidebar .selector .table .tbody .tr8, " +
        ".container .sidebar .selector .table .tbody .tr9, " +
        ".container .sidebar .selector .table .tbody .tr10," +
        ".container .sidebar .selector .table .tbody .tr11," +
        ".container .sidebar .selector .table .tbody .tr12, " +
        ".container .sidebar .selector .table .tbody .tr01," +
        ".container .sidebar .selector .table .tbody .tr02," +
        ".container .sidebar .selector .table .tbody .tr03," +
        ".container .sidebar .selector .table .tbody .tr04," +
        ".container .sidebar .selector .table .tbody .tr05, " +
        ".container .sidebar .selector .table .tbody .tr06, " +
        ".container .sidebar .selector .table .tbody .tr07, " +
        ".container .sidebar .selector .table .tbody .tr08, " +
        ".container .sidebar .selector .table .tbody .tr09, " +
        ".container .sidebar .selector .table .tbody .tr010, " +
        ".container .sidebar .selector .table .tbody .tr011, " +
        ".container .sidebar .selector .table .tbody .tr012, " +
        ".container .sidebar .selector .table .tbody .tr0001," +
        ".container .sidebar .selector .table .tbody .tr0002," +
        ".container .sidebar .selector .table .tbody .tr0003," +
        ".container .sidebar .selector .table .tbody .tr0004," +
        ".container .sidebar .selector .table .tbody .tr0005," +
        ".container .sidebar .selector .table .tbody .tr0006," +
        ".container .sidebar .selector .table .tbody .tr0007," +
        ".container .sidebar .selector .table .tbody .tr0008," +
        ".container .sidebar .selector .table .tbody .tr0009," +
        ".container .sidebar .selector .table .tbody .tr00010," +
        ".container .sidebar .selector .table .tbody .tr00011," +
        ".container .sidebar .selector .table .tbody .tr00012"
    );
    for (let j = 0; j < trElementsNone.length; j++) {
      trElementsNone[j].style.display = "none";
    }

    btnCol1.style.backgroundColor = "grey";
    btnCol2.style.backgroundColor = "grey";
    btnCol3.style.backgroundColor = "blue";
    btnCol4.style.backgroundColor = "grey";
  } else if (btnId === "col4") {
    const trElements = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody, " +
        ".container .sidebar .selector .table .tbody .tr0001"
    );
    for (let j = 0; j < trElements.length; j++) {
      trElements[j].style.display = "flex";
    }

    const trElementsNone = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody .tr1,   " +
        ".container .sidebar .selector .table .tbody .tr2, " +
        ".container .sidebar .selector .table .tbody .tr3, " +
        ".container .sidebar .selector .table .tbody .tr4, " +
        ".container .sidebar .selector .table .tbody .tr5, " +
        ".container .sidebar .selector .table .tbody .tr6, " +
        ".container .sidebar .selector .table .tbody .tr7, " +
        ".container .sidebar .selector .table .tbody .tr8, " +
        ".container .sidebar .selector .table .tbody .tr9, " +
        ".container .sidebar .selector .table .tbody .tr10," +
        ".container .sidebar .selector .table .tbody .tr11," +
        ".container .sidebar .selector .table .tbody .tr12," +
        ".container .sidebar .selector .table .tbody .tr01," +
        ".container .sidebar .selector .table .tbody .tr02," +
        ".container .sidebar .selector .table .tbody .tr03," +
        ".container .sidebar .selector .table .tbody .tr04," +
        ".container .sidebar .selector .table .tbody .tr05," +
        ".container .sidebar .selector .table .tbody .tr06," +
        ".container .sidebar .selector .table .tbody .tr07," +
        ".container .sidebar .selector .table .tbody .tr08," +
        ".container .sidebar .selector .table .tbody .tr09," +
        ".container .sidebar .selector .table .tbody .tr010," +
        ".container .sidebar .selector .table .tbody .tr011," +
        ".container .sidebar .selector .table .tbody .tr012," +
        ".container .sidebar .selector .table .tbody .tr001," +
        ".container .sidebar .selector .table .tbody .tr002," +
        ".container .sidebar .selector .table .tbody .tr003," +
        ".container .sidebar .selector .table .tbody .tr004," +
        ".container .sidebar .selector .table .tbody .tr005," +
        ".container .sidebar .selector .table .tbody .tr006," +
        ".container .sidebar .selector .table .tbody .tr007," +
        ".container .sidebar .selector .table .tbody .tr008," +
        ".container .sidebar .selector .table .tbody .tr009," +
        ".container .sidebar .selector .table .tbody .tr0010," +
        ".container .sidebar .selector .table .tbody .tr0011," +
        ".container .sidebar .selector .table .tbody .tr0012"
    );
    for (let j = 0; j < trElementsNone.length; j++) {
      trElementsNone[j].style.display = "none";
    }

    const trElementsHidden = document.querySelectorAll(
      ".container .sidebar .selector .table .tbody .tr0002,   " +
        ".container .sidebar .selector .table .tbody .tr0003,   " +
        ".container .sidebar .selector .table .tbody .tr0004,   " +
        ".container .sidebar .selector .table .tbody .tr0005,   " +
        ".container .sidebar .selector .table .tbody .tr0006,   " +
        ".container .sidebar .selector .table .tbody .tr0007,   " +
        ".container .sidebar .selector .table .tbody .tr0008,   " +
        ".container .sidebar .selector .table .tbody .tr0009,   " +
        ".container .sidebar .selector .table .tbody .tr00010,   " +
        ".container .sidebar .selector .table .tbody .tr00011,   " +
        ".container .sidebar .selector .table .tbody .tr00012   "
    );

    for (let j = 0; j < trElementsHidden.length; j++) {
      trElementsHidden[j].style.display = "flex";
    }

    btnCol1.style.backgroundColor = "grey";
    btnCol2.style.backgroundColor = "grey";
    btnCol3.style.backgroundColor = "grey";
    btnCol4.style.backgroundColor = "blue";
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
