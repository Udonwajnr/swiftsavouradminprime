import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const CreateDishForm = () => {
    const [restaurantName,setRestaurantName] = useState("")
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [price,setPrice] = useState("")
    const [categoryName,setCategoryName] = useState("")

    const data ={restaurantName,categoryName,name,description,image,price}
    console.log(data)
    // change uuid to name in the data base
    const createDish =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/dish/",data).then((data)=>console.log("submitted successfully"))
    }

  return (
    <section>
        <main>
            <div className='mt-3'>
                <form className='p-3' onSubmit={createDish}>
                <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>
                        <input type="text" placeholder='Restaurant Name' value={restaurantName} onChange={(e)=>setRestaurantName(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Name</label>
                        <input type="text" placeholder='Name of Dish' value={name} onChange={(e)=>{setName(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black '>Description</label>
                        <textarea name="" id="" value={description} onChange={(e)=>{setDescription(e.target.value)}} className='bg-[#fafafa] focus:outline-none' cols="30" rows="10" placeholder='Description'></textarea>
                    </div>
                    {/* image of restaurant */}
                    <div className='flex justify-between gap-x-2'>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="" className='text-black'>Dish Image</label>
                            <input type="file" value={image} onChange={(e)=>{setImage(e.target.value)}} className='h-40 border-2   w-full  bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Price</label>
                        <input type="number" placeholder='0.00' value={price} onChange={(e)=>{setPrice(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Category Name</label>
                        <input type="text" placeholder='Category Name' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <button type='submit' className='bg-black text-center w-full h-10 text-white'>Create</button>
                    </div>
                </form>
            </div>
        </main>
</section>
  )
}

export default CreateDishForm