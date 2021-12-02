/*
let car = {      //создание объекта car
    color: 'черный',
};
car.color = 'зеленый'; //замена значения свойства
car.power = () => {
    console.log("120Вт"); //добавление нового свойства
};

let apple = 5, pear = 3;

function fruitSum(a, b) {  //функция суммы фруктов
    let rez = apple + pear;
    console.log(rez);
}

fruitSum(apple, pear);

function defineName(name) {   //функция определение имени
    let nameSave = 'Yulia';
    let rez = (name === nameSave) ? "Hello, Yulia" : "No such name";
    console.log(rez);
}

defineName("Yulia");

function typeArg(a) {   //функция определения типа
    let rez = typeof (a);
    console.log(rez);
}

typeArg(true);

const isPrime = num => {    //определение простое число или нет
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

function main() {
    if (isPrime(0)) {
        console.log("prime");
    } else {
        console.log("not prime");
    }
}

main();

 */