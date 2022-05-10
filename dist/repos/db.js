"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.bloggers = void 0;
exports.bloggers = [
    { id: 1, name: "Vasya", youtubeURL: "https://www.youtube.com/channel/UCvu13gTHuWVMzV-pvZ-me4A" },
    { id: 2, name: "Petya", youtubeURL: "https://www.youtube.com/channel/UCvu13gTHuWVMzV-pvZ-me4A" },
    { id: 3, name: "Kolya", youtubeURL: "https://www.youtube.com/channel/UCvu13gTHuWVMzV-pvZ-me4A" },
    { id: 4, name: "Fedya", youtubeURL: "https://www.youtube.com/channel/UCvu13gTHuWVMzV-pvZ-me4A" },
    { id: 5, name: "Olyan", youtubeURL: "https://www.youtube.com/channel/UCvu13gTHuWVMzV-pvZ-me4A" },
];
exports.posts = [
    { id: 1, title: "Blabla1", shortDescription: "Opisalovo-1", content: "Vot eta kontent - 1", bloggerId: exports.bloggers[0].id, bloggerName: exports.bloggers[0].name },
    { id: 2, title: "Blabla2", shortDescription: "Opisalovo-2", content: "Vot eta kontent - 2", bloggerId: exports.bloggers[1].id, bloggerName: exports.bloggers[1].name },
    { id: 3, title: "Blabla3", shortDescription: "Opisalovo-3", content: "Vot eta kontent - 3", bloggerId: exports.bloggers[1].id, bloggerName: exports.bloggers[1].name },
    { id: 4, title: "Blabla4", shortDescription: "Opisalovo-4", content: "Vot eta kontent - 4", bloggerId: exports.bloggers[3].id, bloggerName: exports.bloggers[3].name },
    { id: 5, title: "Blabla5", shortDescription: "Opisalovo-5", content: "Vot eta kontent - 5", bloggerId: exports.bloggers[4].id, bloggerName: exports.bloggers[4].name },
];
//# sourceMappingURL=db.js.map