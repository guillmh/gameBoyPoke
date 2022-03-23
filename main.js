const fetchApi = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value;
  pokeInput = pokeInput.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        pokeImg("./assets/pokemon-sad.gif");
      } else {
        return res.json();
      }
      if (pokeInput == "kyogre") {
        playSound();
      }
    })
    .then((data) => {
      let pokeImage = data.sprites.front_default;
      pokeImg(pokeImage);
      console.log(data);
      const hp = `HP: ${data.stats[0].base_stat} Attack:${data.stats[1].base_stat} Defense:${data.stats[2].base_stat} special-attack:${data.stats[3].base_stat} Special-defense:${data.stats[4].base_stat} Speed:${data.stats[5].base_stat}`;

      const moves = `${data.moves[1].move.name} ${data.moves[2].move.name} ${data.moves[3].move.name} ${data.moves[4].move.name} ${data.moves[5].move.name} `;
      
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("type").innerHTML = data.types[0].type.name;
      document.getElementById("move").innerHTML = moves;
      document.getElementById("stats").innerHTML = hp;

     
    });
};
const pokeImg = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
const playSound = () => {
  var sound = document.getElementById("sound");
  sound.play();
};
const powerOff = () => {
  var miCheckbox = document.getElementById('off-p');
  var introPo = document.getElementById('introVideo');
  var introA = document.getElementById('videoIntro');
  var intro = document.getElementById('on');
  if(miCheckbox.checked) {
    intro.className = 'led-1';
    introA.autoplay = true;
    introA.muted = false;
    introA.load();
    introPo.style.visibility = 'visible';

  } else {
    introPo.style.visibility = 'hidden';
    intro.className = 'led-2';
    introA.muted = true;
  }
}







//pokeImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
