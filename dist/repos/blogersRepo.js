"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogersRepo = void 0;
const db_1 = require("./db");
exports.blogersRepo = {
    getBlogers() {
        return db_1.blogers;
    },
    createBloger(name, youtubeURL) {
    },
    findBlogerById(blogerId) {
    },
    updateBlogerById(blogerId, name, youtubeURL) {
    },
    deleteBlogerById(blogerId) {
    }
};
//# sourceMappingURL=blogersRepo.js.map