"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepo = void 0;
const db_1 = require("./db");
const bloggersRepo_1 = require("./bloggersRepo");
exports.postsRepo = {
    getPosts() {
        return db_1.posts;
    },
    createPost(title, shortDescription, content, bloggerId) {
        const newPost = {
            id: db_1.posts.length + 1,
            title: "Brand new Blabla",
            shortDescription: "Brand new Opisalovo",
            content: "Vot eta kontent - CONTENTISHE",
            bloggerId: bloggerId,
            bloggerName: bloggersRepo_1.bloggersRepo.findBloggerNameById(bloggerId) + ""
        };
        db_1.posts.push(newPost);
        return newPost;
    },
    findPostById(postId) {
        return db_1.posts.filter(p => p.id === postId);
    },
    updatePostById(postId, newTitle, newShortDescription, newContent, newBloggerId) {
        const updatedPost = db_1.posts.find(p => +p.id === postId);
        if (updatedPost) {
            updatedPost.title = newTitle;
            updatedPost.shortDescription = newShortDescription;
            updatedPost.content = newContent;
            updatedPost.bloggerId = newBloggerId;
            return true;
        }
        else {
            return false;
        }
    },
    deletePostById(postId) {
        for (let i = 0; i < db_1.posts.length; i++) {
            if (db_1.posts.find(p => p.id === postId)) {
                db_1.posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
//# sourceMappingURL=postsRepo.js.map