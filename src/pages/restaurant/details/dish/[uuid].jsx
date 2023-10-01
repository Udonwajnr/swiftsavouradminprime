import React from "react";
import CreateDishForm from "@/components/CreateDishForm";
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import DishTable from "@/components/DishTable"
import { useRouter } from "next/router"
import RestaurantDishTable from "@/components/RestaurantDishTable";

export default function Dish(){
    const router = useRouter()
    const {uuid} = router.query
    const [loading,setLoading] = useState(false)
    const [dishData,setDishData] =useState([])
    const [restaurantData,setRestaurantData] =useState([])

    const getData =async()=>{
        await axios.get(`https://swifsavorapi.onrender.com/api/restaurant/${uuid}`)
        .then((data)=>{
            setLoading(true)
            setRestaurantData(
                data?.data?.results.restaurant.restaurant
            )
            
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        }
            )
    }
    useEffect(()=>{
        if(uuid){

            getData()
        }
    },[uuid])
        return(
            <main className="p-3">
                <div className="inline-block bg-green-300 my-3 ">
                    <Link href={`/restaurant/details/dish/create/${uuid}`} className="flex p-2 text-base bg-black text-white">
                        Create
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path></svg>
                    </Link>
                </div>
                {

                }
                <RestaurantDishTable restaurantData={restaurantData}/>
            </main>
        )
}