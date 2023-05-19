import BlogModel from "../model/blog.model";
import { EditBlog, IBlog, NewData } from "../types/type";

export default new class BlogService {

    private DB = BlogModel;

    public async Create(newblog : NewData) : Promise<string>{
        return this.DB.NewBlog(newblog);
    };
    public async FetchBlog(): Promise<IBlog[]> {
        return this.DB.GetAllBlog();
    };
    public async FetchBlogById(id : IBlog["id"]) : Promise<IBlog | undefined>{
        return this.DB.GetById(id);
    };
    public async DeletBlogById(id : IBlog["id"]) : Promise<string>{
        return this.DB.RemoveById(id);
    };
    public async EditBlog(id : IBlog["id"] , newdata : EditBlog) : Promise<string>{
        return this.DB.EditBlogById(id , newdata)
    }

};