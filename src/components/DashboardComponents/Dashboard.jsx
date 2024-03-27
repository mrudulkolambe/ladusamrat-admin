import OrderCards from "@/components/DashboardComponents/OrderCards";
import ProductTabel from "@/components/ProductComponents/ProductTable";
import { useCategoryContext } from "@/context/CategoryContext";
import { useOrderContext } from "@/context/OrderContext";
import { useProductContext } from "@/context/ProductContext";
const Dashboard = (user) => {
    const { products } = useProductContext();
    const { categories } = useCategoryContext();
    const { orders } = useOrderContext();
    console.log(orders)
    return (
        <div className={user ? 'bg-[#F9FAFB] h-auto pt-24 px-10' : ""}>
            <div className="grid grid-cols-12 gap-6">
                <OrderCards title="Total Product" quantity={products?.length} bgColors="orange-100" />
                <OrderCards title="Total Category" quantity={categories?.length} bgColors="orange-100" />
                <OrderCards title="Total Orders" quantity={orders?.length} bgColors="orange-100" />
                <OrderCards title="New Orders" quantity={orders?.filter((order) => {
                    return order.status === "NEW"
                })?.length} bgColors="orange-100" />
            </div>
            <div className="pt-6">
                <h1 className="my-6 text-2xl font-bold text-gray-700">Recent Orders</h1>
                <ProductTabel />
            </div>
        </div>
    )
}
export default Dashboard