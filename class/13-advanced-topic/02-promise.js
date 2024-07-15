/* -------------------------------------------------------------------------- */
/*                                Basic Promise                               */
/* -------------------------------------------------------------------------- */
/* -------------------------------- The Basic ------------------------------- */
// let promise = new Promise((resolve, reject) => {
//   const error = true;

//   if (error) {
//     reject("Sorry, Rodo terlalu baik.");
//   } else {
//     resolve("Hayuk sama Rodo aja.");
//   }
// });

// console.log(promise);
/* ---------------------------- End of The Basic ---------------------------- */

/* ----------------- Accessing Promise Value - Use dot then ----------------- */
// promise.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => console.log(error)
// );
/* -------------- End of Accessing Promise Value - Use dot then ------------- */

/* ------------------------- Dot then Error Handling ------------------------ */
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("I am absolute");
//   });
/* --------------------- End of Dot then Error Handling --------------------- */

/* ---------------- Accessing Promise Value - Use async/await --------------- */
// async function invokePromise() {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// invokePromise();
/* ------------ End of Accessing Promise Value - Use async/await ------------ */

/* ----------------------- Async/await Error Handling ----------------------- */
// try {
//   throw new Error("Ini error yang disengaja");
//   console.log("Hai");
// } catch (error) {
//   console.error(error.message);
// }
/* -------------------- End of async/await Error Handling ------------------- */

/* -------------------- Promise Real Case Implementation -------------------- */
// async function getUsers() {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/1`
//     );

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUsers();
/* ----------------- End of Promise Real Case Implementation ---------------- */
