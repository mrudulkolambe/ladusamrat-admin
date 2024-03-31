"use client"

import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import ProductRow from "@/components/ProductComponents/ProductRow";
import axios from "axios";
import OrderRow from "./OrderRow";
import { useOrderContext } from "@/context/OrderContext";

const OrderTable = () => {

    const { orders } = useOrderContext()
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })
    const [searchResults, setSearchResults] = useState(orders)

    const handleSearch = (e) => {
        if (e.target.value.length < 3) {
            setSearchResults(orders)
        } else {
            setSearchResults(orders.filter((order) => {
                return order?.customer_name?.toLowerCase()?.includes(e.target.value.toLowerCase()) || order?.customer_email?.toLowerCase()?.includes(e.target.value.toLowerCase()) || order?.customer_phone?.toLowerCase()?.includes(e.target.value.toLowerCase()) || order?.customer_address?.toLowerCase()?.includes(e.target.value.toLowerCase()) || order?.customer_city?.toLowerCase()?.includes(e.target.value.toLowerCase()) || order?.customer_pincode?.toLowerCase()?.includes(e.target.value.toLowerCase()) || order?.status?.toLowerCase()?.includes(e.target.value.toLowerCase())
            }))
        }
    }
    return (
        <>
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
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status / Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults?.map((order) => {
                            return (
                                <OrderRow
                                    key={order?.channel_order_id}
                                    data={order}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* <ProductModal
                showModal={showModal}
                SetShowModal={SetShowModal}
            /> */}
        </>
    )
}

export default OrderTable;