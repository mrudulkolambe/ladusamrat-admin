"use client"
import { useState } from "react";
import CategoryModal from "../Modals/CategoryModal";
const CategoryRow = ({ data }) => {
    const [showModal, SetShowModal] = useState({ show: false, update: false, data: undefined })

    return (
        <>
            <tr key={data?._id} class="bg-white border-b  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {data?._id}
                </th>
                <td class="px-6 py-4">
                    {data?.category_name}
                </td>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    onClick={() => SetShowModal({ show: true, update: true, data: data })}
                     className="hover:text-red-700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" /><polyline points="14 2 14 8 20 8" /><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" /></svg>
                </td>
            </tr>

            <CategoryModal
                showModal={showModal}
                SetShowModal={SetShowModal}
            />
        </>
    )
}
export default CategoryRow