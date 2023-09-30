import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"

export default function VerificationSuccessful(){
    const [verified,setVerified] = useState(false)
    const router = useRouter()
    const {token} = router.query
    
    const veryEmail = async()=>{
        try{
           await axios.get(`https://swifsavorapi.onrender.com/api/auth/verify/${token}`)
                .then((data)=>{
                console.log(data)
                setVerified(true)}
                )
                .catch((error)=>{
                    setVerified(false)
                    console.log(error)
                })
        }
        catch(err){
            console.log(err)
        }
    }

    // it works don't touch it

    useEffect(()=>{
     if(token?.length>0){
        veryEmail()
    }
    },[token])

    return(
        <div>
            {
                verified ?(
                        <>
                            <h1>Verification Successful</h1>
                            <Link href={"/login"} className="text-blue">Login</Link>    
                        </>
                ):
                (
                    <h1>404 </h1>
                )
            }

        </div>
    )
}