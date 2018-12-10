import {Service} from "typedi";
import {NotFoundError} from "routing-controllers";

import {MoviesInstance} from '../models/db/MoviesInstance'
import {Movie} from '../types/movie'


@Service()
export class LibraryRepository {

    public async getAll(): Promise<any> {
        return MoviesInstance.findAll();
    }

    public async createNewMovie(movie: Movie): Promise<void> {
        await MoviesInstance.create<MoviesInstance>(movie);
    }

    public async getMovie(movieId: number): Promise<Movie> {
        let result = await MoviesInstance.findOne({
            where: { id: movieId }
        });

        if (!result) {
            throw new NotFoundError("Movie was not found");
        }

        return result.toJSON();
    }

    public async editMovie(movieData: Movie): Promise<void> {
        await MoviesInstance.insertOrUpdate(movieData);
    }

    public async deleteMovie(movieId: number): Promise<void> {
        await MoviesInstance.destroy({
            where: { id: movieId }
        });
    }
}
