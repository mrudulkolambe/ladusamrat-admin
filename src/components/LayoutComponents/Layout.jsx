import { Inter } from 'next/font/google'
import '../../app/globals.css'
import Sidebar from '@/components/LayoutComponents/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


const Layout = ({ children }) => {
    return (

        <section className={inter.className + " h-screen overflow-hidden lg:flex w-screen sm:hidden md:hidden"}>
            <Sidebar />
            <div className="h-screen flex flex-col max-h-screen  overflow-y-scroll w-4/5  bg-[#F9FAFB]">
                <main className="mainHeight">
                    {children}
                </main>
            </div>
        </section>

    )
}

export default Layout;