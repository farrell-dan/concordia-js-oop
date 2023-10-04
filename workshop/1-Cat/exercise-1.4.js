// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
    constructor (initialTiderness, initialHunger, initialLoneliness, initialHappiness){
        this.tiredness = initialTiderness;
        this.hunger = initialHunger;
        this.loneliness = initialLoneliness;
        this.happiness = initialHappiness;
    }
    name = "Boots"
    species = "Siamese"

    sleep = (hoursSlept) => {
        this.tiredness -= (hoursSlept*5);
        this.happiness += (hoursSlept*3);
    }
    eat = (kibbles) => {
        this.hunger -= (kibbles/5)
        this.happiness += (kibbles);
    }
    play = (minutes) => {
        this.loneliness -= (minutes*3)
        this.happiness += (minutes);
    }
    wait = (minutes) => {
        this.tiredness += (minutes/5);
        this.hunger += (minutes/2)
        this.loneliness += (minutes/2)
        this.happiness -= (minutes/5);
    }
}

// B) Make Boots wait 20 minutes and call then console.log(boots);
// (the wait function accepts a number that will modify all the cat's properties)
// DO NOT make a setTimeout that runs after 20 minutes have passed

const boots = new Cat(50, 15, 12, 2)
console.log(boots)
boots.wait(20)
console.log(boots)