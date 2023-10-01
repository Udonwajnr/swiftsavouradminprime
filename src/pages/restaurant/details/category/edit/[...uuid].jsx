import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateCategoryForm from "@/components/CreateCategoryForm"

export default function EditCategory(){
    const [categoryEditData,setCategoryEditData] = useState(null)
    const router = useRouter()
    const {uuid} = router.query
    
    useEffect(()=>{
        if(!uuid){
            return;
        }
         axios.get(`https://swifsavorapi.onrender.com/api/category/${uuid}`)
         .then((data)=>setCategoryEditData(data?.data?.results?.category?.category))
    },[uuid])
    console.log(categoryEditData)
    return(
        <div>
            <h1>Edit dish</h1>
            {
                categoryEditData !== null &&
                <CreateCategoryForm categoryEditData={categoryEditData}/>
            }
        </div>
    )
}