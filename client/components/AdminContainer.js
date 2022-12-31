import React from 'react'
import Card from './Card'
import Middle from './Middle'
import RightBar from './RightBar'

const AdminContainer = () => {
    return (
        <div className=" bg-gradient-to-r   " >
            <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-lg">
                    Documents by
                </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                    Gopal Verma
                </p>
            </div>
            <div>
                <div className="flex p-4 space-x-12 ml-12">
                    <Card title="TOTAL" balance={409.0790} icon={0} />
                    <Card title="AVAILABLE" balance={300.0790} icon={0 } />
                    <Card title="AVAILABLE" balance={300.0790} icon={0} />
                </div>
                <div className="flex p-4 space-x-12 ml-12 mt-4">
                    <Card title="TOTAL" balance={409.0790} icon={0} />
                    <Card title="AVAILABLE" balance={300.0790} icon={1} />
                    <Card title="AVAILABLE" balance={300.0790} icon={1} />
                </div>
                <div className="flex p-4 space-x-12 ml-12 mt-4">
                    <Card title="TOTAL" balance={409.0790} icon={0} />
                    <Card title="AVAILABLE" balance={300.0790} icon={1} />
                </div>  
            </div>
            {/* <div className="flex  ml-3 mt-6 space-x-6  mr-4">
            </div> */}
        </div>
    )
}

export default AdminContainer