export default class Stats {
    constructor(combatClass) {
        this.combatClass = combatClass

        const warriorMultiplier = {
            Health: 5,
            Strength: 3,
            Dexterity: 2,
            Intellect: 1,
            Luck: 0.5,
        }
        
        const archerMultiplier = {
            Health: 3,
            Strength: 2,
            Dexterity: 2,
            Intellect: 0.5,
            Luck: 0.5,
        }

        const mageMultiplier = {
            Health: 2,
            Strength: 0.5,
            Dexterity: 1,
            Intellect: 3,
            Luck: 1,
        }

        const rogueMultiplier = {
            Health: 3,
            Strength: 1,
            Dexterity: 3,
            Intellect: 1,
            Luck: 1.5,
        }

        // Key: Variable you want to check
        // Case: A possible value
        switch (combatClass) {
            case "Warrior":
                this.multipliers = warriorMultiplier
                this.health = 100
                this.strength = 8
                this.dexterity = 6
                this.intellect = 3
                this.luck = 1
                break;
            case "Archer":
                this.multipliers = archerMultiplier
                this.health = 80
                this.strength = 4
                this.dexterity = 8
                this.intellect = 2
                this.luck = 1
                break;
            case "Mage":
                this.multipliers = mageMultiplier
                this.health = 70
                this.strength = 2
                this.dexterity = 4
                this.intellect = 8
                this.luck = 1
                break;
            case "Rogue":
                this.multipliers = rogueMultiplier
                this.health = 75
                this.strength = 5
                this.dexterity = 6
                this.intellect = 2
                this.luck = 1
                break;
            default:
                throw "Error getting multiplier data, contact Daddy Aguru"
                break;
        }
     }

    levelUp() {
        this.health += this.multipliers.Health
        this.strength += this.multipliers.Strength
        this.dexterity += this.multipliers.Dexterity
        this.intellect += this.multipliers.Intellect
        this.luck += this.multipliers.Luck
    }
}
