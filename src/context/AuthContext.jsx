"use client"
import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react"
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState()
    const [adminToken, setAdminToken] = useState()

    useEffect(() => {
        setAdminToken(localStorage.getItem("token"))
    }, [])
    return (
        <AuthContext.Provider value={{ setUserData, setAdminToken, adminToken }}>{children}</AuthContext.Provider>
    )
}

const useAuthContext = () => {
    return useContext(AuthContext)
}

export { useAuthContext, AuthProvider }