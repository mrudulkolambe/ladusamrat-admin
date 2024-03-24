const EditProduct = ({ showModal, SetShowModal, productImg, productName, productDescription, inStock, productPrice, category }) => {

    return (
        <>
            <div className={!showModal ? "bg-white duration-700 w-4/5 fixed top-20 -right-full" : "bg-white  w-4/5 duration-1000 fixed top-20 right-0 overflow-scroll"}>
                <div className="bg-[#F9FAFB] p-4 w-full flex justify-end">
                    <div className="w-1/2">
                        <h1 className=" text-lg font-bold text-gray-700">Edit Products</h1>
                        <p>Edit your product and necessary information from here</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div onClick={() => SetShowModal(false)} className="flex items-center justify-center p-3 shadow-md rounded-full h-12 w-12 text-center mr-4 text-lg text-black bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </div>
                    </div>
                </div>
                <div className="pr-4">
                    <div className="grid grid-cols-2 py-2">
                        <div className="w-full flex justify-center items-center">
                            <label class="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Name</label>
                        </div>
                        <div className="w-full">
                            <input type="email" value={productName} id="email" class="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 " placeholder="name@flowbite.com" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2">
                        <div className="w-full flex justify-center items-center">
                            <label class="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Description</label>
                        </div>
                        <div className="w-full">
                            <input type="email" value={productDescription} id="email" class="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 " placeholder="name@flowbite.com" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2">
                        <div className="w-full flex justify-center items-center">
                            <label class="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Price</label>
                        </div>
                        <div className="w-full">
                            <input type="email" id="email" value={productPrice} class="w-full mr-4 bg-gray-50  text-gray-900 text-sm rounded-lg block  p-4 border-2 " placeholder="name@flowbite.com" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2">
                        <div className="w-full flex justify-center items-center">
                            <label class="block w-1/2 items-center text-gray-800   font-medium text-sm">Product Image</label>
                        </div>
                        <div className="w-full">
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 ">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-[#C21C20] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 "><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2">
                        <div className="w-full flex justify-center items-center">
                            <label class="block w-1/2 items-center text-gray-800   font-medium text-sm">Stock Status</label>
                        </div>
                        <div className="w-full">

                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4">
                                <option selected>{inStock.toString()}</option>
                            </select>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2">
                        <div className="w-full flex justify-center items-center">
                            <label class="block w-1/2 items-center text-gray-800   font-medium text-sm">Select Category</label>
                        </div>
                        <div className="w-full">

                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4">
                                <option selected>{category}</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 w-full flex justify-end">
                    <div className="w-1/2 mr-5">
                        <button onClick={() => SetShowModal(false)} type="button" className="w-full flex align-middle items-center  focus:outline-none text-red-700 justify-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-5 me-2 mb-2 border"> Close</button>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <button type="button" class=" w-full flex align-middle items-center justify-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> Save Product</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default EditProduct