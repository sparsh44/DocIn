import CustomerList from "../components/CustomerList"
import AdminSidebar from "../components/AdminSidebar"
import AdminContainer from "../components/AdminContainer"

export default function Admin() {
    return (
        <div>
            <div className='flex'>
                <div className='flex h-screen sticky top-0 border-r-2'>
                    <AdminSidebar />
                    <CustomerList />
                </div>
                <div className=' w-full pr-2'>
                    <AdminContainer />
                </div>
            </div>

        </div>
    )
}
