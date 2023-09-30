import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateRestaurantForm from "@/components/CreateRestaurantForm"

export default function EditRestaurant(){
    const [restaurantEditData,setRestaurantEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`http://localhost:5000/api/restaurant/${uuid}`)
         .then((data)=>setRestaurantEditData(data?.data?.results?.restaurant?.restaurant))
    },[uuid])
    return(
        <div className="p-3">
            <h1>Edit Restaurant</h1>
            {
                restaurantEditData !== null &&
                <CreateRestaurantForm restaurantEditData={restaurantEditData}/>
            }
        </div>
    )
}