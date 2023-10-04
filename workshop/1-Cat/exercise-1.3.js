// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (50 tiredness - (10 hours * 5)).
// 
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// 
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// 
// - The happiness property should be modified in all of the above methods as well.
//   You decide how much sleep, eat, and play affects your cat's happiness.

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
}


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

const boots = new Cat(50, 15, 12, 2)
console.log(boots)
boots.sleep(10)
console.log(boots)
boots.eat(75)
console.log(boots)
boots.play(4)
console.log(boots)