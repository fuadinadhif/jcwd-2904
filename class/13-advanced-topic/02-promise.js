// let promise = new Promise((resolve, reject) => {
//   const error = true;

//   if (error) {
//     reject("Sorry, Rodo terlalu baik.");
//   } else {
//     resolve("Hayuk sama Rodo aja.");
//   }
// });

// console.log(promise);

// . then
// promise.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => console.log(error)
// );

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("I am absolute");
//   });

// // async / await
// async function invokePromise() {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// invokePromise();

// try and catch
// try {
//   throw new Error("Ini error yang disengaja");
//   console.log("Hai");
// } catch (error) {
//   console.error(error.message);
// }

// Real Case
async function getUsers() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/1`
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
