import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"

export default function DeleteCategory(){
    const [categoryEditData,setCategoryEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    const [success,setSuccess] = useState(false)
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`http://localhost:5000/api/category/${uuid}`)
         .then((data)=>setCategoryEditData(data?.data?.results?.category?.category))
    },[uuid])

    const goBack =()=>{
        router.push("/dish")
    }
    const deleteCategory=async()=>{
       await axios.delete(
        `http://localhost:5000/api/category/${uuid}`
        )
        setSuccess(true)
    }
    if(success){
        router.push('/category')
    }
    return(
        <>
        <h1 className="text-black text-xl">Do you really want to delete this <span className="font-bold">{categoryEditData?.name}</span>?</h1>
        <div className="mt-5 flex space-x-3">
            <button className="bg-red-500 text-white p-2" onClick={deleteCategory}>
                Yes
            </button>

            <button className="bg-green-500 text-white p-2" onClick={goBack}>
                No
            </button>
        </div>
        </>
    )
}