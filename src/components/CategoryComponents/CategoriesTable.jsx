import React, { useState } from "react";
import { useCategoryContext } from "@/context/CategoryContext";
import CategoryModal from "../Modals/CategoryModal";
import CategoryRow from "./CategoryRow";
const CategoriesTable = () => {
    const { categories } = useCategoryContext();
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined });

    const [searchResults, setSearchResults] = useState(categories)

    const handleSearch = (e) => {
        if (e.target.value.length < 3) {
            setSearchResults(categories)
        } else {
            setSearchResults(categories.filter((category) => {
                return category?.category_name?.toLowerCase()?.includes(e.target.value.toLowerCase())
            }))
        }
    }

    return (
        <>
            <div className=" mb-10">
                <div className="flex">
                    <div className="flex justify-around w-full gap-3">
                        <input type="text" onChange={handleSearch} className="w-10/12 bg-white text-gray-900 text-sm rounded-lg block px-5 py-3 outline-none border-2 h-[50px]" placeholder="Search..." required />
                        <button onClick={() => SetShowModal({ show: true, update: false, data: undefined })} type="button" className="h-[50px] text-center justify-center w-2/12 flex align-middle items-center text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-10 py-3">{"Add Category"}</button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto rounded-lg shadow-1xl">
                <table className="w-full text-sm text-left rtl:text-right  text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 border rounded-md ">
                        <tr>
                            <th scope="col" className="px-6 py-3 uppercase">
                                Category ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults?.map((category) => {
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