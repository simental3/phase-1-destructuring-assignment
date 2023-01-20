// Destructuring Assignment Notes

const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner



// NOTES
// INTRO
/*
As developers, sometimes we receive information in a collection (e.g., an Object) & we want to "pick & choose" elements out of the collection. It's a major
pain to individually extract each property / value pair out of an Object & then assign it to a variable.

Destructuring lets us type less & be more clear about what we want to pull out of an Object. Not only does destructuring help when working with data in your
application, it's essential for understanding how to get JavaScript to include third-party code (like you find on npm)


// USE DESTRUCTURING ASSIGNMENT TO ASSIGN DATA TO VARIABLES
In JavaScript, when we want to assign data from an object to single variables, we know how to do it individually like so:
*/
const doggie = {
    name: "Boba",
    breed: "German Shepherd",
    furColor: "black and tan",
    activityLevel: "highly active",
    favoriteFood: "chicken"
};

const name = doggie.name;
const breed = doggie.breed;
name; // => "Boba"
breed; // => "German Shepherd"
/*
This is repetitive code. The process is:
    1. Declare a variable with a name (e.g name or breed)
    2. Use that variable's name to point to an attribute in the Object whose name matches the name of the variable (e.g. doggie.breed or doggie.name)
    3. Assign the attribute's value to the created variable
JavaScript gives us the ability to perform this task with ONE simple line of code
*/
const doggie1 = {
    name: 'Azteca',
    breed: 'Xoloitzcuintli',
    furColor: 'Black (Hairless)',
    activityLevel: 'Tranquil',
    favoriteFood: 'Fruits/Vegetables',
};

const { name, breed } = doggie1;
name; // => 'Azteca'
breed; // => 'Xoloitzcuintli'
/*
The {} around the variable names tells the JavaScript engine that it's going to be pulling values fom an Object. The engine looks inside the doggie object for
the attributes name & breed & assigns the values associated with those keys to the corresponding variable names. This is known as DESTRUCTURING ASSIGNMENT.

Note that because the engine is looking for the attributes by their keys, the order inside the {} doesn't matter -- this works as well:
*/
const { breed, name } = doggie1;
name; // => 'Azteca'
breed; // => 'Xoloitzcuintli'
/*
We can also use destructuring assignment with a nested data structure:
*/
const doggie2 = {
    name: '',
    breed: '',
    furColor: '',
    activityLevel: '',
    favoriteFoods: {
        meats: {
            bacon: 'bacon bits',
            ham: 'ham slices',
        },
        fruit: {
            seedless: 'strawberries'
        }
    }
};

const { bacon, ham } = doggie2.favoriteFoods.meats;
ham; // => 'ham slices'
bacon; // => 'bacon bits'
/*
We've simply "drilled down" to the object we want to access by chaining the keys: doggie2.favoriteFoods.meats


// USING DESTRUCTURING ASSIGNMENT WITH ARRAYS
Destructuring does not just work on objects -- we can use the same syntax with Arrays
*/
const dogs = ['Tibetan Mastiff', 'Havanese', 'Doberman Pinscher', 'German Shepherd'];
const [giant, small, medium, large] = dogs;
console.log(giant, small, medium, large);
// LOG: Tibetan Mastiff Havanese Doberman Pinscher German Shepherd
/*
Note that, this time, we;ve wrapped the variables we're declaring in [] instead, so the engine knows we're destructuring an Array. In this case, the order
DOES matter: the engine assigns the 1st element to giant, the 2nd to small, the 3rd to medium, & the 4th to large.

The cool part is we can pick the parts of the Array that we want to assign!
*/
const dogs1 = ['Tibetan Mastiff', 'Havanese', 'Doberman Pinscher', 'German Shepherd'];
const [, , medium1, large1] = dogs1;
console.log(medium, large);    // LOG: Doberman Pinscher German Shepherd
/*
The initial comma tells the egnine to skip the 1st element & start the assignments with the 2nd element


// USING DESTRUCTURING ASSIGNMENT WITH STRINGS
We can also destructure with strings by using the String.prototype.split() method to turn the string into an array:
*/
const dogsName = 'Mr. Boba Boot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName);    // LOG: Mr. Boba Boot
/*
Because the split() method returns an array, we can pick & choose just as we did before:
*/
const dogsName1 = 'Mr. Boba Boot';
const [title1, firstName1, lastName1] = dogsName1.split(' ');
console.log(title1, lastName1); // LOG: Mr. Boots


// CONCLUSION
/*
DESTRUCTURING ASSIGNMENT is a fast, & efficient way to assign data to variables from object, arrays, & strings. It allows us to easily pick & choose the
pieces of datat that we want too assign. With practice, you'll be proficient at it in no time
*/