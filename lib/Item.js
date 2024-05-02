export default class Item {
    constructor(itemName, itemStats, value, isDroppable) {
      this.name = itemName
      this.stats = itemStats
      this.value = value
      this.droppable = isDroppable
  
    }
  
    static blank() {
      return new Item(null, null, null)
    }
}


