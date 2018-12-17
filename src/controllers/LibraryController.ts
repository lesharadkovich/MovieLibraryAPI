import {Body, Controller, Get, OnUndefined, Post, Req, UseBefore} from "routing-controllers";
import { LibraryRepository } from '../repositories/LibraryRepository'

import {Movie} from '../types/movie'
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: '../uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

const upload = multer({ storage: storage });


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
    @UseBefore(upload.any())
    @OnUndefined(201)
    async createNewMovie(@Body() newMovieData: Movie, @Req() req: any) {
        if (!newMovieData.imageurl && req.files[0].filename) {
            newMovieData.imageurl = 'uploads/' + req.files[0].filename;
        }

        await this.libraryRepository.createNewMovie(newMovieData);
    }
}
