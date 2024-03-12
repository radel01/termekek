import { GYUMOLCSOK } from "./adatok.js";
const vasarolt = [];

// 1. feladat
function letrehozTablazat(lista) {
  let txt = `<table> `;
  for (let index = 0; index < lista.length; index++) {
    txt += `
        <tr>
          <td class = "gyumolcs">${lista[index].nev}</td>
          <td>${lista[index].tomeg}</td>
          <td>${lista[index].ar}</td>
        </tr>
        `;
  }
  txt += `</table>`;
  return txt;
}

const TABLAZAT = document.getElementById("feladat_1");
TABLAZAT.innerHTML = letrehozTablazat(GYUMOLCSOK);

// 2. feladat
function arOsszesit(lista) {
  let osszAr = 0;
  for (let index = 0; index < lista.length; index++) {
    osszAr += lista[index].ar;
  }
  return osszAr;
}
function tomegOsszesit(lista) {
  let osszTomeg = 0;
  for (let index = 0; index < lista.length; index++) {
    osszTomeg += lista[index].tomeg;
  }
  return osszTomeg;
}
const OSSZESITO = document.getElementById("feladat_2");
OSSZESITO.innerHTML = `A gyümölcsök súlya összesen: ${tomegOsszesit(
  GYUMOLCSOK
)} g<br>A gyümölcsök ára összesen: ${arOsszesit(GYUMOLCSOK)} ft`;

// 3. feladat
const VASAROL = document.getElementById("feladat_3");
const gyumolcsELEM = document.querySelectorAll(".gyumolcs");

function vasarol() {
  gyumolcsELEM.forEach(gyumolcs => {
    gyumolcs.addEventListener("click", kattintas);
  });

  function kattintas(event) {
    if (!vasarolt.includes(event.target.innerHTML)) {
      vasarolt.push(event.target.innerHTML);
      console.log(vasarolt);

      VASAROL.innerHTML = `${vasarolt} `;
    }
  }
}
vasarol();

// 4. feladat
const gombElem= document.getElementById("feladat_4");
gombElem.innerHTML="<input type='button' value='Töröl'>"

gombElem.addEventListener("click", torolEsemeny);

function torolEsemeny() {
  for (let index = 0; index <= vasarolt.length; index++) {
    vasarolt.pop() 
  }
  vasarolt.pop()
  VASAROL.innerHTML = `${vasarolt} `;
}
