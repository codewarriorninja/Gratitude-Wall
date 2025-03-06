'use server'
import { revalidatePath } from "next/cache"
import { connectToDB } from "../database/db"
import { handleError } from "../utils"
import User from "../models/userModel"

declare type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
};

declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
};

export async function createUser(user:CreateUserParams){
    try {
       await connectToDB();
       const newUser = await User.create(user);
       return JSON.parse(JSON.stringify(newUser)); 
    } catch (error) {
        handleError(error);
    }
}

export async function getUserById(userId:string){
    try {
        await connectToDB();

        const user = await User.findById({clerkId:userId});

        if(!user) throw new Error('User Not found');

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}

export async function updateUser(clerkId:string, user:UpdateUserParams){
    try {
        await connectToDB();
        const updateUser = await User.findByIdAndUpdate({clerkId},user,{new:true});

        if(!updateUser) throw new Error('User update Failed');
        return JSON.parse(JSON.stringify(updateUser))
    } catch (error) {
        handleError(error);
    }
}

export async function deleteUser(clerkId:string){
    try {
        await connectToDB();
        const userToDelete = await User.findOne({clerkId});

        if(!userToDelete) throw new Error ('User Not Found');

        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath('/');
        return deletedUser ? JSON.parse(JSON.stringify(deleteUser)):null;
    } catch (error) {
        handleError(error);
    }
}