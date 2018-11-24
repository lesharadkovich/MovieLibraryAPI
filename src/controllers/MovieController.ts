import {
    Controller,
    Get,
    Post,
    OnUndefined,
    Body,
    Param,
    Delete,
} from "routing-controllers";

import { LibraryRepository } from '../repositories/LibraryRepository'

@Controller("/movie")
export class MovieController {
    baseUrl: string = '';

    constructor(private libraryRepository: LibraryRepository) { }

    @Get("/:id")
    async getMovie(@Param("id") id: number) {
        return this.libraryRepository.getMovie(id);
    }


    @Post("/:id")
    @OnUndefined(204)
    async editMovie(@Param("id") id: number, @Body() newMovieData: any) {
        return this.libraryRepository.editMovie(id, newMovieData);
    }

    @Delete("/:id")
    @OnUndefined(204)
    async deleteMovie(@Param("id") id: number) {
        return this.libraryRepository.deleteMovie(id);
    }
}
