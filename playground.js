// Coding challenges based on Seema And Bheema Research on Dogs.
const dogs = [
  { weight: 22, currFood: 250, owners: ["Nishan", "Nayan"] },
  { weight: 8, currFood: 200, owners: ["Roshna"] },
  { weight: 13, currFood: 275, owners: ["Alina", "Rejan"] },
  { weight: 32, currFood: 340, owners: ["Neema"] },
];

// 1. Create a new recommended food property: recFoodPortion in all research object. ->
// e.g. {weight: 22, currFood: 250, owners: ["Nishan", "Nayan"], recFoodPortion: 239.32}
// Formula is: dog's weight ** 0.75 * 28

// 2. Find Roshna's dog and find whether it's eating too much or too little.
// if recFoodPortion is greater than currFood then it is more other wise less or if they are equal, the dog is eating fine.

// 3. Output arrays containing all owners of dogs who eat too much and too little.
// Like: ownersOfTooMuchEatingDogs = ["Nishan", "Nayan", "Roshna"]
// Like: ownersOfLittleEatingDogs = ["Nishan", "Nayan", "Roshna"] -> something like this

// 4. Console log the question 3 as: 'Nishan and Nayan and Roshna's dogs eat too much.
// Console log the question 3 as: 'Nishan and Nayan and Roshna's dogs eat too little.

// 5. Console log true, if there is at least one dog eating exactly the right amount of food.

// 6. Sort the dogs research array in ascending order according to the weight.
