import React,{useState,useEffect} from "react";
import CategoryTable from "@/components/CategoryTable";
import Link from "next/link";
import axios from "axios";
import RestaurantCategoryTable from "@/components/RestaurantCategoryTable";
import { useRouter } from "next/router"

export default function Category(){
    const router = useRouter()
    const {uuid} = router.query
    const [loading,setLoading] = useState(false)
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
            })
        }
        console.log(uuid)
        useEffect(()=>{
            if(uuid){
                getData()
        }
        },[uuid])
        console.log(restaurantData)
            return(
                <main className="p-3">
                    <div className="inline-block bg-green-300 my-3 ">
                        <Link href={`/restaurant/details/category/create/${uuid}`} className="flex p-2 text-base bg-black text-white">
                            Create
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path></svg>
                        </Link>
                    </div>
                    {
                        loading &&
                    <RestaurantCategoryTable restaurantData={restaurantData}/>
                    }
                </main>
            )
}