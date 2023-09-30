import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"

export default function DeleteDish(){
    const [dishEditData,setDishEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    const [success,setSuccess] = useState(false)
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`https://swifsavorapi.onrender.com/api/dish/${uuid}`)
         .then((data)=>setDishEditData(data?.data?.results?.dish?.dish))
    },[uuid])

    const goBack =()=>{
        router.push("/dish")
    }
    const deleteDish=async()=>{
       await axios.delete(
        `https://swifsavorapi.onrender.com/api/dish/${uuid}`
        )
        setSuccess(true)
    }
    if(success){
        router.push('/dish')
    }
    return(
        <>
        <h1 className="text-black text-xl">Do you really want to delete this <span className="font-bold">{dishEditData?.name}</span>?</h1>
        <div className="mt-5 flex space-x-3">
            <button className="bg-red-500 text-white p-2" onClick={deleteDish}>
                Yes
            </button>

            <button className="bg-green-500 text-white p-2" onClick={goBack}>
                No
            </button>
        </div>
        </>
    )
}