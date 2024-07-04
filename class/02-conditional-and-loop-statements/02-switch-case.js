const fruit = "Dragon Fruit";

switch (fruit) {
  case "Oranges":
    console.log("Oranges are Rp. 10000/kg");
    break;
  case "Mangoes":
    console.log("Mangoes are Rp. 20000/kg");
    break;
  case "Papayas":
    console.log("Papayas are Rp. 15000/kg");
    break;
  default:
    console.log(`Sorry we are out of ${fruit}`);
}
