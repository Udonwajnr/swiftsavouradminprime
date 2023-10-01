import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {CitySelect,CountrySelect,StateSelect} from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css"

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
    const [country, setCountryId] = useState(restaurantEditData?.country||'');
    const [state, setState] = useState(restaurantEditData?.state||'');
    const [city,setCity] = useState(restaurantEditData?.city||'')
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [cityid, setcityid] = useState(0);
    const [success,setSuccess] = useState(false)

    console.log(state,country,city)
    const router = useRouter()
    const createRestaurant =async(e)=>{
        e.preventDefault()
        const data={name,address,logo,image,latitude,longitude,rating,phoneNumber,deliveryTime,country,state,city}
        if(restaurantEditData?.uuid){
            await axios.put(
                `https://swifsavorapi.onrender.com/api/restaurant/${restaurantEditData?.uuid}`,{...data})
            .then(()=>{
                setSuccess(true)
                console.log('updated')
            })
            .catch(function (error) {
               console.log(error) 
            });
        }
        else{
            await axios.post("https://swifsavorapi.onrender.com/api/restaurant/",data)
            .then((data)=>{
                console.log("submitted successfully")
                setSuccess(true)
            }).catch(function (error) {
                console.log(error) 
             });
        }
    }
    if(success){
        router.push("/restaurant")
    }
    
    return (
    <section>
        <main>
            <div className='mt-3'>
                <form className='' onSubmit={createRestaurant}>
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
                    <div className='flex justify-between gap-x-5 md:flex-col'>
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
                   {/* country */}
                    <div>
                        <label htmlFor="">Country</label>
                         <CountrySelect onChange={(e) => { setCountryid(e.id)
                            setCountryId(e.name)
                        }} placeHolder="Select Country"/>
                    </div>
                    <div>
                        <label htmlFor="">State</label>
                         <StateSelect  countryid={countryid} onChange={(e) => {
                            console.log(e)
                            setstateid(e.id)
                            setState(e.name);}} placeHolder="Select State"/>
                    </div>
                    <div>
                        <label htmlFor="">City</label>
                        <CitySelect countryid={countryid} stateid={stateid} onChange={(e) => { 
                            setCity(e.name)
                             }} placeHolder="Select City"/>
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