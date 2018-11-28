"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const MoviesInstance_1 = require("../models/db/MoviesInstance");
let LibraryRepository = class LibraryRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MoviesInstance_1.MoviesInstance.findAll();
        });
    }
    createNewMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MoviesInstance_1.MoviesInstance.create(movie);
        });
    }
    getMovie(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield MoviesInstance_1.MoviesInstance.findOne({
                where: { id: movieId }
            });
            if (!result) {
                throw new routing_controllers_1.NotFoundError("Movie was not found");
            }
            return result.toJSON();
        });
    }
    editMovie(movieData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MoviesInstance_1.MoviesInstance.insertOrUpdate(movieData);
        });
    }
    deleteMovie(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MoviesInstance_1.MoviesInstance.destroy({
                where: { id: movieId }
            });
        });
    }
};
LibraryRepository = __decorate([
    typedi_1.Service()
], LibraryRepository);
exports.LibraryRepository = LibraryRepository;
//# sourceMappingURL=LibraryRepository.js.map