document.addEventListener("DOMContentLoaded", function() {
  const pokesearch = document.getElementById('pokemon-search-input')
  const whereTheyGo = document.querySelector('#pokemon-container')

  function findMePokemons() {
    var list = pokemons['pokemons'].filter(pokemon => {
      return pokemon.name.includes(pokesearch.value)
    })

    list.forEach(function(pokemon) {
      const poke = document.createElement('div')
      poke.className = "pokemon-container"
      poke.innerHTML = `${pokemon.name}`
      whereTheyGo.appendChild(poke)
    })
  }

  // function createPokeDivs() {
  //   list().forEach(function(pokemon) {
  //     const poke = document.createElement('div')
  //     poke.innerHTML = `<div class="pokemon-container center-text flip-image">${pokemon.name}</div>`
  //     whereTheyGo.appendChild(poke)
  //   })
  // }

  // function test() {
  //   console.log('WOW')
  // }

  pokesearch.addEventListener('keydown', findMePokemons)

})
