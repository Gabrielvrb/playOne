document.addEventListener("DOMContentLoaded", function() {
    const jeux = [
        { titre: "Fifa 25", description: "FIFA 25 est la dernière édition de la célèbre série de jeux de football. Avec de nouveaux modes et une meilleure IA, c'est le jeu idéal pour les amateurs de football." },
        { titre: "Valorant", description: "Valorant est un jeu de tir tactique en équipe, où chaque agent a des pouvoirs uniques. Jouez avec des amis pour dominer les adversaires dans des matchs stratégiques." },
        { titre: "Bo6", description: "Call of Duty: Black Ops 6 propose une expérience de guerre moderne avec des graphismes époustouflants, des armes variées et des cartes dynamiques." },
        { titre: "Super Smash Bros", description: "Super Smash Bros est un jeu de combat crossover où des personnages de diverses franchises s'affrontent dans des arènes uniques et excitantes." },
        { titre: "Overwatch 2", description: "Overwatch 2 est un jeu de tir multijoueur qui met l'accent sur des héros aux capacités uniques. Teamplay et stratégie sont la clé pour gagner." },
        { titre: "GTA 5", description: "Grand Theft Auto V vous plonge dans un monde ouvert où vous pouvez commettre des crimes, explorer la ville et vivre des aventures dans un environnement dynamique." }
    ];
    // Obtenir toutes les cartes de jeu
    const cartes = document.querySelectorAll(".carte");
    

    // Ajouter des événements pour chaque carte
    cartes.forEach(carte => {
        // Récupérer la description du jeu en utilisant le titre
        const titre = carte.querySelector(".titre").textContent;
        const jeu = jeux.find(j => j.titre === titre);

        if (jeu) {
            const descriptionElement = document.createElement("p");
            descriptionElement.classList.add("description");
            descriptionElement.textContent = jeu.description;
            descriptionElement.style.display = "none";
            carte.appendChild(descriptionElement);

            // Afficher la description au survol
            carte.addEventListener("mouseover", () => {
                descriptionElement.style.display = "block";
            });

            // Masquer la description lorsque la souris quitte
            carte.addEventListener("mouseout", () => {
                descriptionElement.style.display = "none";
            });
        }
    });
});

