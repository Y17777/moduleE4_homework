// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

let computer = {
    processor: "Intel Core I7",
    memory: "DDR5",
    hdd: "SSD M.2"
};

const configComp = (comp) => {
    for (let key in comp) {
        if (comp.hasOwnProperty(key)) {
            console.log(key + " : " + comp[key]);
        }
    }
}

configComp(computer)
