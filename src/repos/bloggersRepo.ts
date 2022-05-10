import {bloggers} from "./db";

export const bloggersRepo = {

    getBloggers() {
        return bloggers
    },

    createBlogger(bloggerName: string, bloggerYoutubeURL: string) {
        const newBlogger = {
            id: +bloggers.length + 1,
            name: bloggerName,
            youtubeURL: bloggerYoutubeURL
        }
        bloggers.push(newBlogger)
        return newBlogger
    },

    findBloggerById(bloggerId: string) {
        return bloggers.filter(b => b.id === +bloggerId)
    },

    updateBloggerById(bloggerId: string, name: string, youtubeURL: string) {
        const updatedBlogger = bloggers.find(b => +b.id === +bloggerId)
        if (updatedBlogger) {
            updatedBlogger.name = name
            updatedBlogger.youtubeURL = youtubeURL
            return true
        } else {
            return false
        }
    },

    deleteBloggerById(bloggerId: string) {
        for (let i = 0; i < bloggers.length; i++) {
            if (bloggers[i].id === +bloggerId) {
                bloggers.splice(i, 1)
                return true
            }
        }
        return false
    },
    findBloggerNameById(bloggerId: number) {
        const bloggerNameById = bloggers.filter(b => b.id === +bloggerId)[0].name
        if (bloggerNameById !== undefined) {
            return bloggerId
        } else {
            return 0
        }
    }

}