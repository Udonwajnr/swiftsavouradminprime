import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateRestaurantForm from "@/components/CreateRestaurantForm"
import CreateDishForm from "@/components/CreateDishForm"

export default function EditDish(){
    const [dishEditData,setDishEditData] = useState(null)
    const [error,setError] = useState(false)
    const router = useRouter()
    const {uuid} = router.query
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`https://swifsavorapi.onrender.com/api/dish/${uuid}`)
         .then((data)=>{
            setError(false)
            setDishEditData(data?.data?.results?.dish?.dish)
        })
         .catch((data)=>{
            setError(true)
        })
    },[uuid])
    console.log(dishEditData)
    return(
        <div>
            <h1>Edit dish</h1>
            {
                dishEditData !== null &&
                <CreateDishForm dishEditData={dishEditData}/>
            }
            {
                error && <h1>This is Impropper</h1>
            }
        </div>
    )
}