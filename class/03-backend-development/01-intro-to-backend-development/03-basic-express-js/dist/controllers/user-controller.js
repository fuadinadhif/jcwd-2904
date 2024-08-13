"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = getAllUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const promises_1 = __importDefault(require("fs/promises"));
function getAllUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).json({ name: "King Charles II" });
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                res.status(400).json({ message: "required fields is missing" });
            }
            const JSONData = yield promises_1.default.readFile("./data.json", "utf-8");
            const data = JSON.parse(JSONData);
            data.push({ name, email, id: new Date().getTime() });
            promises_1.default.writeFile("./data.json", JSON.stringify(data, null, 2));
            return res.status(201).json({ message: "success register new user", data });
        }
        catch (error) {
            console.error(error);
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const JSONData = yield promises_1.default.readFile("./data.json", "utf-8");
            const userData = JSON.parse(JSONData);
            const updateIndex = userData.findIndex((user) => user.id === Number(id));
            const userTarget = userData[updateIndex];
            if (!userTarget) {
                res.status(404).json({ message: "User not found" });
            }
            userData[updateIndex] = Object.assign(Object.assign({}, userTarget), req.body);
            yield promises_1.default.writeFile("./data.json", JSON.stringify(userData, null, 2));
            res.status(200).json({ message: "User updated", data: userTarget });
        }
        catch (error) {
            console.error(error);
        }
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const JSONData = yield promises_1.default.readFile("./data.json", "utf-8");
            const userData = JSON.parse(JSONData);
            const deleteIndex = userData.findIndex((user) => user.id === Number(id));
            if (deleteIndex === -1) {
                res.status(404).json({ message: "User not found" });
            }
            userData.splice(deleteIndex, 1);
            yield promises_1.default.writeFile("./data.json", JSON.stringify(userData, null, 2));
            res.status(200).json({ message: "User deleted" });
        }
        catch (error) {
            console.error(error);
        }
    });
}
