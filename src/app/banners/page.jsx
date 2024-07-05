"use client"
import React, { useEffect, useState } from "react"
import Layout from "@/components/LayoutComponents/Layout"
import Login from "@/components/Login"
import { useAuthContext } from "@/context/AuthContext"
import axios from "axios"
import { Plus } from "lucide-react"
import UploadComponent from "@/components/UploadComponent"

const Banners = ({ }) => {
	const { adminToken } = useAuthContext();
	const [banners, setBanners] = useState([])
	useEffect(() => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/banner`, {
			method: "GET",
		})
			.then((res) => {
				console.log(res.data.banners)
				setBanners(res.data.banners)
			})
	}, []);

	const updateBanner = (_id, active) => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/banner/${_id}`, {
			method: "PATCH",
			data: {
				active: active
			},
			headers: {
				Authorization: `Bearer ${adminToken}`
			}
		})
			.then((res) => {
				window.location.reload()
			})
	}
	const deleteBanner = (_id) => {
		axios(`${process.env.NEXT_PUBLIC_BASE_URL}/banner/${_id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${adminToken}`
			}
		})
			.then((res) => {
				window.location.reload()
			})
	}
	const [image, setImage] = useState("")

	const addBanner = () => {
		if(image){
			axios(`${process.env.NEXT_PUBLIC_BASE_URL}/banner/`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${adminToken}`
				},
				data: {
					active: true,
					mediaURL: image
				},
			})
				.then((res) => {
					window.location.reload()
				})
		}else{
			alert("Image not uploaded")
		}
	}
	return (

		<>
			{adminToken ?
				<Layout >
					<div className='px-10 flex flex-col'>
						<h1 className="my-6 text-2xl font-bold text-gray-700">Banners</h1>
						<div className="relative overflow-x-auto rounded-lg shadow-1xl grid grid-cols-5">
							{
								banners?.map((banner, index) => {
									return <div key={index} className="relative w-max">
										<img className="rounded-lg h-40 w-40 object-cover" src={banner.mediaURL} alt="" />
										<div className="mt-2 flex items-center justify-between">
											<button type="button" onClick={() => updateBanner(banner._id, !banner.active)} className={"px-3 py-2 rounded-lg bg-green-300 text-sm"}>{banner.active ? "Inactive" : "Active"}</button>
											<button type="button" onClick={() => deleteBanner(banner._id)} className={"px-3 py-2 rounded-lg bg-red-600 text-sm text-white"}>Delete</button>
										</div>
									</div>
								})
							}
							<div className="flex flex-col w-max">
								<div className="cursor-pointer rounded-lg h-40 w-40 bg-gray-300 flex items-center justify-center" >
									<UploadComponent image={image} setImage={setImage} />
								</div>
								<div className="mt-2 flex items-center justify-between">
									<button type="button" onClick={addBanner} className={"w-full px-3 py-2 rounded-lg bg-green-300 text-sm"}>{"Add"}</button>
								</div>
							</div>
						</div>
					</div>
				</Layout> : <Login />
			}

		</>
	)
}
export default Banners