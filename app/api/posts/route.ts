import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/database/db";
import Post,{IPost} from "@/lib/models/Post";


//GET: Fetch all Posts
export async function GET(){
    try {
        await connectToDB();

        const posts:IPost[] = await Post.find({});

        return NextResponse.json({success:true, data:posts},{status:201});
    } catch (error:any) {
        return NextResponse.json({success:false, error: error.message },{status:400})
    }
}

//POST: Create a new post
export async function POST(request:Request){
    try {
      await connectToDB(); 
      const body = await request.json();
      const {title, description, author} = body;

      const post = await Post.create({title,description,author});

      return NextResponse.json({success:true, data:post},{status:201});
    } catch (error:any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}