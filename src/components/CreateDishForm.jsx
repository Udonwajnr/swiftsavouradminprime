import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const CreateDishForm = ({dishEditData,uuid}) => {
    const [restaurantName,setRestaurantName] = useState(dishEditData?.restaurant?.name||"")
    const [name,setName] = useState(dishEditData?.name || "")
    const [description,setDescription] = useState(dishEditData?.description||"")
    const [image,setImage] = useState(dishEditData?.image || "")
    const [price,setPrice] = useState(dishEditData?.price || "")
    const [categoryName,setCategoryName] = useState(dishEditData?.category?.name || "")
    const [restaurant,setRestaurant] = useState([])
    const [category,setCategory] = useState([])
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)
    const  [updated,setUpdated] = useState(false)

    
    // change uuid to name in the data base
    const router = useRouter()
    const restaurantUuid = router.query.uuid
    
    
    const createDish = async(e)=>{
        e.preventDefault()
        const data ={restaurantName,categoryName,name,description,image,price}
        if(dishEditData?.uuid){
            await axios.put(
                `https://swifsavorapi.onrender.com/api/dish/${dishEditData?.uuid}`,{...data})
            .then(()=>{
                setUpdated(true)
                console.log('updated')
            })
            .catch(function (error) {
               console.log(error) 
            });
        }
        else{
            axios.post("https://swifsavorapi.onrender.com/api/dish/",data)
            .then((data)=>{
                console.log("submitted successfully")
                setSuccess(true)
            })
        }
    }
    if(success){
        router.push(`/restaurant/details/dish/${uuid}`)
    }

    if(updated){
        router.push(`/restaurant/details/dish/${dishEditData.restaurant.uuid}`)
    }

    useEffect(()=>{
        axios.get(`https://swifsavorapi.onrender.com/api/restaurant/${restaurantUuid}`)
         .then((data)=>{
            setLoading(true)
            console.log(data)
            setRestaurantName(data?.data?.results?.restaurant?.restaurant.name)
            setRestaurant(data?.data?.results?.restaurant?.restaurant)
            // setCategory(data?.data?.results?.restaurants?.restaurants.category)
        })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            })
    },[restaurantUuid])

    console.log(restaurant)
    
  return (
    <section>
        <main>
            <div className='mt-3'>
                <form className='p-3' onSubmit={createDish}>
                <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>
                        <input type="text" placeholder='Restaurant Name' defaultValue={restaurantName} disabled  className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>

                    {/* <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Restaurant Name</label>

                        <select className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none' name="" id="" onChange={(e)=>{setRestaurantName(e.target.value)}}>
                            {
                                !dishEditData?.uuid&&
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
                    </div> */}                    
                    
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
                            <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} className='h-40 border-2   w-full  bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Price</label>
                        <input type="number" placeholder='0.00' value={price} onChange={(e)=>{setPrice(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    {/* <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Category Name</label>
                        <input type="text" placeholder='Category Name' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div> */}
                    
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Category Name</label>

                        <select className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none' name="" id="" onChange={(e)=>setCategoryName(e.target.value)}>
                            {
                                !dishEditData?.uuid&&
                            <option className='' value=""></option>  
                            }
                            {
                              restaurant?.category?.map((category,index)=>{
                                return(
                                                 <option key={index} className='' value={category.name}>{category.name}</option>
                                )
                              }) 
                            //    category.map((category)=>{
                            //         return(
                            //             <option className='' value={category.name}>{category.name}</option>
                            //         )
                            //     })
                            }
                        </select>
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

export default CreateDishForm