"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const postsRepo_1 = require("../repos/postsRepo");
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
exports.postsRouter = express_1.default.Router();
exports.postsRouter.get('/', (req, res) => {
    const allPosts = postsRepo_1.postsRepo.getPosts();
    res.status(200).send(allPosts);
});
exports.postsRouter.get('/:id', (req, res) => {
    const foundPost = postsRepo_1.postsRepo.findPostById(+req.params.id);
    if (foundPost.length === 1) {
        res.status(200).send(foundPost);
    }
    else {
        res.sendStatus(404);
    }
});
exports.postsRouter.post('/', (0, express_validator_1.body)('title').isString(), (0, express_validator_1.body)('shortDescription').isString(), (0, express_validator_1.body)('content').isString(), (0, express_validator_1.body)('bloggerId').isNumeric(), 
// body('bloggerName').isString(),
(req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            "errorsMessages": [
                {
                    "message": "string",
                    "field": "string"
                }
            ],
            "resultCode": 1
        });
    }
    else {
        res.status(201).send(postsRepo_1.postsRepo.createPost(req.body.title, req.body.shortDescription, req.body.content, req.body.bloggerId));
    }
});
exports.postsRouter.put('/:id', (0, express_validator_1.body)('title').isString(), (0, express_validator_1.body)('shortDescription').isString(), (0, express_validator_1.body)('content').isString(), (0, express_validator_1.body)('bloggerId').isNumeric(), (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            "errorsMessages": [
                {
                    "message": "string",
                    "field": "string"
                }
            ],
            "resultCode": 1
        });
    }
    else {
        const isFound = postsRepo_1.postsRepo.updatePostById(+req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.bloggerId);
        if (isFound) {
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }
    }
});
exports.postsRouter.delete('/:id', (req, res) => {
    if (postsRepo_1.postsRepo.deletePostById(+req.params.id)) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=postsRouter.js.map