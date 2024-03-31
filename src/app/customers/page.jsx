"use client"

import Filter from "@/components/Filter";
import Layout from "@/components/LayoutComponents/Layout";
import OrderTable from "@/components/OrderTable";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";


const Home = () => {

    const [customers, setCustomers] = useState([])
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
        axios(`${process.env.NEXT_PUBLIC_BASE_URL}/customer/get`)
            .then((res) => {
                setCustomers(res.data.customers)
                setSearchResults(res.data.customers)
            })
    }, []);

    const handleSearch = (e) => {
        if (e.target.value.length < 3) {
            setSearchResults(customers)
        } else {
            setSearchResults(customers.filter((customer) => {
                return customer?.name?.toLowerCase()?.includes(e.target.value.toLowerCase()) || customer?.email?.toLowerCase()?.includes(e.target.value.toLowerCase()) || customer?.phoneNo?.toString()?.toLowerCase()?.includes(e.target.value?.toString()?.toLowerCase())
            }))
        }
    }

    return (
        <Layout display={true}>
            <div className='px-10'>
                <h1 className="my-6 text-2xl font-bold text-gray-700">Customers</h1>
                <div className=" mb-10">
                    <div className="flex">
                        <div className="flex justify-around w-full gap-3">
                            <input type="text" onChange={handleSearch} className="w-full bg-white text-gray-900 text-sm rounded-lg block px-5 py-3 outline-none border-2 h-[50px]" placeholder="Search..." required />
                        </div>
                    </div>
                </div>
                <div className="relative rounded-lg shadow-1xl">
                    <table className="w-full text-sm overflow-x-auto text-left rtl:text-right  text-gray-500" >
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 border rounded-md ">
                            <tr>
                                <th scope="col" className="px-6 py-3 uppercase">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 uppercase">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Joined at
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults?.map((customer, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b  ">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {customer.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {customer?.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {customer?.phoneNo}
                                        </td>
                                        <td>
                                            {moment(customer?.time_stamp).format("Do MMM, YYYY")}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
export default Home;