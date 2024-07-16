import { price, quantity } from "./product-information.js";

function finalPrice(p: number, q: number) {
  return p * q;
}

console.log(finalPrice(price, quantity));
