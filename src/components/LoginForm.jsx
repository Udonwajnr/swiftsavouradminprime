import { useState } from "react"
import Link from "next/link"
import axios from "axios"

export default function LoginForm(){
    const [email,setEmail] =  useState("")
    const [password,setPassword] = useState("")
    
    const loginUser =async(e)=>{
        e.preventDefault()
       const data ={email,password}
       await axios.post("http://localhost:5000/api/auth/login/",data)
       .then((data)=>{
        console.log(data)
        alert("login successful")
    })
       .catch((data)=>console.log(data))
    }
    return (
        <>
                    <form action="" onSubmit={loginUser}>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Email</label>
                        <input type="text" placeholder='John' value={email} onChange={(e)=>setEmail(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Password</label>
                        <input type="text" placeholder='' value={password} onChange={(e)=>setPassword(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className="text-center">
                        <p>Don't have an account <span><Link className="text-blue-700" href={'/login'}>Register</Link></span></p>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <button type='submit' className='bg-black text-center w-full h-10 text-white'>Login</button>
                    </div>
            </form>
        </>
    )
}