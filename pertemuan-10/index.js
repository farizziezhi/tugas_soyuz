// --> object

// let spaceship = {
//   color: "red",
//   dirli: "naik",
// };

// const apple = {
//   color: "red",
//   species: "Fuji",
//   weight: 150,
// };

// --> accessing
// console.log(apple.color);

// apple.color = "blue";

// console.log(apple.color);

// console.log(apple["color"]);

// --> destructuring

// const { color, dirli } = spaceship;

// console.log(color);
// console.log(dirli);

// --> property assignment

// apple.color = "blue";
// console.log(apple.color);

// --> method

// const user = {
//   nama: "rudi",
//   sapa: function () {
//     console.log("Halo nama saya " + this.nama);
//   },
// };

// user.sapa();

// --> nested objects

// const spaceship = {
//   telescope: {
//     year: 2021,
//     model: "Hubble",
//   },
//   crew: {
//     captain: {
//       name: "Sandra",
//       age: 40,
//     },
//     coCaptain: {
//       name: "Yulia",
//       age: 35,
//     },
//   },
// };

// console.log(spaceship.telescope.year); // 2021
// console.log(spaceship); // print semua

// --> looping through objects

const spaceship = {
  telescope: {
    year: 2021,
    model: "Hubble",
  },
  crew: {
    captain: {
      name: "Sandra",
      age: 40,
    },
    coCaptain: {
      name: "Yulia",
      age: 35,
    },
  },
};

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
