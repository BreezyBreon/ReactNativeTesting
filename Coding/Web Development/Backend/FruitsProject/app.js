// jshint esversion6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "What's the name?"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating : 7,
  review: "Pretty solid fruit"
});

// fruit.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "Solid fruit"
});

// pineapple.save();

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit"
});

const orange = new Fruit ({
  name: "Orange",
  rating: 7,
  review: "The okayest fruit"
});

const banana = new Fruit ({
  name: "Banana",
  rating: 2,
  review: "The weird texture fruit"
});

const person = new Person ({
  name: "John",
  age: 22,
  favoriteFruit: orange
})


person.save();


// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all of the fruits to the fruitsDB")
//   }
// });


Fruit.find(function(err, fruits){
  if(err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name, fruit._id);
    });
  }
});

// Fruit.deleteOne({
//   name: "Pineapple",
//   },
//  function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succssfully updated the document.");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success!");
//   }
// });







