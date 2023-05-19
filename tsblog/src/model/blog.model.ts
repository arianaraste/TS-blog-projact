import { EditBlog, IBlog, IDB, NewData } from "../types/type"


export default new class BlogModel {

    private state : IDB = { blog : [{id : 1 , name : "trade" , text : "any"}]};

    public async NewBlog(newdata : NewData ) : Promise<string>{

        this.state.blog.push({
            id : this.state.blog.length +1 ,
            name : newdata.name,
            text : newdata.text
        })
        return "new blog created";

    };

    public async GetAllBlog() : Promise<IBlog[]> {
        
        return this.state.blog
        
    };

    public async GetById(id : IBlog["id"]) : Promise<IBlog | undefined> {
      
        return this.state.blog.find(blog => blog.id == id);

    };

    public async RemoveById(id : IBlog["id"]) : Promise<string>  {

        if(!(await this.GetById(id))){return "not fund blog"}else{
            this.state.blog.forEach((blog , index)=>{
                if(blog.id == id){
                    this.state.blog.splice(index , 1);
                }
            });
            return "remove blog succes"
            

        }
    };

    public async EditBlogById(id : IBlog["id"] , newdata : EditBlog) : Promise<string>{

        if(!this.GetById(id)) return "not found id";
        

            this.state.blog.forEach((blog , index)=>{
                this.state.blog[index] = Object.assign(blog , newdata);
            });
            return "updateblogsuccses"

        }

    };

