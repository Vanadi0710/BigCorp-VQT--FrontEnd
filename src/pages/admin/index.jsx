import SideBar from "./components/sidebar";
import Header from "../../components/header";
import React, {useState} from "react";

import {Outlet, useLocation} from "react-router-dom";
// import FactoriesAdmin from "./components/factory";
// import DistributorsAdmin from "./components/distributor";
// import WarrantyCenterAdmin from "./components/warranty-center";
const Admin = () => {
    const [currentRoute, setCurrentRoute] = useState('factories')
    return (
        <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <SideBar setCurrentRoute={setCurrentRoute}/>
                    </div>
                    <main className="col-md-10">
                        <Outlet/>
                    </main>

                </div>
            </div>
        </>

    )
}

export default Admin;