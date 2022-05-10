import {bloggersRepo} from "../repos/bloggersRepo";
import express, {Request, Response} from "express"
import {body, validationResult} from "express-validator";



export const bloggersRouter = express.Router()

bloggersRouter.get('/', (req:Request, res: Response) => {
    const allBloggers = bloggersRepo.getBloggers()
    res.status(200).send(allBloggers)
})

bloggersRouter.post('/',
    body('name').isString(),
    body('youtubeURL').isString(),
    (req: Request, res: Response) =>{
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
            let newBlogger = bloggersRepo.createBlogger(req.body.name, req.body.youtubeURL)
            res.status(201).send(newBlogger)
        }

})

bloggersRouter.get ('/:id', (req: Request, res: Response) =>{
    const foundBlogger = bloggersRepo.findBloggerById(req.params.id)
    if (foundBlogger.length === 1 ) {
        res.status(200).send(foundBlogger)
    } else
    res.sendStatus(404)
})

bloggersRouter.put('/:id',
    body('name').isString(),
    body('youtubeURL').isString(),
    (req:Request, res: Response) =>{
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
            const isFound = bloggersRepo.updateBloggerById(req.params.id, req.body.name, req.body.youtubeURL)
            if (isFound) {
                res.sendStatus(204)
            } else {
                res.sendStatus(404)
            }
        }


})

bloggersRouter.delete('/:id', (req:Request, res: Response) => {
    const isDeleted = bloggersRepo.deleteBloggerById(req.params.id)
    if (isDeleted) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})