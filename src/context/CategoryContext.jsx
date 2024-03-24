"use client"
import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios";


export const categoryContext = createContext();
const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/get`)
            .then((res) => {
                setCategories(res.data.category)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <categoryContext.Provider value={{ categories, setCategories }}>{children}</categoryContext.Provider>
    )
}
const useCategoryContext = () => {
    return useContext(categoryContext)
}

export { useCategoryContext, CategoryProvider }