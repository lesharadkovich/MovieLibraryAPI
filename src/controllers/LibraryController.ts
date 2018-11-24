import {Body, ContentType, Controller, Get, OnUndefined, Post} from "routing-controllers";
import { LibraryRepository } from '../repositories/LibraryRepository'
import {Movie} from '../types/movie'


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
    async createNewMovie(@Body() newMovieData: Movie) {
        return this.libraryRepository.createNewMovie(newMovieData);
    }
}
