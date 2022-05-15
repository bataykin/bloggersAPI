import {postsRepo} from "../repos/postsRepo";
import express, {Request, Response} from "express"
import {body, validationResult} from "express-validator";
import {inputValidatorMiddleware} from "../middlewares/validatorMiddleware";

export const postsRouter = express.Router()

postsRouter.get('/', (req:Request, res:Response) => {
    const allPosts = postsRepo.getPosts()
    res.status(200).send(allPosts)
})

postsRouter.get('/:id', (req:Request, res:Response) => {
    const foundPost = postsRepo.findPostById(+req.params.id)
    if (foundPost.length === 1) {
        res.status(200).send(foundPost)
    } else {
        res.sendStatus(404)
    }
})

postsRouter.post('/',
    body('title').isString(),
    body('shortDescription').isString(),
    body('content').isString(),
    body('bloggerId').isNumeric(),
    // body('bloggerName').isString(),
    (req:Request, res:Response) => {
    //@ts-ignore
        const errors = req.errors;
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
        } else {
            res.status(201).send(postsRepo.createPost(req.body.title, req.body.shortDescription, req.body.content, req.body.bloggerId))
        }
    })

postsRouter.put('/:id',
    body('title').isString(),
    body('shortDescription').isString(),
    body('content').isString(),
    body('bloggerId').isNumeric(),
    (req:Request, res:Response) => {
        const errors = validationResult(req);
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
        } else {
            const isFound = postsRepo.updatePostById(+req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.bloggerId)
            if (isFound) {
                res.sendStatus(204)
            } else {
                res.sendStatus(404)
            }
        }
})

postsRouter.delete('/:id', (req:Request, res:Response) => {
    if (postsRepo.deletePostById(+req.params.id)) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})