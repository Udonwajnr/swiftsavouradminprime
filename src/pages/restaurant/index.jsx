import CreateRestaurantForm from "@/components/CreateRestaurantForm";
import React from "react";

export default function Restaurant(){
    return (
        <main className="bg-white">
            <div>
                    <h1 className='text-2xl font-bold'>Create Restaurant</h1>
            </div>
        <CreateRestaurantForm/>
        </main>
    )
}