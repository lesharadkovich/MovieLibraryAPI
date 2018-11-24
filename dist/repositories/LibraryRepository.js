"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
let LibraryRepository = class LibraryRepository {
    constructor() {
        this.library = [{
                id: 1,
                name: 'asd'
            }];
    }
    getAll() {
        return this.library;
    }
    createNewMovie(movie) {
        this.library.push(movie);
    }
    getMovie(movieId) {
        let result = this.library.find(movie => movie.id === movieId);
        if (!result) {
            throw new routing_controllers_1.NotFoundError("Movie was not found");
        }
        return result;
    }
    editMovie(movieId, movieData) {
        this.library.forEach((movie) => {
            if (movie.id === movieId) {
                movie = movieData;
                return;
            }
        });
    }
    deleteMovie(movieId) {
        this.library = this.library.filter(x => x.id !== movieId);
    }
};
LibraryRepository = __decorate([
    typedi_1.Service()
], LibraryRepository);
exports.LibraryRepository = LibraryRepository;
//# sourceMappingURL=LibraryRepository.js.map