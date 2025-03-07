import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/database/db";
import Post from "@/lib/models/Post";

//GET:Retrieve a single post by id
export async function GET(
    request:Request,{params}:{params:{id:string}}
) {
  try {
    await connectToDB();
    const post = await Post.findById(params.id);

    if(!post){
        return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });  
    }
    return NextResponse.json({success:true, data:post},{status:201});
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// PUT: Update a post (for editing content or incrementing likes)
export async function PUT(request:Request,{params}:{params:{id:string}}){
    try {
      await connectToDB();
      const body = await request.json();
      const post = await Post.findByIdAndUpdate(params.id, body, {new:true});
      
      if(!post){
        return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: post });
    } catch (error:any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });   
    }
}

// DELETE: Remove a post by 
export async function DELETE(
    request:Request,{params}:{params:{id:string}}
){
    try {
      await connectToDB();
      const post = await Post.findByIdAndDelete(params.id);
      
      if(!post){
        return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({success:true, data:{}});
    } catch (error:any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });   
    }
}