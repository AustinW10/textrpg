import Item from "./Item"

export default class Inventory {
    constructor() {
      this.gold = 0
      this.items = Array(30).fill(Item.blank())
    }
  
    spendGold(amount) {
      if (this.gold - amount < 0) {
        //console.log("Could not buy item, not enough gold")
      }
      else {
        this.gold -= amount
      }
    }
  
    earnGold(amount) {
      if (this.gold + amount < 9999) {
        this.gold += amount
      }
    }
  
    destroyDroppables() {
      this.items.forEach((item, index) => {
        if (item.droppable == true) {
          this.items[index] = Item.blank()
        }
      })
    }
    
  }