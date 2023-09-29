import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function Verify(){
const router = useRouter()
const {email} = router.query
const [error,setError] = useState(true) 

console.log(email)
const getVerificationLinkAgain =async()=>{
    const data ={email}
    await axios.post("http://localhost:5000/api/auth/verify/resend",data)
        .then((data)=>console.log(data))
}
useEffect(()=>{
    if(!email) {
        setError(true)
        console.log("invalid")
    }


})
return(
    <>
        {
            !error ? <h1>Invalid account</h1>
            :
            <div>
                <h2 className="text-4xl text-center black">
                    An Email has been sent to your account please verify
                </h2>    
                <p>Didn't get verification Link? click to resend <span><button className="bg-black text-white" onClick={getVerificationLinkAgain}>Click here</button></span></p>
            </div>
        }
    </>
)
}