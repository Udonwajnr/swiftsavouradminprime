import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ResetPassword(){
    const [password,setPassword] = useState('')
    const router = useRouter()
    const {token} = router.query
    const [updated,setUpdated] = useState(false)
    const [error,setError] = useState(false) 
    const [getToken,setGetToken] = useState(token)



    const submitPassword =async(e)=>{
        e.preventDefault()
        const data  = {password,token}
        await axios.post("https://swifsavorapi.onrender.com/api/password/reset",data)
        .then((data)=>{ 
            console.log(data)
            setUpdated(true)
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
    }
    useEffect(()=>{
        if(token?.length>0) {
            if(!token){
                console.log("invalid")
            }
        }
       },[token])

       if(updated){
        alert("Password Changed")
        router.push("/")
       }
    return(
        <>
            {
                error ?
                <h2 className="text-5xl">404</h2>
            :
                <form onSubmit={submitPassword}>
                <div className='flex flex-col gap-y-2'>
                    <label className='text-black'>Password</label>
                    <input type="text" placeholder='' value={password} onChange={(e)=>setPassword(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                </div>
                <div className='flex flex-col mt-5'>
                        <button type='submit' className='bg-black text-center w-full h-10 text-white'>Reset</button>
                    </div>
               </form>
            }

            {
                updated && <h1 className="text-5xl">Password Change Complete</h1>
            }
        </>
    )
}