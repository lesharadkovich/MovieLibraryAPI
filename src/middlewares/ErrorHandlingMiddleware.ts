import {Middleware, ExpressErrorMiddlewareInterface} from "routing-controllers";
import { Request, Response } from "express";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, request: Request, response: Response, next: (err: any) => any) {
        console.error(`${error.name}: ${error.message}`);

        response.status(error.httpCode).send(error.message);
    }

}