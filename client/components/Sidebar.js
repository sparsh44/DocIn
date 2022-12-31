import React, { useState } from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';
import SidebarTile from './SidebarTile';

const Sidebar = () => {
    const [url, setUrl] = useState('')
    const[class_predicted, setClass_predicted] = useState('')
    const getClass = () => 
    {
        // var url = 'http://127.0.0.1:5000/predict_home_price';
        const data = {
        'url':'https://s3.amazonaws.com/external_clips/attachments/4995910/original/power-of-attorney-forms-what-to-include-in-your-poa.png?1665169396'
        }
        fetch('http://127.0.0.1:5000/get_class', {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        } , {mode: 'cors'})
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        setClass_predicted(data.predicted_class)
        });

    }
    return (
        <div className=" w-72 h-screen sticky top-0">
            <div className=" border-b  py-5 ml-4  ">
                <p className=" text-4xl font-bold">verifyMe</p>
                <h1 className="text-gray-400 py-2">Customer Dashboard</h1>
            </div>
            <div className="p-4 space-y-14 border-r-2">
                <div className="space-y-4" >
                    <SidebarTile title="Address Proof" />
                    <SidebarTile title="Bank Statement" />
                    <SidebarTile title="Business Proof" />
                    <SidebarTile title="Employement Proof" />
                    <SidebarTile title="Fund Raising" />
                    <SidebarTile title="Identity Proof" />
                    <SidebarTile title="Invoice" />
                    <SidebarTile title="Personal Finance Statement" />
                    <SidebarTile title="Power of attorney" />
                    <SidebarTile title="Receipt" />
                    <SidebarTile title="Salary Slip" />
                    <SidebarTile title="Tax Return" />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-full ">
                        Upload Photo
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-full ">
                        Upload PDF
                    </button>
                    <div id="formContainer">
                        <form action='http://127.0.0.1:5000/get_class' method='POST'>
                            <input id="imageUploadInput" name="imageUploadInput" type="file" accept="image/*" />
                            <button id="submitButton" type="submit" >Submit</button>
                        </form>
                    </div>

                    <div id="imagePreviewContainer" >
                        <label onClick={()=>(getClass())}>
                            Class - {class_predicted}
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar