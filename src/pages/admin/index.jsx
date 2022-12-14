import SideBar from "./components/sidebar";
import Header from "../../components/header";
import React, {useState} from "react";

import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import FactoriesAdmin from "./components/factory";
import DistributorsAdmin from "./components/distributor";
import WarrantyCenterAdmin from "./components/warranty-center";
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
                        {/*{currentRoute == "factories" && <FactoriesAdmin/>}*/}
                        {/*{currentRoute == "distributors" && <DistributorsAdmin/>}*/}
                        {/*{currentRoute == "warranty-centers" && <WarrantyCenterAdmin/>}*/}
                    </main>

                </div>
            </div>
        </>

    )
}

export default Admin;