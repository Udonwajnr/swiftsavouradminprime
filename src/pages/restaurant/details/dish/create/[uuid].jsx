import React from "react";
import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateDishForm from "@/components/CreateDishForm";
import useSWR from "swr";


const fetcher = (url) => axios.get(url).then((res) =>res);
export default function CreateDish(){     
    const router = useRouter()
    const {uuid} = router.query
    const { data, error, isLoading } = useSWR(
        "https://swifsavorapi.onrender.com/api/restaurant/",
        fetcher
      );

    
    return(
        <main className="bg-white">
            <div>
                    <h1 className='text-2xl font-bold'>Create Dish</h1>
            </div>
            {
            !isLoading &&   
                <CreateDishForm uuid={uuid}/>
            }
        </main>
        )

}