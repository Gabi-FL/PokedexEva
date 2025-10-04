
const statsList = document.getElementById("stats");
const typeList = document.getElementById("type");
const ruido = document.getElementById("ruido");
const input = document.getElementById("pokemonInput");
const btn = document.getElementById("buscarBtn");
const imagen = document.getElementById("imagenPoke");
const numero = document.getElementById("numero");
const nombre = document.getElementById("nom");
const tituloNun = document.getElementById("TituloNumero");
const tituloTip = document.getElementById("TituloTipos");
const tituloStat = document.getElementById("TituloStats");

const limpiar = () => {
  statsList.innerHTML = "";
  typeList.innerHTML = "";
  numero.innerHTML = "";
  nombre.innerHTML = "";
  tituloNun.innerHTML = "";
  tituloTip.innerHTML = "";
  tituloStat.innerHTML = "";
}

 btn.addEventListener("click", () => {
  const pokemon = input.value.trim().toLowerCase()
  limpiar();
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
     .then((response) => response.json())
     .then((data) => {
       //statsList.style.display = "none";
       //declarar
       const stats = data.stats;
       const types = data.types;
       const cries = data.cries.latest;
       const image = data.sprites.front_default;
       const id = data.id;
       const NomPokemon = input.value.trim().toUpperCase()
       limpiar();
       //nombre Pokemon
       nombre.textContent = NomPokemon

       //titulos
       tituloNun.textContent = "Nº Pokedex: ";
       tituloTip.textContent = "Tipos: ";
       tituloStat.textContent = "Stats: ";
       //Stats base
       stats.forEach((stat) => {
         const statLi = document.createElement("li");
         statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`;
         statsList.appendChild(statLi);
       });
       //tipos

       types.forEach((type) => {
         const typeLi = document.createElement("li");
         typeLi.textContent = `${type.type.name}`;
         typeList.appendChild(typeLi);
       });

       //ruido
       ruido.src = cries;

       //imagen
       imagen.src = image;

       //nº pokedex
       numero.textContent = id
     })
     .catch((error) => console.error("Error al obtener los datos:", error));
 });



