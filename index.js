/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header");
header.addEventListener("click", function(e) {
  toggleColor(e.target)
})


/***** Deliverable 2 *****/
function newPlayer() {
const form = document.querySelector("#new-player-form")
form.addEventListener("submit", function(e) {
  e.preventDefault()
  console.log("hi")
  const player = {
    name: form['name'].value,
    number: form['number'].value,
    photo: form['photo'].value,
    nickname: form['nickname'].value,
    likes: 0
  }
  renderPlayer(player);
})

}

newPlayer()

/***** Deliverable 3 *****/

document.addEventListener('click', function(e){
  if(e.target.matches('.like-button')){
    e.target.previousElementSibling.innerHTML = `${parseInt(e.target.previousElementSibling.innerHTML) + 1}`
  }
})