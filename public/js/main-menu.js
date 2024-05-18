import state from "../../lib/State"
import Character from "../../lib/Character"

state.player = Character.load();

// TODO: Start creating the main menu html/css
let combatClass = state.player.combatClass
let race = state.player.race
let nameElement = document.getElementById("characterName");


const c = combatClass.toLowerCase()
const r = race.toLowerCase()
const imageName = `${r}-${c}.jpg`

 
const characterImageElement = document.getElementById("characterImage");
characterImageElement.src = `/images/characterimages/${imageName}`;
