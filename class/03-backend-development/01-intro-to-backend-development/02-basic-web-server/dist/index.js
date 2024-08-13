"use strict";
// import http from "http";
// import fs from "fs";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const PORT = 8000;
// const server = http.createServer((request, response) => {
//   if (request.method === "GET") {
//     if (request.url === "/api/v1") {
//       response.writeHead(200, { "Content-Type": "application/json" }); // Define response header
//       response.write("Hi, there!"); // Define response body
//       response.end(); // Mark response end
//     }
//   } else if (request.method === "POST") {
//     if (request.url === "/api/v1") {
//       let body = "";
//       request.on("data", (chunk) => {
//         body = body + chunk.toString();
//       });
//       request.on("end", () => {
//         const userData = JSON.parse(body);
//         // Read the existing data from data.json
//         fs.readFile("./data.json", "utf-8", (error, data) => {
//           // Handle error (if read process failed/data not exist)
//           if (error) {
//             response.writeHead(500);
//             response.end(
//               JSON.stringify({ message: "Error reading data file" })
//             );
//           }
//           let users = [];
//           if (data) {
//             users = JSON.parse(data);
//           }
//           // Add new user
//           users.push({ ...userData, id: new Date() });
//           fs.writeFile(
//             "./data.json",
//             JSON.stringify(users, null, 2),
//             (error) => {
//               if (error) {
//                 response.writeHead(500);
//                 return response.end(
//                   JSON.stringify({ message: "Error writing data to the file" })
//                 );
//               } else {
//                 response.writeHead(201);
//                 return response.end(
//                   JSON.stringify({
//                     message: "User has been registered",
//                     data: userData,
//                   })
//                 );
//               }
//             }
//           );
//         });
//       });
//     }
//   }
// });
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const PORT = 8080;
const server = http_1.default.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/api/v1") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write("Hello World!");
            res.end();
        }
    }
    else if (req.method === "POST") {
        if (req.url === "/api/v1") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                const userData = JSON.parse(body);
                //  Read the existing data from data.json
                fs_1.default.readFile("./data.json", "utf-8", (err, data) => {
                    // Handle error (if read process failed)
                    if (err) {
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.write(JSON.stringify({ message: "Internal Server Error" }));
                        return res.end();
                    }
                    let users = [];
                    if (data) {
                        users = JSON.parse(data);
                    }
                    users.push(Object.assign(Object.assign({}, userData), { id: users.length + 1 }));
                    fs_1.default.writeFile("./data.json", JSON.stringify(users, null, 2), () => {
                        res.writeHead(201, { "Content-Type": "application/json" });
                        return res.end(JSON.stringify({
                            message: "User has been registered",
                            data: userData,
                        }));
                    });
                });
            });
        }
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
