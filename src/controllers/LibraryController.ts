import {Body, Controller, Get, OnUndefined, Post, Req} from "routing-controllers";
import { LibraryRepository } from '../repositories/LibraryRepository'
// import {Movie} from '../types/movie'


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
    @OnUndefined(201)
    async createNewMovie(@Req() req: any, @Body() newMovieData: any) {
        console.log(req);
        await this.libraryRepository.createNewMovie(newMovieData);
        return {
            success: true
        };
    }
}
