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
            animalSound : function (){
                return "ROARS!";
            }
        },
        {
            name:"Elephant",
            hasFur: false,
            isMammal: true,
            canFly: false,
            livingPlace: "ground",
            animalSound : function (){
                return "Trumpets!";
            }
        },
        {
            name:"Duck",
            hasFur: true,
            isMammal: false,
            canFly: true,
            livingPlace: "ground and water",
            animalSound : function (){
                return "Quacks!";
            }
        },
        {
            name:"Penguins",
            hasFur: true,
            isMammal: false,
            canFly: false,
            livingPlace: "ground and water",
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
            animalSound : function (){
                return "Whines!";
            }
        }
    ]
}

zoo.animals.forEach(animal => {
    console.log(`${this.name} ${this.animalSound()}`);
})
