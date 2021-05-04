var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
}

// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.

console.log(theSpurs.otherNBATeams.Jazz.mascot);
console.log(theSpurs.otherNBATeams.Mavs.mascot);
console.log(theSpurs.otherNBATeams.Pistons.mascot);

theSpurs.playerInfo.name = 'Ginobli';
console.log(theSpurs.playerInfo.name);
console.log(theSpurs.players[2]);

theSpurs.otherNBATeams.Patriots ={
    city: "New England",
    mascot: "Pat Patriot",
    champsWon: 6
}

console.log(theSpurs.otherNBATeams);

/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/
let zoo = {
    name: "Houston Zoo",
    city: "Houston",
    isOpen: true,
    ranking: 1,
    yearOpened: 1922,

    animals: [
        {
            name:"Lion",
            hasFur: true,
            isMammal: true,
            canFly: false,
            livingPlace: "ground",
            sounds: "ROARS!",
            animalSound : function (){
                return this.sounds;
            }
        },
        {
            name:"Elephant",
            hasFur: false,
            isMammal: true,
            canFly: false,
            livingPlace: "ground",
            sounds:"Trumpets!",
            animalSound : function (){
                return this.sounds;
            }
        },
        {
            name:"Duck",
            hasFur: true,
            isMammal: false,
            canFly: true,
            livingPlace: "ground and water",
            sounds:"Quacks!",
            animalSound : function (){
                return this.sounds;
            }
        },
         {
            name:"Penguins",
            hasFur: true,
            isMammal: false,
            canFly: false,
            livingPlace: "ground and water",
             sounds:"Peeps!",
            animalSound : function (){
                return "Peeps!";
            }
        },
        {
            name:"Turtle",
            hasFur: false,
            isMammal: true,
            canFly: false,
            livingPlace: "ground and water",
            sounds: "Whines!",
            animalSound : function (){
                return this.sounds;
            }
        }
    ]
}

zoo.animals.forEach(animal => {
    console.log(`${animal.name} ${animal.animalSound()}`);
})

