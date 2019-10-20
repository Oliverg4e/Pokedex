const random = function (){
    return function(min, max){
        return Math.round(Math.random() * (max - min)) + min
    }
}

const getPokemon = function(index){
    const pokemons= [
        {
            name: 'bulbasaur',
            img: '001'
        },
        {
            name: 'ivysaur',
            img: '002'
        },
        {
            name: 'venusaur',
            img: '003'
        },
        {
            name: 'charmander',
            img: '004'
        },
        {
            name: 'charmeleon',
            img: '005'
        },
        {
            name: 'charizard',
            img: '006'
        },
        {
            name: 'squirtle',
            img: '007'
        },
        {
            name: 'wartortle',
            img: '008'
        },
        {
            name: 'blastoise',
            img: '009'
        }
    ]
    return pokemons[index]
}

const randomRange = random()
const renderPokemon = function(pokemon){
    const screen = document.querySelector('.screen')
    screen.innerHTML = ''

    screen.appendChild(createImg(`img/${pokemon.img}.png`))
    screen.appendChild(createName(pokemon.name))
}

const createImg = function (url){
    const pokeImg = document.createElement('img')
    pokeImg.src = url
    pokeImg.classList.add('image')
    return pokeImg
}
const createName = function (name){
    const pokeName = document.createElement('h2')
    const text = document.createTextNode(name)
    pokeName.appendChild(text)
    pokeName.classList.add('name')
    return pokeName
}

btnBusca.addEventListener('click', function(){
    let poke=document.getElementById('txtBuscar').value
        if(poke>9 || poke==''){
           alert("Campo vacio o valor fuera de rango");

        }
        pokemonId = poke
        renderPokemon(getPokemon(pokemonId))
        
            
    })

    const init = function(){
        let pokemonId = 0
        let pokemon = getPokemon(pokemonId)

        const btnBack = document.querySelector('#btnBack')
        const btnNext = document.querySelector('#btnNext')

      

        window.onkeydown = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 39) { //up key
         if(pokemonId === 8)
                pokemonId = 0
            renderPokemon(getPokemon(++pokemonId))
        } else if (code === 37) { //down key
              if(pokemonId === 0)
                pokemonId = 8
            renderPokemon(getPokemon(--pokemonId))
        }
        };

        /*
    
    btnBack.addEventListener('click', function(){
        if(pokemonId === 0)
            pokemonId = 8
        renderPokemon(getPokemon(--pokemonId))
    })
    
    btnNext.addEventListener('click', function(){
        if(pokemonId === 8)
            pokemonId = 0
        renderPokemon(getPokemon(++pokemonId))
    })
    */
    renderPokemon(pokemon)
}

init()