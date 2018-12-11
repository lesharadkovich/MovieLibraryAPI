import {Controller, Get, Param, Res} from "routing-controllers";
import { Response } from "express";
import * as path from "path";
import {promisify} from "util";


@Controller("/uploads")
export class LibraryController {

    @Get("/:imagePath")
    async getEntireLibrary(@Param("imagePath") imagePath: string, @Res() response: Response) {
        const fileName = path.resolve(__dirname, '../../uploads', imagePath);
        await promisify<string, void>(response.sendFile.bind(response))(fileName);
        return response;
    }
}
