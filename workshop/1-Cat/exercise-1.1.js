// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// The class should have the following properties:

// {
//   species: 'cat',
//   tiredness: 0,
//   hunger: 0,
//   loneliness: 0,
//   happiness: 0,
// }

class Cat {
    // Add code here
    species = "cat";
    tiredness = 0;
    hunger = 0;
    loneliness = 0;
    happiness = 0;

}

// B) Create a cat called 'boots' with the Cat class.

const boots = new Cat()


// C) What do you see when you console.log(boots)?

// Commented out so I don't see the problems in the terminal...
// Cat {
//     species: 'cat',
//     tiredness: 0,
//     hunger: 0,
//     loneliness: 0,
//     happiness: 0
//   }

// D) What if I want to output just boots' species?

console.log(boots.species)
