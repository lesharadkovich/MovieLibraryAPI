import {Body, ContentType, Controller, Get, OnUndefined, Post} from "routing-controllers";
import { LibraryRepository } from '../repositories/LibraryRepository'



@Controller("/library")
export class LibraryController {

    constructor(private libraryRepository: LibraryRepository) { }


    // Get all
    @Get("/")
    @ContentType('application/json')
    async getEntireLibrary() {
        return this.libraryRepository.getAll();
    }

    // Create new movie
    @Post("/")
    @ContentType('application/json')
    @OnUndefined(201)
    async createNewMovie(@Body() newMovieData: any) {
        return this.libraryRepository.createNewMovie(newMovieData);
    }
}
