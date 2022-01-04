// class Pet{
//     constructor(species, breed, name, owner){
//         this.species = species;
//         this.breed = breed;
//         this.name = name;
//         this.owner = owner;
//     }
// }

// console.log(Pet)


class Nation{
    constructor(name, area, population, anthem, headOfState){
        this.name = name;
        this.area = area;
        this.population = population;
        this.anthem = anthem;
        this.politicSystem = headOfState;
    }

    educates(){
        return console.log(`${this.name} educates to ${this.population} habitants`)
    }

    builds(amount, building){
        return console.log(`${this.name}  builds ${amount} ${building} per year.`)
    }


}

const Fiji = new Nation('Fiji', 24000, '1M', 'President')
console.log(Fiji)
console.log(Fiji.educates())
console.log(Fiji.builds(5, 'hospitals'))