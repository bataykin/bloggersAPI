"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloggersRouter = void 0;
const bloggersRepo_1 = require("../repos/bloggersRepo");
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
exports.bloggersRouter = express_1.default.Router();
exports.bloggersRouter.get('/', (req, res) => {
    const allBloggers = bloggersRepo_1.bloggersRepo.getBloggers();
    res.status(200).send(allBloggers);
});
exports.bloggersRouter.post('/', (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('youtubeURL').isString(), (req, res) => {
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
        let newBlogger = bloggersRepo_1.bloggersRepo.createBlogger(req.body.name, req.body.youtubeURL);
        res.status(201).send(newBlogger);
    }
});
exports.bloggersRouter.get('/:id', (req, res) => {
    const foundBlogger = bloggersRepo_1.bloggersRepo.findBloggerById(req.params.id);
    if (foundBlogger.length === 1) {
        res.status(200).send(foundBlogger);
    }
    else
        res.sendStatus(404);
});
exports.bloggersRouter.put('/:id', (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('youtubeURL').isString(), (req, res) => {
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
        const isFound = bloggersRepo_1.bloggersRepo.updateBloggerById(req.params.id, req.body.name, req.body.youtubeURL);
        if (isFound) {
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }
    }
});
exports.bloggersRouter.delete('/:id', (req, res) => {
    const isDeleted = bloggersRepo_1.bloggersRepo.deleteBloggerById(req.params.id);
    if (isDeleted) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=bloggersRouter.js.map