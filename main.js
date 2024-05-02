import Character from "./lib/Character"
import FormSubmssion from "./lib/FormSubmission"
import state from "./lib/State"


// Saving character information on submit
document.getElementById("characterCreatorForm").addEventListener("submit", FormSubmssion.characterCreator)

state.player = Character.load()

if (state.player != null) {
    const baseURL = window.location.origin
    window.location.replace(`${baseURL}/pages/main-menu.html`)
} else {
    document.getElementById("characterCreatorForm").classList.remove("hidden")
}

// TODO: Fininshed setting up multiple pages and save(), load().