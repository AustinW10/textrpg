import Character from "./Character"
import state from "./State"

export default class FormSubmssion{
    static characterCreator(event) {
        event.preventDefault()

        let userName = document.getElementById("characterName").value
        let race = document.getElementById("racePicker").value
        let chosenClass = document.getElementById("combatClass").value
        
        state.player = new Character(race, chosenClass, userName)
        state.player.save()

        window.location.reload()
      }
}

