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
                    <ProductTable />
                    <AddProduct showModal={showModal} SetShowModal={SetShowModal} />
                </div>
            </Layout> : <Login />}

        </>
    )
}
export default Product;