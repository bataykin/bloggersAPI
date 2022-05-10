"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bloggersRouter_1 = require("./routes/bloggersRouter");
const postsRouter_1 = require("./routes/postsRouter");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express();
const port = process.env.PORT || 3000;
const { body, validationResult } = require('express-validator');
app.use(body_parser_1.default.json());
app.use('/bloggers', bloggersRouter_1.bloggersRouter);
app.use('/posts', postsRouter_1.postsRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map