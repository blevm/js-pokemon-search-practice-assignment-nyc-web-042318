document.addEventListener("DOMContentLoaded", function() {
  const pokemonObjs = data.pokemons
  const searchInputField = document.getElementById('pokemon-search-input')
  const pokemonFrame = document.getElementById('pokemon-container')

  pokemonFrame.addEventListener('click', function(event){
    if (event.target.dataset.action === 'flip-image') {
      flipImage(event.target.dataset.pokename)
    }
  })

  function flipImage(name) {
    const imgTag = document.getElementById(`pokemon-image-${name}`)
    const imageDirection = imgTag.dataset.currentSprite == 'front' ? 'back' : 'front'
    const imgSprite = pokemonObjs.find(p =>p.name == name).sprites[imageDirection]
    imgTag.src = imgSprite
    imgTag.dataset.currentSprite = imageDirection
  }

  function generatePokemon(pokemon) {
    return `<div class="pokemon-container">
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img id="pokemon-image-${pokemon.name}" src="${pokemon.sprites.front}">
        </div>
      </div>
      <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-currentSprite='front' data-action="flip-image">flip card</p>
      </div>
      </div>`
  }

  searchInputField.addEventListener('keyup', function(event) {
    pokemonFrame.innerHTML = ''
    const searchTerm = searchInputField.value
    if (searchTerm) {
      const searchResults = pokemonObjs.filter(pokemon =>
        pokemon.name.includes(searchTerm))
      searchResults.forEach(pokemon => pokemonFrame.innerHTML += generatePokemon(pokemon))
    }
  })

  // function findMePokemons() {
  //   var list = pokemonObjs.filter(pokemon => {
  //     return pokemon.name.includes(pokesearch.value)
  //   })
  //
  //   list.forEach(function(pokemon) {
  //     const poke = document.createElement('div')
  //     poke.className = "pokemon-container"
  //     poke.innerHTML = `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
  //       <h1 class="center-text">${pokemon.name}</h1>
  //       <div style="width:239px;margin:auto">
  //         <div style="width:96px;margin:auto">
  //           <img src="${pokemon.sprites.front}">
  //         </div>
  //       </div>
  //       <p style="padding:10px;" class="center-text flip-image" data-pokename="charmander" data-action="flip-image">flip card</p>
  //       </div>`
  //     whereTheyGo.appendChild(poke)
  //   })
  // }

})
