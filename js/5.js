class ElAppliance {
    constructor() {
        this.powerStatus = function () {
            return this._powerStatus;
        }
    }
}

class Lamp extends ElAppliance {
    constructor(name, wattage, type, powerStatus) {
        super(powerStatus);
        this.name = name;
        this.wattage = wattage;
        this.type = type;
        this._powerStatus = true;
    }
}

class Computer extends ElAppliance {
    constructor(name, wattage, frequency, powerStatus) {
        super(powerStatus);
        this.name = name;
        this.wattage = wattage;
        this.frequency = frequency;
        this._powerStatus = false;
    }
}

const lamp = new Lamp('Лампа', 60, 'Настольная лампа');
const computer = new Computer('Ноутбук', 90, '1700 GHz');

function energyConsumption(...items) {
    let consumption = 0;
    for (let i of items) {
        if (i.powerStatus()) {
            consumption += i.wattage;
        }
    }
    return consumption;
}

console.log(`Потребляемая мощность: ${energyConsumption(lamp, computer)} Вт`);
