import React from "react";

export const FilterQ = () => {
  const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  const filterMale = characters.filter((v) => v.gender === "male");
  console.log("filterMale", filterMale);
  const filteemass = characters.filter((m) => m.mass > 100);

  console.log("filteemass", filteemass);
  console.log(
    "firs",
    characters.filter((n) => n.name === "Darth Vader")
  );

  return <div>FilterQ</div>;
};
