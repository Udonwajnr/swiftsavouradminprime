import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const CreateCategoryForm = () => {
    const [name,setName] = useState("")
    const [restaurantName,setRestaurantName] = useState()

    const data ={name,restaurantName}
    const createCategory =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/category/",data).then((data)=>console.log("submitted successfully"))
    }

    return (
    <section>
        <main>
            <div className='mt-3'>
                <form className='p-3' onSubmit={createCategory}>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Name</label>
                        <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>
                        <input type="text" placeholder='Restaurant Name'value={restaurantName} onChange={(e)=>{setRestaurantName(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>       
                    <div className='flex flex-col mt-5'>
                        <button type='submit' className='bg-black text-center w-full h-10 text-white'>Publish</button>
                    </div>
                </form>
            </div>
        </main>
    </section>
  )
}

export default CreateCategoryForm