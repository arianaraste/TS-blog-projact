import blogService from "./services/blog.service";
import BlogService from "./services/blog.service";

(async () => {
    console.log(
        await BlogService.Create({
            name : "arian",
            text : "im backend devloper"

        })
    );
    console.log(
        await BlogService.Create({
            name : "reza",
            text : "im data since"

        })
    );
    console.log(
        await BlogService.Create({
            name : "ahmad",
            text : "im hacker"

        })
    );
    console.log(
        await BlogService.Create({
            name : "ali",
            text : "im frontend developer"

        })
    );
    console.log(await BlogService.FetchBlog());
    console.log(await BlogService.FetchBlogById(1));
    console.log(await BlogService.DeletBlogById(3));
    console.log(await BlogService.DeletBlogById(3));
    console.log(await BlogService.EditBlog(1 , {
        text : "im backend developer and blockchain developer"
    }));
    console.log(await blogService.FetchBlog());
    
    
})();