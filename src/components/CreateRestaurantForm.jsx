import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
const CreateRestaurantForm = ({restaurantEditData}) => {
    const [name,setName] = useState(restaurantEditData?.name|| "")
    const [address,setAddress] = useState(restaurantEditData?.name||"")
    const [logo,setLogo] = useState(restaurantEditData?.logo||"")
    const [image,setImage] = useState(restaurantEditData?.image||"")
    const [latitude,setLatitude] = useState(restaurantEditData?.latitude||"")
    const [longitude,setLongitude] = useState( restaurantEditData?.longitude || "")
    const [rating,setRating] = useState(restaurantEditData?.rating||"")
    const [phoneNumber,setPhoneNumber] = useState(restaurantEditData?.phoneNumber||"")
    const [deliveryTime,setDeliveryTime] = useState(restaurantEditData?.deliveryTime || "")
    const [success,setSuccess] = useState(false)
    // console.log()

    const router = useRouter()
    const createRestaurant =async(e)=>{
        e.preventDefault()
        const data={name,address,logo,image,latitude,longitude,rating,phoneNumber,deliveryTime}
        if(restaurantEditData?.uuid){
            await axios.put(
                `http://localhost:5000/api/restaurant/${restaurantEditData?.uuid}`,{...data})
            .then(()=>{
                setSuccess(true)
                console.log('updated')
            })
            .catch(function (error) {
               console.log(error) 
            });
        }
        else{
            await axios.post("http://localhost:5000/api/restaurant/",data)
            .then((data)=>{
                console.log("submitted successfully")
                setSuccess(true)
            })
        }
    }
    if(success){
        router.push("/restaurant")
    }
    
    return (
    <section>
        <main>
            <div className='mt-3'>
                <form className='p-3' onSubmit={createRestaurant}>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Name</label>
                        <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Address</label>
                        <input type="text" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    {/* image of restaurant */}
                    <div className='flex justify-between gap-x-2'>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="" className='text-black'>Logo</label>
                            <input type="text" value={logo} onChange={(e)=>setLogo(e.target.value)} className='h-40 w-full  border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                        </div>


                        
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="" className='text-black'>Restaurant Image</label>
                            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className='h-40 border-2   w-full  bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                        </div>
                    </div>
                        {/* longitude and latitude */}
                    <div className='flex justify-between gap-x-5'>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="" className='text-black'>Latitude</label>
                            <input type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)} placeholder='Latitude' className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                        </div>
                        <div className='flex flex-col gap-y-2 w-full'>
                            <label htmlFor="" className='text-black'>longitude</label>
                            <input type="text" placeholder='longitude' value={longitude} onChange={(e)=>setLongitude(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Rating</label>
                        <input type="text" placeholder='Rating' value={rating} onChange={(e)=>setRating(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Phone Number</label>
                        <input type="text" placeholder='Phone Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Delivery Time</label>
                        <input type="text" placeholder='0min' value={deliveryTime} onChange={(e)=>setDeliveryTime(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
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

export default CreateRestaurantForm