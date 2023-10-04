// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, boots' name is not part of its object.
// Update the Cat class to have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you create the boots Cat class object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Siamese cat...

class Cat {
  constructor (n, s){
    this.name = n;
    this.species = s;
  }
    tiredness = 0;
    hunger = 0;
    loneliness = 0;
    happiness = 0;
}

const boots = new Cat("Boots", "Siamese")

console.log(boots)