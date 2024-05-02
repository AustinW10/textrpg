import Inventory from "./Inventory";
import Stats from "./Stats";

export default class Character {
    constructor(race, combatClass, userName) {
      this.race = race
      this.combatClass = combatClass
      this.userName = userName
      this.inventory = new Inventory();
      this.stats = new Stats(combatClass);
      this.skills = null;
    }
  
    damage(amount) {
      this.stats.health -= amount
      if (this.stats.health <= 0) {
        console.log("You died")
        this.inventory.destroyDroppables()
      }
    }

    save() {
      let s = JSON.stringify(this)
      localStorage.setItem("character", s)
    }

    /**
     *
     *
     * @static
     * @return {Character} 
     * @memberof Character
     */
    static load() {
          // String of JSON
          let data = localStorage.getItem("character")

          // Object literal
          let loadedCharacter = JSON.parse(data)

          // Converts the object literal to a true Character object
          Object.setPrototypeOf(loadedCharacter, Character.prototype)
          
          return loadedCharacter
        }
  }