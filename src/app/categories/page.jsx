"use client"
import React, { useState } from "react"
import Layout from "@/components/LayoutComponents/Layout"
import ProductFilter from "@/components/ProductComponents/ProductFilter"
import CategoriesTable from "@/components/CategoryComponents/CategoriesTable"
import AddCategory from "@/components/Modals/CategoryModal"
import Login from "@/components/Login"
import { useAuthContext } from "@/context/AuthContext"

const Categories = ({ buttonTitle, SetShowModal }) => {
    const { adminToken } = useAuthContext();
    const [showCategoryModal, setShowCategoryModal] = useState({show:false,update:false,data:undefined})
    return (

        <>
            {adminToken ?
                <Layout >
                    <div className='px-10'>
                        <h1 className="my-6 text-2xl font-bold text-gray-700">Catgory</h1>
                       
                        <CategoriesTable />
                        <AddCategory showModal={showCategoryModal} SetShowModal={setShowCategoryModal} />
                    </div>
                </Layout> : <Login />
            }

        </>
    )
}
export default Categories