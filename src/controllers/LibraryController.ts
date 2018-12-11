import {Body, Controller, Get, OnUndefined, Post, Req, UseBefore} from "routing-controllers";
import { LibraryRepository } from '../repositories/LibraryRepository'

import {Movie} from '../types/movie'
const formData = require("express-form-data");
// const multer  = require('multer');
// const upload = multer({ dest: '../uploads/' });

const options = {
    uploadDir: '../../uploads',
    autoClean: true
};

@Controller("/library")
export class LibraryController {

    constructor(private libraryRepository: LibraryRepository) { }


    // Get all
    @Get("/")
    async getEntireLibrary() {
        const result = await this.libraryRepository.getAll();
        return JSON.stringify(result);
    }

    // Create new movie
    @Post("/")
    // @UseBefore(upload.single('image'))
    @UseBefore(formData.parse(options))
    @OnUndefined(201)
    async createNewMovie(@Body() newMovieData: Movie, @Req() req: any) {
        console.log(req);
        // newMovieData.imageurl = file.filename;
        await this.libraryRepository.createNewMovie(newMovieData);
        return {
            success: true
        };
    }
}
