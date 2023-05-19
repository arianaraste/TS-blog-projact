export interface IBlog {
    id : number ;
    name : string ;
    text : string;
};
export interface IDB {
    blog : IBlog[]
};

export type NewData = Omit<IBlog , "id">;
export type EditBlog = Partial<NewData>;