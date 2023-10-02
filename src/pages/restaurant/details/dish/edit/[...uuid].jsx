import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateRestaurantForm from "@/components/CreateRestaurantForm"
import CreateDishForm from "@/components/CreateDishForm"

export default function EditDish(){
    const router = useRouter()
    const {uuid} = router.query
    const [dishEditData,setDishEditData] = useState([])
    const [isLoading,setLoading] = useState(true)

    useEffect(()=>{
            if(!uuid) return ;
            axios.get(`https://swifsavorapi.onrender.com/api/dish/`+uuid)
            .then((data)=>{
               setLoading(false) 
               setDishEditData(data?.data?.results?.dish?.dish)
            })
        },[uuid])
        // console.log(dishEditData)
    return(
        <div>
            <h1>Edit dish</h1>
            {
                !isLoading &&
                <CreateDishForm dishEditData={dishEditData}/>
            }
        </div>
    )
}