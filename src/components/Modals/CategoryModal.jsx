"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext";
import { useCategoryContext } from "@/context/CategoryContext";
const CategoryModal = ({ showModal, SetShowModal, }) => {
    const { setCategories, categories } = useCategoryContext();
    const adminToken = useAuthContext();
    const initialData = {
        category_name: ""
    }
    const [data, setData] = useState(initialData)
    useEffect(() => {
        if (showModal?.update && showModal?.data) {
            setData(showModal?.data)
        }
    }, [showModal])

    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            'authorization': `Bearer ${adminToken.adminToken}`
        }
        if (showModal?.update) {
            console.log(data)
            axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/edit`, data, {
                headers: headers
            })
                .then((res) => {
                    console.log(res.data)
                    // let updatedArr = [...categories]
                    // updatedArr.push(res.data.response)
                    SetShowModal({ show: false, update: false, data: undefined })
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/category/add`, data, {
                headers: headers
            })
                .then((res) => {
                    alert(`${data.category_name} Category is Created.`)
                    let updatedArr = [...categories]
                    updatedArr.push(res.data.response)
                    setCategories(updatedArr)
                    SetShowModal({ show: false, update: false, data: undefined })
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    const onChangeData = (e) => {
        setData(
            (values) => ({ ...values, [e.target.name]: e.target.value })
        )
    }
    return (
        <>
            <div className={!showModal.show ? "bg-white  duration-700 w-4/5 fixed top-0 -right-full" : "bg-white  h-full w-4/5 duration-1000 fixed top-0 right-0"}>
                <div className="bg-[#F9FAFB] p-8 w-full flex justify-end">
                    <div className="w-1/2">
                        <h1 className=" text-lg font-bold text-gray-700">{showModal?.update ? "Edit categories" : "Add Category"}</h1>
                        <p>{showModal?.update ? "Edit your categories and necessary information from here" : "Add your categories and necessary information from here"}</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div onClick={() => SetShowModal({ show: false, update: false, data: undefined })} className="flex items-center justify-center p-3 shadow-md rounded-full h-12 w-12 text-center mr-4 text-lg text-black bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </div>
                    </div>
                </div>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="pr-4">
                        <div className="grid grid-cols-2 py-5">
                            <div className="w-full flex justify-center items-center">
                                <label className="block w-1/2 items-center text-gray-800   font-medium text-sm">Category Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text"
                                    onChange={onChangeData}
                                    id="category"
                                    name="category_name"
                                    value={data?.category_name}
                                    className="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 "
                                    placeholder="Category Name"
                                    required />

                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 w-full flex justify-end">
                        <div className="w-1/2 mr-5">
                            <button onClick={() => SetShowModal({ show: false, update: false, data: undefined })} type="button" className="w-full flex align-middle items-center  focus:outline-none text-red-700 justify-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-5 me-2 mb-2 border"> Close</button>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <button type="submit" className=" w-full flex align-middle items-center justify-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> {showModal.update ? "Edit Category" : "Add Category"}</button>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )

}
export default CategoryModal