import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import axios from "axios"
import CreateRestaurantForm from "@/components/CreateRestaurantForm"
import CreateDishForm from "@/components/CreateDishForm"
import useSWR from "swr"

const fetcher = (url) => axios.get(url).then((res) =>res.data?.results?.dish?.dish);

export default function EditDish(){
    const router = useRouter()
    const {uuid} = router.query
    const { data:dishEditData, error, isLoading } = useSWR(
        `https://swifsavorapi.onrender.com/api/dish/${uuid}`,
        fetcher
      );
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