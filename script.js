function nahodnyVyberTvoru(pocet, druhFiltr) {
    let kandidati = [];
    for (let i = 0; i < databazeTvoru.length; i++) {
        if (druhFiltr == "vsechna" || databazeTvoru[i].druh == druhFiltr) {
            kandidati.push(databazeTvoru[i]);
        }
    }

    for (let i = kandidati.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = kandidati[i];
        kandidati[i] = kandidati[j];
        kandidati[j] = temp;
    }

    if (pocet > kandidati.length) {
        pocet = kandidati.length;
    }

    return kandidati.slice(0, pocet);
}

function filterAnimals() {
    const select = document.getElementById("animal-select");
    let vybranyDruh = select.value;

    const randomTvori = nahodnyVyberTvoru(4, vybranyDruh);

    let r = 0;
    for (let i=1; i<=4; i++) {
        if (randomTvori[r]) {
            document.getElementById("img"+i).src = randomTvori[r].foto;
            document.getElementById("name"+i).innerHTML = randomTvori[r].jmeno;
            document.getElementById("species"+i).innerHTML = randomTvori[r].druh;
            document.getElementById("description"+i).innerHTML = randomTvori[r].popis;
            let color = druhy.indexOf(randomTvori[r].druh);
            if (color >= 0) {
                document.getElementById("species"+i).style.color = barvy[color];
            } else {
                document.getElementById("species"+i).style.color = "";
            }
        } else {
            document.getElementById("img"+i).src = "";
            document.getElementById("name"+i).innerHTML = "";
            document.getElementById("species"+i).innerHTML = "";
            document.getElementById("description"+i).innerHTML = "";
            document.getElementById("species"+i).style.color = "";
        }
        r++;
    }
}
//zobrazení při spuštění stránky
filterAnimals();