import LogIn from "../pages/login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/not-found";
import Admin from "../pages/admin";
import Factory from "../pages/factory";
import WarrantyCenter from "../pages/warrantyCenter";
import DistributorsAdmin from "../pages/admin/components/distributor";
import FactoriesAdmin from "../pages/admin/components/factory";
import WarrantyCenterAdmin from "../pages/admin/components/warranty-center";
import CheckingProduct from "../pages/admin/components/checking";
import StatisticProduct from "../pages/admin/components/static-product";
import Require from "../pages/admin/components/require";
import Information from "../pages/admin/components/information";
import Distributor from "../pages/distributor";
import ManageProduct from "../pages/admin/components/manageProduct";




const Router = ({notify}) => {
  return (
    <Routes>
      <Route path="admin" element={<Admin />}>
          <Route path="distributors" element={<DistributorsAdmin />} />
          <Route path="factories" element={<FactoriesAdmin />} />
          <Route path="warranty-centers" element={<WarrantyCenterAdmin />} />
          <Route path="manage-product" element={<ManageProduct/>}/>
          <Route path="checking-product" element={<CheckingProduct/>}/>
          <Route path="statistics-product" element={<StatisticProduct/>}/>
          <Route path="information" element={<Information/>}/>
      </Route>
      <Route path="/factory" element={<Factory />}>

      </Route>
      <Route path="/distributor" element={<Distributor />}>

      </Route>
      <Route path="/warranty-center" element={<WarrantyCenter />}></Route>
      <Route path="/sign-in" element={<LogIn notify={notify}/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
