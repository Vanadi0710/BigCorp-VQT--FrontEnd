import SideBar from "../factory/components/sidebar";
import Header from "../../components/header";
import React, {useState} from "react";
import './index.css'

import {Outlet, useLocation} from "react-router-dom";

const Factory = () => {
  const [currentRoute, setCurrentRoute] = useState('factories')
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

export default Factory;

