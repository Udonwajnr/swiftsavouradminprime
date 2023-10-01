import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
const CreateCategoryForm = ({categoryEditData,uuid}) => {
    const [name,setName] = useState(categoryEditData?.name||"")
    const [restaurantName,setRestaurantName] = useState(categoryEditData?.restaurant?.name||"")
    const [restaurant,setRestaurant] = useState({})
    const  [updated,setUpdated] = useState(false)
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)
    
    // console.log(categoryEditData?.restaurant?.name)
    const router = useRouter()
    const restaurantUuid  = router.query.uuid
    // console.log(categoryEditData?.uuid)
    const createCategory=async(e)=>{
        e.preventDefault()
        const data ={name,restaurantName}
        if(categoryEditData?.uuid){
            await axios.put(
                `https://swifsavorapi.onrender.com/api/category/${categoryEditData?.uuid}`,{...data})
            .then(()=>{
                setUpdated(true)
                console.log('updated')
            })
            .catch(function (error) {
                setUpdated(false)
               console.log(error) 
            });
        }
        else{
        await axios.post("https://swifsavorapi.onrender.com/api/category/",data)
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
        router.push(`/restaurant/details/${uuid}`)
    }
    // console.log(categoryEditData.restaurant.uuid)
    if(updated){
        router.push(`/restaurant/details/category/${categoryEditData.restaurant.uuid}`)
    }


    useEffect(()=>{
        if(uuid){
            axios.get(`https://swifsavorapi.onrender.com/api/restaurant/${restaurantUuid}`)
            .then((data)=>{
                setLoading(true)
                setRestaurant(data.data.results.restaurant.restaurant)
                setRestaurantName(data.data.results.restaurant.restaurant.name)
            }
                )
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            
            })
        }
    },[restaurantUuid])
    console.log(console.log(restaurantName))
    return (
    <section>
        <main>
            <div className='mt-3'>
                <form className='p-3' onSubmit={createCategory}>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Name</label>
                        <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    {/* <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>
                        <input type="text" placeholder='Restaurant Name'value={restaurantName} onChange={(e)=>{setRestaurantName(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div> */}
                    {/* <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>

                        <select className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none' name="" id="" onChange={(e)=>{setRestaurantName(e.target.value)}}>
                            {
                                !categoryEditData?.uuid&&
                            <option className='' value=""></option>  
                            }
                            {
                                restaurant.map((restaurant)=>{
                                    return(
                                        <option className='' value={restaurant.name}>{restaurant.name}</option>
                                    )
                                })
                            }

                        </select>
                    </div>        */}
                      <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>
                        <input type="text" placeholder='Restaurant Name'value={restaurantName} disabled className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
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