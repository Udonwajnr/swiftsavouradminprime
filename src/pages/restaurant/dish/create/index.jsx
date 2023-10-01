
import React from "react"

import CreateDishForm from "@/components/CreateDishForm";

export default function CreateDish(){        
            return(
                <main className="bg-white">
                    <div>
                         <h1 className='text-2xl font-bold'>Create Dish</h1>
                    </div>
                    <CreateDishForm/>
                </main>
               )
    
}