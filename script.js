function filterAnimals() {
    const select = document.getElementById("animal-select");
    i = 1;
    r = 0;
    for (i=1; i<=4; i++) {
        document.getElementById("img"+i).src = databazeTvoru[r].foto;
        document.getElementById("name"+i).innerHTML = databazeTvoru[r].jmeno;
        document.getElementById("species"+i).innerHTML = databazeTvoru[r].druh;
        document.getElementById("description"+i).innerHTML = databazeTvoru[r].popis;
        color = druhy.indexOf(databazeTvoru[r].druh);
        document.getElementById("species"+i).style.color = barvy[color];
        r++;
    }
}