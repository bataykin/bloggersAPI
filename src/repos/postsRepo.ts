import {bloggers, posts} from "./db";
import {bloggersRepo} from "./bloggersRepo";

export const postsRepo = {
    getPosts() {
        return posts
    },
    createPost(title: string, shortDescription: string, content: string, bloggerId: number) {
        const newPost = {
            id: posts.length + 1,
            title: "Brand new Blabla",
            shortDescription: "Brand new Opisalovo",
            content: "Vot eta kontent - CONTENTISHE",
            bloggerId: bloggerId,
            bloggerName: bloggersRepo.findBloggerNameById(bloggerId)+""
        }
        posts.push(newPost)
        return newPost
    },
    findPostById(postId : number) {
        return posts.filter(p => p.id ===postId)
    },
    updatePostById(postId: number, newTitle: string, newShortDescription: string, newContent: string, newBloggerId: number) {
        const updatedPost = posts.find(p => +p.id === postId)
        if (updatedPost) {
            updatedPost.title = newTitle
            updatedPost.shortDescription = newShortDescription
            updatedPost.content = newContent
            updatedPost.bloggerId = newBloggerId
            return true
        } else {
            return false
        }
    },
    deletePostById(postId: number) {
        for (let i = 0; i < posts.length; i++) {
            if (posts.find(p => p.id === postId)) {
                posts.splice(i, 1)
                return true
            }
        }
        return  false
    }


}