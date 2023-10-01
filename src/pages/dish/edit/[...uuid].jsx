import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateDishForm from "@/components/CreateDishForm"
import useSWR from "swr"

const fetcher = (url) => axios.get(url).then((res) =>res);

export default function EditDish(){
    const [dishEditData,setDishEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query

    const { data, error, isLoading } = useSWR(
        `https://swifsavorapi.onrender.com/api/restaurant/${uuid}`,
        fetcher
      );
    
    useEffect(()=>{
            setError(false)
            setDishEditData(data)    
    },[uuid])
    console.log(dishEditData)
    return(
        <div>
            <h1>Edi dish</h1>
            {
                dishEditData !== null &&
                <CreateDishForm dishEditData={dishEditData}/>
            }
           
        </div>
    )
}