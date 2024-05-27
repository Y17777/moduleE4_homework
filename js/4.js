function ElAppliance() {
    this.powerStatus = function(){
        return this._powerStatus;
    };
}

ElAppliance.prototype.on = function () {
    this._powerStatus = true;
    console.log(this.name + " включен (а)");
}

ElAppliance.prototype.off = function () {
    this._powerStatus = false;
    console.log(this.name + " выключен (а)");
}

function Lamp(name, wattage, type) {
    this.name = name;
    this.wattage = wattage;
    this.type = type;
}
function Computer(name, wattage, frequency) {
    this.name = name;
    this.wattage = wattage;
    this.frequency = frequency;
}

Lamp.prototype = new ElAppliance();
Computer.prototype = new ElAppliance();

function energyConsumption(...items) {
    let consumption = 0;
    for (let i of items) {
        if (i.powerStatus()) {
            consumption += i.wattage;
        }
    }
    return consumption;
}

const lamp = new Lamp('Лампа', 60, 'Настольная лампа');
const computer = new Computer('Ноутбук', 90, '1700 GHz');

computer.off();
lamp.on();

console.log(`Потребляемая мощность: ${energyConsumption(lamp, computer)} Вт`);
