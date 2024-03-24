import Filter from "@/components/Filter";
import Layout from "@/components/LayoutComponents/Layout";
import OrderTable from "@/components/OrderTable";
const Home = () => {
    return (
        <Layout display={true}>
            <div className='px-10'>
                <h1 className="my-6 text-2xl font-bold text-gray-700">Orders</h1>
                <Filter />
                <OrderTable />
            </div>
        </Layout>
    )
}
export default Home;