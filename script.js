let input=""; // Chaîne de caractères vides

function ShowValue(btn) { // Prends la valeur du bouton
input += btn.value; 

console.log(input);
document.getElementById("output").innerHTML = input; // Permet de saisir dans quickmath
}
// #1

// Fonction qui permet de faire le calcul avec =

function quickMath(){
document.getElementById("output").innerHTML = eval(input);
}

function Reset() { // Prend la valeur du bouton
document.getElementById("output").innerHTML = "0"
input = ""; // Equivaut à 0
}

function rem1(btn){ //Remove
input  = input.replace(input.slice(-1), ""); 
document.getElementById("output").innerHTML = input; // Rends l'input - la dernière chaîne de caractères
}

//////////////////////////////// COMMENTAIRES /////////////////////////////////
// La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
// innerHTML = change l'HTML
// #1 - On prend l'élément par son ID > on lui rajoute via innerhtml la valeur d'input, qui prend 
// la valeur du bouton qu'on lui donne, cf : console.log
// Input.slice = Prend le dernier élément de la string = zone qui va être remplacée
// Chaîne de caractères ("") = ce par quoi ça va être remplacé = erase