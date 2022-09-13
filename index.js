/*
let livre = {
    titre: "Harry Potter et le Prince de sang-mêlé",
    auteur: "J.K. Rowling",
    pages: 720,
    disponible: true
}
let titreDuLivre = livre.titre;
let nbreDePages = livre.pages;

console.log(livre.disponible)
*/


class Livre {
    constructor(titre, auteur, pages) {
        this.titre = titre;
        this.auteur = auteur;
        this.pages = pages;
    }
}

let monLivre = new Livre("La planète des singes", "Pierre Boulle", 274);
console.log(monLivre.auteur)


/*//Cette ligne crée l'objet suivant :
{
    title: "La planète des singes",
    author: "Pierre Boullon",
    pages: 274
}*/

