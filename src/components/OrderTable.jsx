"use client"

import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import ProductRow from "@/components/ProductComponents/ProductRow";
import axios from "axios";
import OrderRow from "./OrderRow";

const OrderTable = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        axios(`${process.env.NEXT_PUBLIC_BASE_URL}/order/orders`)
            .then((res) => {
                console.log(res.data)
                setOrders(res.data.data)
            })
    }, [])
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })

    return (
        <>
            <div class="relative rounded-lg shadow-1xl">
                <table class="w-full text-sm overflow-x-auto text-left rtl:text-right  text-gray-500" >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 border rounded-md ">
                        <tr>
                            <th scope="col" class="px-6 py-3 uppercase">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 uppercase">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                No. Of Items
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status / Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order) => {
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