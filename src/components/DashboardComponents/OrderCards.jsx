const OrderCards = ({ title, quantity, bgColors }) => {
    return (
        <>
            <div className="bg-white col-span-3 rounded-1xl border-1 shadow-md rounded-lg p-4">
                <div className="flex p-4 w-full items-center">
                    <div className={"flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 bg-" + bgColors}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C21C20] lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        
                    </div>
                    <div className="w-full">
                        <h6 className="text-1xl mb-1 font-medium text-gray-600">{title}</h6>
                        <h2 className="text-2xl font-bold leading-none text-gray-600">{quantity}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCards;