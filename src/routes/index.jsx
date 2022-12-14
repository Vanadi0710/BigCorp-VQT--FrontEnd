import LogIn from "../pages/login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/not-found";
import Admin from "../pages/admin";
import Distributor from "../pages/distributor";
import Factory from "../pages/factory";
import WarrantyCenter from "../pages/warranty-center";
import DistributorsAdmin from "../pages/admin/components/distributor";
import FactoriesAdmin from "../pages/admin/components/factory";
import WarrantyCenterAdmin from "../pages/admin/components/warranty-center";
import CheckingProduct from "../pages/admin/components/checking";
import StatisticProduct from "../pages/admin/components/static-product";




const Router = () => {
  return (
    <Routes>
      <Route path="admin" element={<Admin />}>
          <Route path="distributors" element={<DistributorsAdmin />} />
          <Route path="factories" element={<FactoriesAdmin />} />
          <Route path="warranty-centers" element={<WarrantyCenterAdmin />} />
          <Route path="checking-product" element={<CheckingProduct/>}/>
          <Route path="statistics-product" element={<StatisticProduct/>}/>
      </Route>
      <Route path="/factory" element={<Factory />}>

      </Route>
      {/*<Route path="/distributor" element={<Distributor />}></Route>*/}
      {/*<Route path="/warranty-center" element={<WarrantyCenter />}></Route>*/}
      <Route path="/sign-in" element={<LogIn />} />
      {/*<Route path="*" element={<PageNotFound />} />*/}
    </Routes>
  );
};

export default Router;
