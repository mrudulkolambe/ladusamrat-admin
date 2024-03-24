import React, { useState } from "react";
import { useCategoryContext } from "@/context/CategoryContext";
import CategoryModal from "../Modals/CategoryModal";
import CategoryRow from "./CategoryRow";
const CategoriesTable = () => {
    const { categories } = useCategoryContext();
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined });


    return (
        <>
            <div className=" mb-10">
                <div className="flex p-5">
                    <div className="flex justify-around w-full">
                        <input type="email" id="email" className="mr-4 w-4/5 bg-white text-gray-900 text-sm rounded-lg block  p-2 border-2 " placeholder="Search Categories" required />
                        <button onClick={() => SetShowModal({ show: true, update: false, data: undefined })} type="button" class=" w-1/5 flex align-middle items-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-4 me-2 mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" mr-2 lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            Add Category
                        </button>
                    </div>
                </div>
            </div>
            <div class="relative overflow-x-auto rounded-lg shadow-1xl">
                <table class="w-full text-sm text-left rtl:text-right  text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 border rounded-md ">
                        <tr>
                            <th scope="col" class="px-6 py-3 uppercase">
                                category ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.map((category) => {
                            return (
                                <CategoryRow
                                key={category?._id}
                                    data={category}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <CategoryModal
                showModal={showModal}
                SetShowModal={SetShowModal}
            />
        </>
    )
}

export default CategoriesTable;