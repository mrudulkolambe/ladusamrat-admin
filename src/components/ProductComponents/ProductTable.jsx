import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import ProductModal from "../Modals/ProductModal";

import ProductRow from "./ProductRow";
const ProductTable = () => {
    const { products } = useProductContext();
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })

    return (
        <>
            <div className=" mb-10">
                <div className="flex p-5">
                    <div className="flex justify-around w-full">
                        <input type="email" id="email" className="mr-4 w-4/5 bg-white text-gray-900 text-sm rounded-lg block  p-2 border-2 " placeholder="Search Products" required />
                        <button onClick={() => SetShowModal({ show: true, update: false, data: undefined })} type="button" class=" w-1/5 flex align-middle items-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-4 me-2 mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" mr-2 lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            Add Products
                        </button>
                    </div>
                </div>
            </div>
            <div class="relative rounded-lg shadow-1xl">
                <table class="w-full text-sm overflow-x-auto text-left rtl:text-right  text-gray-500" >
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 border rounded-md ">
                        <tr>
                            <th scope="col" class="px-6 py-3 uppercase">
                                Product Image
                            </th>
                            <th scope="col" class="px-6 py-3 uppercase">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => {
                            console.log(product);
                            return (
                                < ProductRow
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