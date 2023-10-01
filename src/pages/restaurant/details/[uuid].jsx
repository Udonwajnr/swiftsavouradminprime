import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import Link from "next/link"

export default function RestaurantDetails(){
    const [restaurantEditData,setRestaurantEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`https://swifsavorapi.onrender.com/api/restaurant/${uuid}`)
         .then((data)=>setRestaurantEditData(data?.data?.results?.restaurant?.restaurant))
         .catch(function (error) {
            console.log(error) 
         });
    },[uuid])
    return(
        <div className="p-3">
            <h1>Details</h1>
            <div className='flex justify gap-x-3'>
                     <Link href={`/restaurant/details/dish/${uuid}` } className="bg-black text-center w-full  text-white">View Dish table</Link>
                     <Link href={`/restaurant/details/category/${uuid}` } className="bg-black text-center w-full  text-white">View Category table</Link>
            </div>
        </div>
    )
}