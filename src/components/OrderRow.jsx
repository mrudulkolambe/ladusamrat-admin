"use client"
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from 'sonner';

const OrderRow = ({ data }) => {
    console.log(data)
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })

    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <Toaster />
            <tr key={data?.channel_order_id} className="bg-white border-b  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {data?.customer_name}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {data?.customer_email}
                </th>
                <td className="px-6 py-4 whitespace-nowrap text-ellipsis">
                    {data?.customer_phone}
                    <br />
                    {data?.customer_alternate_phone === "" ? "NA" : data?.customer_alternate_phone}
                </td>
                <td className="px-6 py-4">
                    {data?.created_at}
                </td>
                <td className="px-6 py-4">
                    {data?.customer_address}
                </td>
                <td className="px-6 py-4">
                    {data?.status} <br /> {data?.total}
                </td>
            </tr>
            {/* <ProductModal
                showModal={showModal}
                SetShowModal={SetShowModal}
            /> */}
        </>
    )
}
export default OrderRow;