import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const CreateCategoryForm = ({categoryEditData}) => {
    const [name,setName] = useState(categoryEditData?.name||"")
    const [restaurantName,setRestaurantName] = useState(categoryEditData?.restaurant?.name||"")
    const [success,setSuccess] = useState(false)

    // console.log(categoryEditData?.restaurant?.name)
    const router = useRouter()
    // console.log(categoryEditData?.uuid)
    const createCategory=async(e)=>{
        e.preventDefault()
        const data ={name,restaurantName}
        if(categoryEditData?.uuid){
            await axios.put(
                `http://localhost:5000/api/category/${categoryEditData?.uuid}`,{...data})
            .then(()=>{
                setSuccess(true)
                console.log('updated')
            })
            .catch(function (error) {
                setSuccess(false)
               console.log(error) 
            });
        }
        else{
        await axios.post("http://localhost:5000/api/category/",data)
            .then((data)=>{
                console.log("submitted successfully")
                setSuccess(true)
            })
            .catch(function (error) {
                setSuccess(false)
               console.log(error) 
            });
        }
    }
    if(success){
        router.push("/category")
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