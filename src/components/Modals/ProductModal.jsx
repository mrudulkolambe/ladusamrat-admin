import { useEffect, useState } from "react"
import axios from "axios"
import UploadComponent from "../UploadComponent"
import { useCategoryContext } from "@/context/CategoryContext"
import { useAuthContext } from "@/context/AuthContext"
const ProductModal = ({ showModal, SetShowModal }) => {
    const { categories } = useCategoryContext()
    const adminToken = useAuthContext();
    const initialField = {
        name: "",
        description: "",
        price: "",
        category: ""
    }
    const [data, setData] = useState(initialField)
    const [image, setImage] = useState("")

    useEffect(() => {
        if (showModal?.update && showModal?.data) {
            setData(showModal?.data)
            setImage(showModal?.data?.image)
        }
    }, [showModal])
    const onHandleSubmit = (e) => {
        const headers = {
            'authorization': `Bearer ${adminToken.adminToken}`
        }
        e.preventDefault();
        if (showModal?.update) {
            axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/edit`, { ...data, image: image }, { headers: headers })
                .then((res) => {
                    alert("Product Edited Successfully!");
                    SetShowModal({ show: false, update: false, data: undefined })
                    window.location.reload();
                }).catch((error) => {
                    console.log(error)
                })
        } else {

            axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/product/add`, { ...data, image: image }, { headers: headers })
                .then((res) => {
                    alert("Product Added Successfully!");
                    SetShowModal({ show: false, update: false, data: undefined })
                    window.location.reload();
                }).catch((error) => {
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
            <div className={!showModal.show ? "bg-white duration-700 w-4/5 fixed top-0 -right-full" : "bg-white  w-4/5 duration-1000 fixed top-0 right-0"}>
                <div className="bg-[#F9FAFB] p-8 w-full flex justify-end">
                    <div className="w-1/2">
                        <h1 className=" text-lg font-bold text-gray-700">{showModal.update ? "Edit Product" : "Add Products"}</h1>
                        <p>{showModal.update ? "Edit your product and necessary information from here" : "Add your product and necessary information from here"}</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div onClick={() => SetShowModal({ show: false, update: false, data: undefined })} className="flex items-center justify-center p-3 shadow-md rounded-full h-12 w-12 text-center mr-4 text-lg text-black bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </div>
                    </div>
                </div>
                <form method="post" onSubmit={onHandleSubmit}>

                    <div className="pr-4">
                    <div className="grid grid-cols-2 py-3">
                            <div className="w-full flex justify-center items-center">
                                <label className="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Image</label>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center justify-center w-full">
                                    <UploadComponent onChangeData={onChangeData} image={image} setImage={setImage} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <div className="w-full flex justify-center items-center">
                                <label className="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text" value={data?.name} name="name" onChange={onChangeData} className="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 " placeholder="Product Name" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <div className="w-full flex justify-center items-center">
                                <label className="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Price</label>
                            </div>
                            <div className="w-full">
                                <input type="text" value={data?.price} name="price" onChange={onChangeData} className="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 " placeholder="Product Price" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <div className="w-full flex justify-center items-center">
                                <label className="block w-1/2 items-center text-gray-800   font-medium text-sm">Select Category</label>
                            </div>
                            <div className="w-full">
                                <select value={data?.category?._id} id="countries" name="category" onChange={onChangeData} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4">
                                    <option value={""}>{showModal.update ? "Update Category" : "Add Category"}</option>
                                    {categories?.map((category) => {
                                        return (
                                            <option key={category._id} value={category._id}>{category.category_name}</option>
                                        )
                                    })}
                                </select>

                            </div>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <div className="w-full flex justify-center">
                                <label className="block w-1/2 items-center text-gray-800 mt-2 font-medium text-sm">Product Description</label>
                            </div>
                            <div className="w-full">
                                <textarea type="text" value={data?.description} name="description" onChange={onChangeData} className="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 h-32 outline-none" placeholder="Product Description" required ></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="bg-white p-8 w-full flex justify-end">
                        <div className="w-1/2 mr-5">
                            <button onClick={() => SetShowModal({ show: false, update: false, data: undefined })} type="button" className="w-full flex align-middle items-center  focus:outline-none text-red-700 justify-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-5 me-2 mb-2 border"> Close</button>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <button type="submit" className=" w-full flex align-middle items-center justify-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> {showModal.update ? "Edit Product" : "Add Product"}</button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )

}
export default ProductModal;