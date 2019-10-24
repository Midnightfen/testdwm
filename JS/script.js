//UTILISATION DU BOUTON POUR CACHER UN PARAGRAPHE DANS L'INDEX

document.querySelector("#discover").addEventListener("click", () => {
    document.querySelector(".hideit").classList.toggle("vanish")
});


//UTILISATION DU MOUSEOVER SUR LE UL DE L'INDEX POUR CHANGER LA COULEUR

document.querySelector(".magic").addEventListener("mouseover", () => {
    document.querySelector(".magic").classList.toggle("hide")
});

document.querySelector(".magic").addEventListener("mouseout", () => {
    document.querySelector(".magic").classList.toggle("hide")
});