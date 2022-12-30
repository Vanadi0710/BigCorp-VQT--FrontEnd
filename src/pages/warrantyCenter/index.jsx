import SideBar from "./components/sidebar";
import Header from "../../components/header";
import React, {useState} from "react";

import {Outlet, useLocation} from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import './index.css'

const WarrantyCenter = () => {
    const [currentRoute, setCurrentRoute] = useState('warranty-center')
    return (
        <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 menu">
                        <SideBar className="me-3"  setCurrentRoute={setCurrentRoute}/>
                    </div>
                    <main className="col-md-10">
                        <Outlet/>
                    </main>

                </div>
            </div>
        </>

    )
}

export default WarrantyCenter;

