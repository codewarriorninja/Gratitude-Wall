import mongoose, {Schema, Document, Model} from "mongoose"


export interface IPost extends Document {
    title:string;
    description:string;
    author:string;
    likes:number
}


const  PostSchema:Schema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    author:{type:String, required:true},
    likes:{type:Number, default:0},
},{
    timestamps:true
});

const Post:Model<IPost> = mongoose?.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;