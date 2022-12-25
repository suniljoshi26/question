import React from "react";

export default function ReduceQ() {
  // *********************** Question no 1 *********************//
  // Turn an array of numbers into a total of all the numbers
  const arr = [2, 3, 5, 7, 8, 9];
  const v = arr.toString();
  console.log("v", v);

  /*const a = arr.reduce((p, c) => {
    return p + c;
  });
  console.log(a);*/

  /* var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  const d = voters.filter((v) => v.age < 25 && v.voted !== false);
  console.log(d);
  d.filter((t) => t.voted == true);*/

  /*var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
  ];
  const a = wishlist.map((p) => p.price);
  console.log(a);
  console.log(
    "first ",
    a.reduce((p, c) => p + c)
  );*/
  function flatten(arr) {
    const a = arr.concat(arr[0], arr[1], arr[2]);
    console.log("a", a);
  }

  var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
  return <div>reduce</div>;
}
