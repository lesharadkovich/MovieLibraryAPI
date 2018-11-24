"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const routing_controllers_1 = require("routing-controllers");
const LibraryRepository_1 = require("../repositories/LibraryRepository");
let LibraryController = class LibraryController {
    constructor(libraryRepository) {
        this.libraryRepository = libraryRepository;
    }
    // Get all
    getEntireLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.libraryRepository.getAll();
        });
    }
    // Create new movie
    createNewMovie(newMovieData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.libraryRepository.createNewMovie(newMovieData);
        });
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    routing_controllers_1.ContentType('application/json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LibraryController.prototype, "getEntireLibrary", null);
__decorate([
    routing_controllers_1.Post("/"),
    routing_controllers_1.ContentType('application/json'),
    routing_controllers_1.OnUndefined(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LibraryController.prototype, "createNewMovie", null);
LibraryController = __decorate([
    routing_controllers_1.Controller("/library"),
    __metadata("design:paramtypes", [LibraryRepository_1.LibraryRepository])
], LibraryController);
exports.LibraryController = LibraryController;
//# sourceMappingURL=LibraryController.js.map