import OrderCards from "@/components/DashboardComponents/OrderCards";
import ProductTabel from "@/components/ProductComponents/ProductTable";
import { useProductContext } from "@/context/ProductContext";
const Dashboard = (user) => {
    const{products}=useProductContext();
    console.log(products)
    return (
        <div className={user ? 'bg-[#F9FAFB] h-auto pt-24 px-10' : ""}>
            <div className="grid grid-cols-12 gap-6">
                <OrderCards title="Total Product" quantity={products?.length} bgColors="orange-100" />
                <OrderCards title="Orders Pending" quantity="20" bgColors="orange-100" />
                <OrderCards title="Order Processing" quantity="20" bgColors="orange-100" />
                <OrderCards title="Order Delivered" quantity="20" bgColors="orange-100" />
            </div>
            <div className="pt-6">
                <h1 className="my-6 text-2xl font-bold text-gray-700">Recent Orders</h1>
                <ProductTabel />
            </div>
        </div>
    )
}
export default Dashboard