import React from 'react'
import Link from 'next/link'
const RestaurantCategoryTable = ({restaurantData}) => {
    
  return (
    <div className="lg:overflow-x-scroll">
            <table className="auto w-full table-fixed mt-3">
                <thead className='bg-black h-10'>
                    <tr className="xl:text-xs text-sm">
                    <th className="border border-slate-700 text-white  lg:w-16">UUID</th>
                    <th className="border border-slate-700 text-white  lg:w-36">Name</th>
                    <th className="border border-slate-700 text-white lg:w-32">Created</th>
                    <th className="border border-slate-700 text-white lg:w-32">Options</th>
                    </tr>
                </thead>
                <tbody>
                {restaurantData?.category?.map((category,index)=>{
                        return(
                        <tr key={index} className="xl:text-xs text-sm h-10 border-2 border-r bg-[#fafafa]">
                          <td className="  capitalize text-center">{category?.uuid}</td>
                          <td className=" text-center capitalize">{category?.name}</td>                          
                          <td className=" text-center capitalize">{category?.createdAt}</td>                            
                          <div className="flex justify-center space-x-2">
                            <Link href={`edit/${category.uuid}`} className="p-2 lg:p-1  bg-blue-600 text-white">Edit</Link>
                            <Link href={`delete/${category.uuid}`} className="p-2 lg:p-1 bg-red-600 text-white">Delete</Link>
                            </div>              
                      </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
  )
}

export default RestaurantCategoryTable