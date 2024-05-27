// Написать функцию, которая создает пустой объект, но без прототипа.

const newObject = () => {
    obj = Object.create(null);
    return obj
}

newObject()
