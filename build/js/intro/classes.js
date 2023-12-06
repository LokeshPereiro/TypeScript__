"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript" //Outside is not optional, Accesible current and inherited classes
    ) {
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old!`;
    }
}
const Lok = new Coder("Lokesh", "Pop", 26);
// console.log(Lok);
// console.log(Lok.getAge());
/* --------------------------------------------------------------------------------------------- */
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}!!`;
    }
}
const Sara = new WebDev("Linux", "Sara", "Lofi", 27);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}!`;
    }
}
const JPage = new Guitarist("Jimmy Page", "guitar");
console.log(JPage.play("strums"));
/* --------------------------------------------------------------------------------------------- */
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count; //instance number
    }
}
Peeps.count = 0; //It is only reserved to the class not to instances
const Jhon = new Peeps("Jhon");
const Dave = new Peeps("Dave");
const Pepe = new Peeps("Pepe");
console.log(Peeps.count);
// console.log(Jhon.id);
/* --------------------------------------------------------------------------------------------- */
class Bandas {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
            this.dataState = value; //only getters return values, setters just place it
            return;
        }
        else {
            throw new Error("Please, only provide [ string ] type elements inside the array");
        }
    }
}
const myBands = new Bandas();
myBands.data = ["Led Zepelling", "Beatles", "Rolling Stones"];
myBands.data = [...myBands.data, "Freddy Mercury", "Van Helen"];
// myBands.data = ["Van Halen"]; //modify original arr
console.log(myBands.data);
