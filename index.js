const birds = [
  { ID: "DV8", Name: "Eurasian Collared-Dove", Type: "Dove" },
  { ID: "HK12", Name: "Bald Eagle", Type: "Hawk" },
  { ID: "HK6", Name: "Cooper's Hawk", Type: "Hawk" },
  { ID: "SP11", Name: "Bell's Sparrow", Type: "Sparrow" },
  { ID: "DV2", Name: "Mourning Dove", Type: "Dove" },
];
function birdHandler(bird, index) {
  // console.log(bird)
  return {
    id: bird.ID,
    name: bird.Name,
    type: bird.Type,
    index: index,
  };
}
const newBird = birds.map(birdHandler);
console.log(newBird);
