import React from 'react'
import Card from '../components/Card'
// import Middle from './Middle'
// import RightBar from './RightBar'

const Container = (props) => {
    return (
        <div className=" bg-gradient-to-r " >
            <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-lg">
                    Hello
                </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                    Gopal Verma
                </p>
            </div>
            <div>
                <div className="flex p-4 mt-4 space-x-12 ml-40">
                    <Card title="TOTAL" balance={409.0790} icon={0} type="unchecked" />
                    <Card title="AVAILABLE" balance={300.0790} icon={1} type="unchecked" />
                    <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} type="unchecked" />
                </div>
                <div className="flex p-4 space-x-12 ml-40">
                    <Card title="TOTAL" balance={409.0790} icon={0} type="unchecked" />
                    <Card title="AVAILABLE" balance={300.0790} icon={1} type="unchecked" />
                    <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} type="unchecked" />
                </div>
                <div className="flex p-4 space-x-12 ml-40">
                    <Card title="TOTAL" balance={409.0790} icon={0} type="unchecked" />
                    <Card title="AVAILABLE" balance={300.0790} icon={1} type="unchecked" />
                    <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} type="unchecked" />
                </div>
            </div>
            {/* <div className="flex  ml-3 mt-6 space-x-6  mr-4">
            </div> */}
        </div>
    )
}

export default Container
