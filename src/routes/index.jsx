import LogIn from "../pages/login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/not-found";
import Admin from "../pages/admin";
import Factory from "../pages/factory";
import WarrantyCenter from "../pages/warrantyCenter";
import DistributorsAdmin from "../pages/admin/components/statistics/distributor";
import FactoriesAdmin from "../pages/admin/components/statistics/factory";
import WarrantyCenterAdmin from "../pages/admin/components/statistics/warrantyCenter";
import CheckingProduct from "../pages/admin/components/checking";
import StatisticProduct from "../pages/admin/components/static-product";
import Information from "../pages/admin/components/information";
import Distributor from "../pages/distributor";
import ManageProduct from "../pages/admin/components/management/manageProduct";
import ManageAccount from "../pages/admin/components/management/manageAccount";import ComfirmProduct from "../pages/warrantyCenter/components/comfirmProduct";
import CreateRequire from "../pages/warrantyCenter/components/createRequire";
import Manufacture from "../pages/factory/components/manufacture";
import InputProduct from "../pages/factory/components/inputProduct";
import Store from "../pages/factory/components/store";
import StaticSales from "../pages/factory/components/static/staticSales";
import StaticError from "../pages/factory/components/static/staticError";
import OutputProduct from "../pages/factory/components/outputProduct";
import MakeRequire from "../pages/factory/components/makeRequire";

import DistributorChart from "../pages/admin/components/statistics/distributor/distributorChart";

const Router = ({notify}) => {
  return (
    <Routes>
      <Route path="admin" element={<Admin />}>
          <Route path="distributors" element={<DistributorsAdmin />} >
            <Route path=":branchId" element={<DistributorChart />}/>
          </Route>
          <Route path="factories" element={<FactoriesAdmin />} />
          <Route path="warranty-centers" element={<WarrantyCenterAdmin />} />
          <Route path="manage-product" element={<ManageProduct/>}/>
          <Route path="accounts" element={<ManageAccount />} />
          <Route path="checking-product" element={<CheckingProduct/>}/>
          <Route path="statistics-product" element={<StatisticProduct/>}/>
          <Route path="information" element={<Information/>}/>
      </Route>
      <Route path="/factory" element={<Factory />}>
          <Route path="manufacture" element={<Manufacture/>}/>
          <Route path="input-product" element={<InputProduct/>}/>
          <Route path="output-product" element={<OutputProduct/>}/>
          <Route path="make-require" element={<MakeRequire/>}/>
          <Route path="factories-store" element={<Store/>}/>
          <Route path="static-sales" element={<StaticSales/>}/>
          <Route path="static-error" element={<StaticError/>}/>


      </Route>
      <Route path="/distributor" element={<Distributor />}>

      </Route>
      <Route path="/warranty-center" element={<WarrantyCenter />}>
          <Route path="comfirm-product" element={<ComfirmProduct/>}/>
          <Route path="create-require" element={<CreateRequire />}/>
          <Route path="store" element={<Store/>}/>
      </Route>
      <Route path="/sign-in" element={<LogIn notify={notify}/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
