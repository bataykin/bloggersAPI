"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogersRouter = void 0;
const express_1 = __importDefault(require("express"));
const blogersRepo_1 = require("../repos/blogersRepo");
exports.blogersRouter = express_1.default.Router();
exports.blogersRouter.get('/', (req, res) => {
    const allBlogers = blogersRepo_1.blogersRepo.getBlogers();
    res.status(200).send(allBlogers);
});
exports.blogersRouter.post('/', (req, res) => {
});
//# sourceMappingURL=blogersRouter.js.map