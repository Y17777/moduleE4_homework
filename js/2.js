// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

let obj = {
    someKey: "someValue",
    someKey1: "someValue1",
}

let str = "someValue"

const checkKey = (objkey, strvalue) => {
    for (let key in objkey) {
        if (objkey[key] === strvalue) {
            console.log("Есть свойство с данным именем");
            return true;
        }
    }
            console.log("Нет свойства с данным именем");
            return false;
    }

checkKey(obj, str);
