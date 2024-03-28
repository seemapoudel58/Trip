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
dogs.forEach((puppy) => {
  const recFoodPortion = Math.floor(puppy.weight ** 0.75 * 28);
  puppy.recFoodPortion = recFoodPortion;
});
console.log(dogs);



// 2. Find Roshna's dog and find whether it's eating too much or too little.
// if recFoodPortion is greater than currFood then it is more other wise less or if they are equal, the dog is eating fine.

const RoshnaDog = dogs.find((puppy)=> puppy.owners.includes('Roshna'));

if(RoshnaDog){
  if(RoshnaDog.recFoodPortion >  RoshnaDog.currFood){
    console.log("Dear Roshna You should be controlling your puppy's diet.");
  }
  else if (RoshnaDog.recFoodPortion === RoshnaDog.currFood){
    console.log("Your Puppy is just right!");

  }
  else {
    console.log("Dear Roshna Your puppy is underweight. You should be feeding her more.");

  }

}
else{
   console.log("Roshna doesnot own a puppy.");
}



// 3. Output arrays containing all owners of dogs who eat too much and too little.
let ownersOfTooMuchEatingDogs = [];
let ownersOfLittleEatingDogs = [];

dogs.forEach((puppy) =>{
  const eatingToMuch = Math.floor( puppy.recFoodPortion < puppy.currFood);
  if(eatingToMuch){
    ownersOfTooMuchEatingDogs.push(...puppy.owners);
  }
  else{
    ownersOfLittleEatingDogs.push(...puppy.owners);
  }
})
console.log("owners of earting to much", ownersOfTooMuchEatingDogs);
// Like: ownersOfTooMuchEatingDogs = ["Nishan", "Nayan", "Roshna"]
// Like: ownersOfLittleEatingDogs = ["Nishan", "Nayan", "Roshna"] -> something like this


// 4. Console log the question 3 as: 'Nishan and Nayan and Roshna's dogs eat too much.
// Console log the question 3 as: 'Nishan and Nayan and Roshna's dogs eat too little.

ownersOfTooMuchEatingDogs.forEach((owner) =>{
  console.log(`${owner}'s dogs eat too much.`);
})

ownersOfLittleEatingDogs.forEach((owner) =>{
  console.log(`${owner}'s dog eats a little less`);
})
// 5. Console log true, if there is at least one dog eating exactly the right amount of food.
let isEatingRightAmountOfFood =  false;
dogs.forEach((puppy) =>{
  if(puppy.recFoodPortion === puppy.currFood){
    isEatingRightAmountOfFood=true;
    return;
  }
})
console.log("Is at least one dog eating the exact amount:", isEatingRightAmountOfFood);


// 6. Sort the dogs research array in ascending order according to the weight.
dogs.sort((a,b)=>a.weight - b.weight);
console.log("Sorted Dogs by Weight" , dogs);