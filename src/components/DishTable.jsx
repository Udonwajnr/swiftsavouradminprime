import React,{useState} from 'react'
import Link from 'next/link'
const DishTable = ({dishData}) => {
  return (
    <div className="">
            <table className="auto w-full table-fixed mt-3">
                <thead className='bg-black h-10'> 
                    <tr className="xl:text-xs text-sm ">
                        <th className="border border-slate-700 lg:w-36 text-white">Name</th>
                        <th className="border border-slate-700 lg:w-32 text-white">Description</th>
                        <th className="border border-slate-700 text-center lg:w-32 text-white">Category</th>
                        <th className="border border-slate-700 text-center lg:w-32 text-white">Price</th>
                        <th className="border border-slate-700 text-center lg:w-32 text-white">RestaurantName</th>    
                        <th className="border border-slate-700 text-center lg:w-32 text-white">Options</th>    
                    </tr>
                </thead>
                <tbody>
                    {dishData.map((dish,index)=>{
                        return(
                        <tr key={index} className="xl:text-xs text-sm h-10 border-2 border-r bg-[#fafafa]">
                          <td className="  capitalize text-center">{dish?.name}</td>
                          <td className=" capitalize text-center">{dish?.description?.length > 12 ? dish.description.slice(0,50)+"...": dish.description}</td>
                          
                          <td className=" text-center capitalize">{dish?.category?.name}</td>
                          <td className=" text-center capitalize">{dish?.price}</td>                          
                          <td className=" text-center capitalize">{dish?.restaurant?.name}</td>                          
                          <td className="border border-slate-700">
                            <div className="flex justify-center space-x-2">
                            <Link href={`dish/edit/${dish.uuid}`} className="p-2 lg:p-1  bg-blue-600 text-white">Edit</Link>
                            <Link href={`dish/delete/${dish.uuid}`} className="p-2 lg:p-1 bg-red-600 text-white">Delete</Link>
                            </div>
                        </td>                          
                      </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
  )
}

export default DishTable