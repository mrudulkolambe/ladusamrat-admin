const ProductFilter = ({ buttonTitle, SetShowModal }) => {
    return (
        <>
            <div className=" mb-10">
                <div className="flex p-10 bg-white">
                    <div className="flex justify-around w-full">
                        <input type="email" id="email" class="mr-4 w-1/2 bg-gray-50 text-gray-900 text-sm rounded-lg block  p-2 border-2 " placeholder="name@flowbite.com" required />
                        <button type="button" class="flex align-middle items-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-28 py-2 me-2 mb-2 "> Filter</button>
                        <button onClick={() => SetShowModal({show:true,update:false,data:undefined})} type="button" class="flex align-middle items-center  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-4 me-2 mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" mr-2 lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            {buttonTitle}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFilter;