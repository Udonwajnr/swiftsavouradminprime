import { useState } from "react"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"

export default function RegistrationForm(){
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [password,setPassword] = useState("")
    const [password2,setPassword2] = useState("")
    const [success,setSuccess] = useState(false)
    
    const router = useRouter()

    const createUser =async(e)=>{
        const data = {firstName,lastName,userName,email,phoneNumber,password,password2}
        e.preventDefault()
        await axios.post("http://localhost:5000/api/auth/register/",data)
        .then(()=>{
            console.log("Registration Successful")
            setSuccess(true)
        })
    }
    if(success){
        router.push('/register/verify/')
    }
    return(
        <>
            <form action="" onSubmit={createUser}>
                <div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>FirstName</label>
                        <input type="text" placeholder='John' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>LastName</label>
                        <input type="text" placeholder='Doe' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>UserName</label>
                        <input type="text" placeholder='JohnDoe10' value={userName} onChange={(e)=>setUserName(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Email</label>
                        <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>PhoneNumber</label>
                        <input type="text" placeholder='08000000' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Password</label>
                        <input type="text" placeholder='' value={password} onChange={(e)=>setPassword(e.target.value)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label htmlFor="" className='text-black'>Confirm Password</label>
                        <input type="text" placeholder='' value={password2} onChange={(e)=>setPassword2(e.target.password)} className='h-10 border-2 bg-[#fafafa] border-[#f1f1f3] text-black focus:outline-none'/>
                    </div>
                </div>
                    <div>
                        <p>Already have an account <span><Link className="text-blue-700" href={'/login'}>Login</Link></span></p>
                    </div>
                    
                    <div className='flex flex-col mt-5'>
                        <button type='submit' className='bg-black text-center w-full h-10 text-white'>Register</button>
                    </div>
            </form>
        </>
    )
}