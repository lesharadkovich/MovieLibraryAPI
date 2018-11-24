import {Service} from "typedi";
import {NotFoundError} from "routing-controllers";


@Service()
export class LibraryRepository {
    private library: Array<any> = [{
        id: 1,
        name: 'asd'
    }];

    public getAll(): any[] {
        return this.library;
    }

    public createNewMovie(movie: any): void {
        this.library.push(movie);
    }

    public getMovie(movieId: number): any {
        let result = this.library.find(movie => movie.id === movieId);

        if (!result) {
            throw new NotFoundError("Movie was not found");
        }

        return result;
    }

    public editMovie(movieId: number, movieData: any): void {
        this.library.forEach((movie) => {
            if (movie.id === movieId) {
                movie = movieData;
                return;
            }
        });
    }

    public deleteMovie(movieId: number): void {
        this.library = this.library.filter(x => x.id !== movieId);
    }
}
