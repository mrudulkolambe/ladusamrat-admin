"use client"
import React, { useState } from "react";
import Layout from "@/components/LayoutComponents/Layout";
import Login from "@/components/Login";
import ProductFilter from "@/components/ProductComponents/ProductFilter";
import AddProduct from "@/components/Modals/ProductModal";
import ProductTable from "@/components/ProductComponents/ProductTable";
import { useAuthContext } from "@/context/AuthContext";

const Product = () => {
    const { adminToken } = useAuthContext();
    console.log(adminToken)
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined });
    return (
        <>
            {adminToken ? <Layout>
                <div className='relative overflow-x-hidden px-10'>
                    <h1 className="my-6 text-2xl font-bold text-gray-700">Products</h1>
                <ProductTable/>
                    <div className="flex justify-between w-full gap-3">
                        {/* <input type="email" id="email" className="w-10/12 bg-gray-50 text-gray-900 text-sm rounded-lg block  px-5 py-2 outline-none border-2 " placeholder="Search..." required />
                        <button onClick={() => SetShowModal({ show: true, update: false, data: undefined })} type="button" className="text-center justify-center w-2/12 flex align-middle items-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-4 me-2 mb-2 ">{"Add Product"}
                        </button> */}
                    </div>
                    <AddProduct showModal={showModal} SetShowModal={SetShowModal} />
                </div>
            </Layout> : <Login />}

        </>
    )
}
export default Product;