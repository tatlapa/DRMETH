// Déclare les boutons

const btnMeth = document.getElementById("meth");
const btnMoney = document.getElementById("money");

// Déclare une variable pour stocker le nombre
let compteurMeth = 0;
let compteurMoney = 0;
let compteurPurity = 0;

document.getElementById("info1").innerHTML = compteurMeth + "G";
document.getElementById("info2").innerHTML = compteurMoney + "$";
document.getElementById("info3").innerHTML = compteurPurity + "%";

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
    compteurMoney++;
  }
  document.getElementById("info1").innerHTML = compteurMeth + "G";
  document.getElementById("info2").innerHTML = compteurMoney + "$";
});

const btnCol1 = document.getElementById("col1");
const btnCol2 = document.getElementById("col2");
const btnCol3 = document.getElementById("col3");
const btnCol4 = document.getElementById("col4");

btnCol1.addEventListener("click", function () {
  line1.style.display = "block";
  line2.style.display = "block";
  line3.style.display = "block";
  line4.style.display = "block";
  line5.style.display = "block";
  line6.style.display = "block";
  line7.style.display = "block";
  line8.style.display = "block";
  line9.style.display = "block";
  line10.style.display = "block";
  line11.style.display = "block";
  line12.style.display = "block";
  line01.style.display = "none";
  line02.style.display = "none";
  line03.style.display = "none";
  line04.style.display = "none";
  line05.style.display = "none";
  line001.style.display = "none";
  line002.style.display = "none";
  line003.style.display = "none";
  line004.style.display = "none";
  line005.style.display = "none";
  line006.style.display = "none";
  line007.style.display = "none";
  line008.style.display = "none";
  line009.style.display = "none";
  line0010.style.display = "none";
  line0011.style.display = "none";
  line0012.style.display = "none";
  line0001.style.display = "none";
  btnCol1.style.backgroundColor = "blue";
  btnCol2.style.backgroundColor = "grey";
  btnCol3.style.backgroundColor = "grey";
  btnCol4.style.backgroundColor = "grey";
});

btnCol2.addEventListener("click", function () {
  line1.style.display = "none";
  line2.style.display = "none";
  line3.style.display = "none";
  line4.style.display = "none";
  line5.style.display = "none";
  line6.style.display = "none";
  line7.style.display = "none";
  line8.style.display = "none";
  line9.style.display = "none";
  line10.style.display = "none";
  line11.style.display = "none";
  line12.style.display = "none";
  line01.style.display = "block";
  line02.style.display = "block";
  line03.style.display = "block";
  line04.style.display = "block";
  line05.style.display = "block";
  line001.style.display = "none";
  line002.style.display = "none";
  line003.style.display = "none";
  line004.style.display = "none";
  line005.style.display = "none";
  line006.style.display = "none";
  line007.style.display = "none";
  line008.style.display = "none";
  line009.style.display = "none";
  line0010.style.display = "none";
  line0011.style.display = "none";
  line0012.style.display = "none";
  line0001.style.display = "none";
  btnCol1.style.backgroundColor = "grey";
  btnCol2.style.backgroundColor = "blue";
  btnCol3.style.backgroundColor = "grey";
  btnCol4.style.backgroundColor = "grey";
});

btnCol3.addEventListener("click", function () {
  line1.style.display = "none";
  line2.style.display = "none";
  line3.style.display = "none";
  line4.style.display = "none";
  line5.style.display = "none";
  line6.style.display = "none";
  line7.style.display = "none";
  line8.style.display = "none";
  line9.style.display = "none";
  line10.style.display = "none";
  line11.style.display = "none";
  line12.style.display = "none";
  line01.style.display = "none";
  line02.style.display = "none";
  line03.style.display = "none";
  line04.style.display = "none";
  line05.style.display = "none";
  line001.style.display = "block";
  line002.style.display = "block";
  line003.style.display = "block";
  line004.style.display = "block";
  line005.style.display = "block";
  line006.style.display = "block";
  line007.style.display = "block";
  line008.style.display = "block";
  line009.style.display = "block";
  line0010.style.display = "block";
  line0011.style.display = "block";
  line0012.style.display = "block";
  line0001.style.display = "none";
  btnCol1.style.backgroundColor = "grey";
  btnCol2.style.backgroundColor = "grey";
  btnCol3.style.backgroundColor = "blue";
  btnCol4.style.backgroundColor = "grey";
});

btnCol4.addEventListener("click", function () {
  line1.style.display = "none";
  line2.style.display = "none";
  line3.style.display = "none";
  line4.style.display = "none";
  line5.style.display = "none";
  line6.style.display = "none";
  line7.style.display = "none";
  line8.style.display = "none";
  line9.style.display = "none";
  line10.style.display = "none";
  line11.style.display = "none";
  line12.style.display = "none";
  line01.style.display = "none";
  line02.style.display = "none";
  line03.style.display = "none";
  line04.style.display = "none";
  line05.style.display = "none";
  line001.style.display = "none";
  line002.style.display = "none";
  line003.style.display = "none";
  line004.style.display = "none";
  line005.style.display = "none";
  line006.style.display = "none";
  line007.style.display = "none";
  line008.style.display = "none";
  line009.style.display = "none";
  line0010.style.display = "none";
  line0011.style.display = "none";
  line0012.style.display = "none";
  line0001.style.display = "block";
  btnCol1.style.backgroundColor = "grey";
  btnCol2.style.backgroundColor = "grey";
  btnCol3.style.backgroundColor = "grey";
  btnCol4.style.backgroundColor = "blue";
});
