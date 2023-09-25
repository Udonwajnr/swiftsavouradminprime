import React from "react";
import CreateCategoryForm from "@/components/CreateCategoryForm";

export default function CreateCategory(){
    return(
        <main className="bg-white">
        <div>
             <h1 className='text-2xl font-bold'>Create Category</h1>
        </div>
        <CreateCategoryForm/>
    </main>
    )
}