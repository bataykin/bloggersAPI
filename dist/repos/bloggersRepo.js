"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloggersRepo = void 0;
const db_1 = require("./db");
exports.bloggersRepo = {
    getBloggers() {
        return db_1.bloggers;
    },
    createBlogger(bloggerName, bloggerYoutubeURL) {
        const newBlogger = {
            id: +db_1.bloggers.length + 1,
            name: bloggerName,
            youtubeURL: bloggerYoutubeURL
        };
        db_1.bloggers.push(newBlogger);
        return newBlogger;
    },
    findBloggerById(bloggerId) {
        return db_1.bloggers.filter(b => b.id === +bloggerId);
    },
    updateBloggerById(bloggerId, name, youtubeURL) {
        const updatedBlogger = db_1.bloggers.find(b => +b.id === +bloggerId);
        if (updatedBlogger) {
            updatedBlogger.name = name;
            updatedBlogger.youtubeURL = youtubeURL;
            return true;
        }
        else {
            return false;
        }
    },
    deleteBloggerById(bloggerId) {
        for (let i = 0; i < db_1.bloggers.length; i++) {
            if (db_1.bloggers[i].id === +bloggerId) {
                db_1.bloggers.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    findBloggerNameById(bloggerId) {
        const bloggerNameById = db_1.bloggers.filter(b => b.id === +bloggerId)[0].name;
        if (bloggerNameById !== undefined) {
            return bloggerId;
        }
        else {
            return 0;
        }
    }
};
//# sourceMappingURL=bloggersRepo.js.map