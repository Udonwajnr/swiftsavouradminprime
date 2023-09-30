import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"

export default function DeleteRestaurant(){
    const [restaurantEditData,setRestaurantEditData] = useState(null)
    const [success,setSuccess] = useState(false)
    const router = useRouter()
    const {uuid} = router.query
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`http://localhost:5000/api/restaurant/${uuid}`)
         .then((data)=>setRestaurantEditData(data?.data?.results?.restaurant?.restaurant))
    },[uuid])

    const goBack =()=>{
        router.push("/Restaurant")
    }
    const deleteRestaurant=async()=>{
       await axios.delete(
        `http://localhost:5000/api/restaurant/${uuid}`
        )
        .then((data)=>console.log("done"))
        .catch(function (error) {
            console.log(error) 
         });
        setSuccess(true)
    }
    if(success){
        router.push('/restaurant')
    }
    return(
        <>
        <h1 className="text-black text-xl">Do you really want to delete this <span className="font-bold">{restaurantEditData?.name}</span> ?</h1>
        <div className="mt-5 flex space-x-3">
            <button className="bg-red-500 text-white p-2" onClick={deleteRestaurant}>
                Yes
            </button>

            <button className="bg-green-500 text-white p-2" onClick={goBack}>
                No
            </button>
        </div>
        </>
    )
}