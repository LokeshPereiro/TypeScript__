class Coder {
  public name: string;
  public music: string;
  private age: number; //Only accesible in this class via getters/setters

  constructor(
    name: string,
    music: string,
    age: number,
    protected lang: string = "TypeScript" //Outside is not optional, Accesible current and inherited classes
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello, I'm ${this.age} years old!`;
  }
}

const Lok = new Coder("Lokesh", "Pop", 26);
// console.log(Lok);
// console.log(Lok.getAge());

/* --------------------------------------------------------------------------------------------- */

class WebDev extends Coder {
  public computer: string;

  constructor(computer: string, name: string, music: string, age: number) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}!!`;
  }
}

const Sara = new WebDev("Linux", "Sara", "Lofi", 27);
console.log(Sara.getLang());

//We can modify however TS doesn't like it
// console.log((Sara.age = 30));
// console.log(Sara.lang);

/* --------------------------------------------------------------------------------------------- */
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}!`;
  }
}

const JPage = new Guitarist("Jimmy Page", "guitar");
console.log(JPage.play("strums"));

/* --------------------------------------------------------------------------------------------- */
class Peeps {
  static count: number = 0; //It is only reserved to the class not to instances

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  public name: string;
  constructor(name: string) {
    this.name = name;
    this.id = ++Peeps.count; //instance number
  }
}
const Jhon = new Peeps("Jhon");
const Dave = new Peeps("Dave");
const Pepe = new Peeps("Pepe");

console.log(Peeps.count);
// console.log(Jhon.id);

/* --------------------------------------------------------------------------------------------- */
class Bandas {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
      this.dataState = value; //only getters return values, setters just place it
      return;
    } else {
      throw new Error(
        "Please, only provide [ string ] type elements inside the array"
      );
    }
  }
}
const myBands = new Bandas();
myBands.data = ["Led Zepelling", "Beatles", "Rolling Stones"];
myBands.data = [...myBands.data, "Freddy Mercury", "Van Helen"];
// myBands.data = ["Van Halen"]; //modify original arr

console.log(myBands.data);
