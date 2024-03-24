"use client"
import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/LayoutComponents/Layout";
import Login from "@/components/Login"
import Dashboard from "@/components/DashboardComponents/Dashboard";
import { useAuthContext } from "@/context/AuthContext";
const Home = () => {
  const { adminToken } = useAuthContext();
 
  return (
    <>

      {adminToken ? <Layout> <Dashboard /></Layout> : <Login />}

    </>

  )
}
export default Home;