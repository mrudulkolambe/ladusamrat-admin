"use client"
import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios";


export const OrderContext = createContext();
const OrderContextProvider = ({ children }) => {
    const [orders, setOrders] = useState()
    useEffect(() => {
        axios(`${process.env.NEXT_PUBLIC_BASE_URL}/order/orders`)
            .then((res) => {
                setOrders(res.data.data)
            })
    }, [])
    return (
        <OrderContext.Provider value={{ orders, setOrders }}>{children}</OrderContext.Provider>
    )
}
const useOrderContext = () => {
    return useContext(OrderContext)
}

export { useOrderContext, OrderContextProvider }