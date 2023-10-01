import React from "react";
import CreateCategoryForm from "@/components/CreateCategoryForm";
import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"

export default function CreateCategory(){
    const [restaurantEditData,setRestaurantEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        if(!uuid){
            console.log("wrong uuid")
        }
         axios.get(`https://swifsavorapi.onrender.com/api/restaurant/${uuid}`)
         .then((data)=>{
            setLoading(true)
            setRestaurantEditData(data?.data?.results?.restaurant?.restaurant)
        })
         .catch(function (error) {
          setLoading(false) 
         });
    },[uuid])
    console.log(restaurantEditData)
    return(
        <main className="bg-white">
        <div>
             <h1 className='text-2xl font-bold'>Create Category</h1>
        </div>
        
        {loading &&
             <CreateCategoryForm uuid={uuid}/>
        }
    </main>
    )
}