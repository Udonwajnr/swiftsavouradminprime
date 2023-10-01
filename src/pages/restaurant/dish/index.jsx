import React from "react";
import CreateDishForm from "@/components/CreateDishForm";
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import DishTable from "@/components/DishTable"

export default function Dish(){
    const [dishData,setDishData] =useState([])
    const getData =async()=>{
        await axios.get("https://swifsavorapi.onrender.com/api/dish/").then((data)=>setDishData(data?.data?.results?.dish?.dish))
        .catch((error)=>onslotchange.log(error))
    }
    useEffect(()=>{
        getData()
    },[])
        return(
            <main className="p-3">
                <div className="inline-block bg-green-300 my-3 ">
                    <Link href={'/dish/create'} className="flex p-2 text-base bg-black text-white">
                        Create
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path></svg>
                    </Link>
                </div>
                <DishTable dishData={dishData}/>
            </main>
        )
}