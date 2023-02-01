"use strict";

// alert("Bonjour le monde !");
let nom = "Steve";
console.log(nom);
// récupère le <h1> de la page
const titrePrincipal = document.querySelector("h1");
// titre en jaune
titrePrincipal.style.color = "yellow";

/**
 * Ajoute du style à tous les `<li>` de la page
 */
function styleLi () {

    //récupère tous les <li>
    const elementsDeListe = document.querySelectorAll("li");
    console.log(elementsDeListe);
    elementsDeListe[1].style.color = "red";
    // Boucle qui parcourt et mets un fond jaune à tous les éléments
    for (let i = 0; i < elementsDeListe.length; i++) {
        elementsDeListe[i].style.backgroundColor = "yellow";
    }
    //même chose avec for of pour mettre le texte en gras
    for (let element of elementsDeListe) {
        element.style.fontWeight = "bold";
    }
}

// Écouter l'événement clic sur le <h1>
titrePrincipal.addEventListener("click", styleLi);

// récupère le formulaire
const form = document.querySelector("form");
//récupère la <ol> avec la classe comentaires
const olCommentaires = document.querySelector(".commentaire");
//récupère l'input avec l'id "commentaire"
const inputCommentaire = document.querySelector("#commentaire");
// Écoute l'événement
form.addEventListener("submit", function ajouterCommentaire(event){
    event.preventDefault(); // Stoppe l'envoi du formulaire
    // ajoute le contenu du champ commentaire à la liste
olCommentaires.innerHTML += "<li>" + inputCommentaire.value + "</li>";
// Vide le champ commentaire
inputCommentaire.value = "";
// redonne le focus au champ commentaire
    inputCommentaire.focus();
});