import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateRestaurantForm from "@/components/CreateRestaurantForm"
import CreateDishForm from "@/components/CreateDishForm"

export default function EditDish(){
    const [dishEditData,setDishEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`http://localhost:5000/api/dish/${uuid}`)
         .then((data)=>setDishEditData(data?.data?.results?.dish?.dish))
    },[uuid])
    console.log(dishEditData)
    return(
        <div>
            <h1>Edit dish</h1>
            {
                dishEditData !== null &&
                <CreateDishForm dishEditData={dishEditData}/>
            }
        </div>
    )
}