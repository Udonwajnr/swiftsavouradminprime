import React from "react";
import CreateRestaurantForm from "@/components/CreateRestaurantForm";

export default function CreateRestaurant(){

    return(
        <main className="bg-white ">
            <div className="p-3">
                <h1 className='text-2xl font-bold '>Create Restaurant</h1>
            </div>
            <CreateRestaurantForm/>
        </main>
    )
}