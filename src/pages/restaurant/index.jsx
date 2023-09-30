import CreateRestaurantForm from "@/components/CreateRestaurantForm";
import React,{useState,useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import RestaurantTable from "@/components/RestaurantTable";
export default function Restaurant(){
    const [restaurantData,setRestaurantData] =useState([])
    const getData =async()=>{
        await axios.get("https://swifsavorapi.onrender.com/api/restaurant/")
        .then((data)=>setRestaurantData(data.data.results.restaurants.restaurants))
        .catch(function (error) {
            console.log(error) 
         });
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(restaurantData)
        return(
            <main className="p-3">
                <div className="inline-block bg-green-300 my-3 ">
                    <Link href={'/restaurant/create'} className="flex p-2 text-base bg-black text-white">
                        Create
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path></svg>
                    </Link>
                </div>
                <RestaurantTable restaurantData={restaurantData}/>
            </main>
        )
}