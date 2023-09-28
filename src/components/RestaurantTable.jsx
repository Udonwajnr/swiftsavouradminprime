import React from 'react'
import Link from 'next/link'
const RestaurantTable = ({restaurantData}) => {
  return (
    <div className="lg:overflow-x-scroll">
    <table className="auto w-full table-fixed mt-3">
        <thead className='h-10 bg-black'>
            <tr className="xl:text-xs text-sm">
            <th className="border border-slate-700 text-white lg:w-16">Name</th>
            <th className="border border-slate-700 text-white lg:w-36">Address</th>
                <th className="border border-slate-700 text-white lg:w-36">Logo</th>
                <th className="border border-slate-700 text-white lg:w-32">Image</th>
                <th className="border border-slate-700 text-white text-center lg:w-32">Latitude</th>
                <th className="border border-slate-700 text-white text-center lg:w-32">Longitude</th>
                <th className="border border-slate-700 text-white text-center lg:w-32">Rating</th>
                <th className="border border-slate-700 text-white text-center lg:w-32">Phone Number</th>
                <th className="border border-slate-700 text-white text-center lg:w-52">Delivery time</th>
                <th className="border border-slate-700 text-white text-center lg:w-52">createdAt</th>
                <th className="border border-slate-700 text-white text-center lg:w-52">Options</th>
            </tr>
        </thead>
        <tbody>
        {restaurantData.map((restaurant,index)=>{
                        return(
                        <tr key={index} className="xl:text-xs text-sm h-10 border-2 border-r bg-[#fafafa]">
                          <td className="  capitalize text-center">{restaurant?.name}</td>
                          <td className=" capitalize text-center">{restaurant?.address.length > 12 ? restaurant.address.slice(0,50)+"...": restaurant.address}</td>
                          <td className=" text-center capitalize">{restaurant?.logo.length > 12 ? restaurant.logo.slice(0,50)+"...": restaurant.logo}</td>
                          <td className=" text-center capitalize">{restaurant?.image.length > 12 ? restaurant.image .slice(0,50)+"...": restaurant.image }</td>                          
                          <td className=" text-center capitalize">{restaurant?.latitude}</td>                          
                          <td className=" text-center capitalize">{restaurant?.longitude}</td>                          
                          <td className=" text-center capitalize">{restaurant?.rating}</td>                          
                          <td className=" text-center capitalize">{restaurant?.phoneNumber}</td>                          
                          <td className=" text-center capitalize">{restaurant?.deliveryTime}</td>                          
                          <td className=" text-center capitalize">{restaurant?.createdAt}</td>        
                          <td className="border border-slate-700">
                            <div className="flex justify-center space-x-2">
                            <Link href={`restaurant/edit/${restaurant.uuid}`} className="p-2 lg:p-1  bg-blue-600 text-white">Edit</Link>
                            <Link href={`restaurant/delete/${restaurant.uuid}`} className="p-2 lg:p-1 bg-red-600 text-white">Delete</Link>
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

export default RestaurantTable