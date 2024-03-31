import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import ProductModal from "../Modals/ProductModal";

import ProductRow from "./ProductRow";
const ProductTable = () => {
    const { products } = useProductContext();
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })
    const [searchResults, setSearchResults] = useState(products)

    const handleSearch = (e) => {
        if (e.target.value.length < 3) {
            setSearchResults(products)
        } else {
            setSearchResults(products.filter((product) => {
                return product?.name?.toLowerCase()?.includes(e.target.value.toLowerCase()) || product?.description?.toLowerCase()?.includes(e.target.value.toLowerCase()) || product?.category?.category_name?.toLowerCase()?.includes(e.target.value.toLowerCase())
            }))
        }
    }
    return (
        <>
            <div className=" mb-10">
                <div className="flex">
                    <div className="flex justify-around w-full gap-3">
                        <input type="text" onChange={handleSearch} className="w-10/12 bg-white text-gray-900 text-sm rounded-lg block px-5 py-3 outline-none border-2 h-[50px]" placeholder="Search..." required />
                        <button onClick={() => SetShowModal({ show: true, update: false, data: undefined })} type="button" className="h-[50px] text-center justify-center w-2/12 flex align-middle items-center text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-10 py-3">{"Add Product"}</button>
                    </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-1xl">
                <table className="w-full text-sm overflow-x-auto text-left rtl:text-right  text-gray-500" >
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 border rounded-md ">
                        <tr>
                            <th scope="col" className="px-6 py-3 uppercase">
                                Product Image
                            </th>
                            <th scope="col" className="px-6 py-3 uppercase">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {searchResults?.map((product) => {
                            return (
                                <ProductRow
                                    key={product?._id}
                                    data={product}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ProductModal
                showModal={showModal}
                SetShowModal={SetShowModal}
            />
        </>
    )
}

export default ProductTable;