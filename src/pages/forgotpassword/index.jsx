import axios from "axios"
import { useState } from "react"

export default function ForgetPassword(){
   const [email,setEmail] = useState("")

   const getForgotPasswordLink =async(e)=>{
    e.preventDefault()
        const data ={email}
       await axios.post("http://localhost:5000/api/password/forgot",data)
       .then((data)=>{
        console.log(data)
       })
       .catch((error)=>{
        console.log(error)
       })
   }
   
    return(
        <>
          <form action="" onSubmit={getForgotPasswordLink}>
            <div className='flex flex-col gap-y-2'>
                            <label htmlFor="" className='text-black'>Email</label>
                            <input type="text" placeholder='John' value={email} onChange={(e)=>setEmail(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
            </div>
            <div className='flex flex-col mt-5'>
                        <button type='submit' className='bg-black text-center w-full h-10 text-white'>Send Verification</button>
              </div>
          </form>  
        </>
    )
}