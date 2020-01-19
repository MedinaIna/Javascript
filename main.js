var solution = Math.floor(Math.random() * 100) + 1;
console.log(solution);
var nombre = Number(prompt("Entrez un nombre"));
var trouve = false;
var tentative = 1;
while(trouve === false && tentative < 7){
    if(nombre === solution){
        alert("Vous avez deviné le nombre!");
        trouve = true;
    }
    else if(nombre < solution){
        alert("Votre nombre est plus petit");
        nombre = Number(prompt("Entrez un nombre"));
        tentative++;
    }
    else if(nombre > solution){
        alert("Votre nombre est plus grand");
        nombre = Number(prompt("Entrez un nombre"));
        tentative++;
    }
    else{
        alert("Ceci n'est pas un nombre!");
        nombre = Number(prompt("Entrez un nombre"));
        tentative++;
    }
}

if (tentative >= 7){
    alert("Vous avez épuisé vos chances!");
}