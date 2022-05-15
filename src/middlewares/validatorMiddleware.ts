import {NextFunction} from "express";
import {body, validationResult} from "express-validator";

export const inputValidatorMiddleware = (req: any, res: any, next: NextFunction) => {
    // here we make validation. Also here we can transform returned object (for example to satisfy the Swagger API)

    next()
}