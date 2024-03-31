"use client"
import React, { useState } from "react";
import EditProduct from "../Modals/EditProduct";
import ProductModal from "../Modals/ProductModal";
import axios from "axios";
import { Toaster, toast } from 'sonner';

const ProductRow = ({ data }) => {
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })

    const deleteProduct = () => {
        const headers = {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
        axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/product/delete/${data._id}`, { headers: headers })
            .then((res) => {
                toast(res.data.message)
            })
            .catch((err) => {
                toast(err.data.message)
            })
    }

    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <Toaster />
            <tr key={data?._id} className="bg-white border-b  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <img src={data?.image} className="h-20 w-20" />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {data?.name}
                </th>
                <td className="px-6 py-4 whitespace-nowrap text-ellipsis">
                    {data?.description?.slice(0, 20)}...
                </td>
                <td className="px-6 py-4">
                    {data?.price}
                </td>
                <td className="px-6 py-4">
                    {data?.category?.category_name}
                </td>
                <td className="px-6 py-4">
                    {data.inStock ? "In Stock" : "Out of Stock"}

                </td>
                <td className="px-6 py-4">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => SetShowModal({ show: true, update: true, data: data })} className="hover:text-red-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" /><polyline points="14 2 14 8 20 8" /><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={deleteProduct} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                    </div>
                </td>
            </tr>
            <ProductModal
                showModal={showModal}
                SetShowModal={SetShowModal}
            />
        </>
    )
}
export default ProductRow;