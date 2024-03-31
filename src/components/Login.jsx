"use client"
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";

const Login = () => {
    const { setUserData, setAdminToken } = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const onSubmitAuth = (e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/signin`, {
            email: email,
            password: password
        })
            .then((res) => {
                // setUserData(res.data)
                localStorage.setItem("token", res.data.response);
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold  ">
                    <img className="w-full h-auto mr-2" src="./assets/logo.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                            Ladu Samrat Admin login
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" method="post" onSubmit={onSubmitAuth}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium  ">Your email</label>
                                <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} id="email" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  ">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-[#C21C20] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;