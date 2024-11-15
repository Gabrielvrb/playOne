const KEYAPP = "92478ec0daa54320b15197b8b0639ac9"// Votre clé API
const loaderEl = document.getElementById("js.preloader")// Élément pour afficher un loader
const gameList = document.querySelector(".gameList")// Conteneur où les jeux seront affichés
const loadMoreGamesBtn = document.querySelector(".main-button")// Bouton pour charger plus de jeux
let nextGameListUrl = null;// URL pour charger la page suivante de jeux

const url = `https://api.rawg.io/api/games?key=${KEYAPP}&dates=2024-01-01,2024-12-30&ordering=-added`;//API RAWG tu dois récupérer les jeux vidéo entre janvier 2024 et décembre 2024, triés par date d'ajout.

const getPlatformStr = (platforms) => {
  const platformStr = platforms.map(pl => pl.platform.name).join(", ");
  if (platformStr.length > 30) {
      return platformStr.substring(0, 30) + "...";//retour si plus de 30 caractères
  }
  return platformStr;
}

function loadGames(url){
      
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    nextGameListUrl = data.next ? data.next : null;// URL pour les jeux suivants
    const games = data.results // Liste des jeux reçus
    
    games.forEach(game =>{
        const gameItemEl = ` 
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="item">
                    <img src="${game.background_image}" alt="${game.name}image/>
                    <h4 class="game-name">${game.name}<br>
                        <span class="platforms">${getPlatformStr(game.parent_platforms)}</span>
                    </h4>
                    <ul>
                        <li><i class="fa fa-star"></i> <span class="rating">${game.rating}</span></li>
                        <li><i class="fa-regular fa-calendar"></i> <span class="date">${game.released}</span></li>
                    </ul>
                </div>
            </div>
                `
                gameList.insertAdjacentHTML("beforeend", gameItemEl)
            });
            loaderEl.classList.add("loaded");// Masque le loader
            if (nextGameListUrl) {
                loadMoreGamesBtn.classList.remove("hidden");
            } else {
                loadMoreGamesBtn.classList.add("hidden");
            }
        })
        
}


loadGames(url);
// load games
loadGames(url);

loadMoreGamesBtn.addEventListener("click", ()=>{
    if(nextGameListUrl){
        loadGames(nextGameListUrl);
    }
})
