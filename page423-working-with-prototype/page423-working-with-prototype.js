// Which values are shown in the process?
// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true 
// };
// alert( rabbit.jumps ); // ? (1)
// delete rabbit.jumps;
// alert( rabbit.jumps ); // ? (2) 
// delete animal.jumps;
// alert( rabbit.jumps ); // ? (3)
3, 
1, 
undefined


// let head = { 
//   glasses: 1
// };
// let table = { 
//   pen: 3
// };
// let bed = { 
//   sheet: 1, 
//   pillow: 2
// };
// let pockets = { 
//   money: 2000
// };
// 1. Use _proto_ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head . For instance, pockets.pen should be 3 (found in
//   table), and bed.glasses should be 1 (found in head ).
//   2. Answer the question: is it faster to get glasses as pockets.glasses or
//   head.glasses ? Benchmark if needed.
same

// If we call rabbit.eat() , which object receives the full property: animal or rabbit ?
// let animal = {
//   eat() {
//   this.full = true;
//   }
// };
// let rabbit = {
//     __proto__: animal
// };
// rabbit.eat();
rabbit

// When we feed one of them, the other one is also full. Why? How can we fix it?
// let hamster = { 
//   stomach: [],
//   eat(food) { 
//     this.stomach.push(food);
//   } 
// };
// let speedy = { 
//   __proto__: hamster
// };
// let lazy = { 
//   __proto__: hamster
// };
// // This one found the food speedy.eat("apple");
// alert( speedy.stomach ); // apple
// // This one also has it, why? fix please. 
// alert( lazy.stomach ); // apple
let speedy = { 
  __proto__: hamster, 
  stomach: []
};
let lazy = { 
  __proto__: hamster, 
  stomach: []
};
//another good answer:
eat(food) { 
  this.stomach = [food];
}
