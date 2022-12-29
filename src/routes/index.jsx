import LogIn from "../pages/login";
import { Route, Routes, useLocation } from "react-router-dom";
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
import ManageAccount from "../pages/admin/components/management/manageAccount";
import ComfirmProduct from "../pages/warrantyCenter/components/importProduct";
import CreateRequire from "../pages/warrantyCenter/components/createRequire";
import Manufacture from "../pages/factory/components/manufacture";
import Store from "../pages/factory/components/store";
import StaticSalesDistributor from "../pages/distributor/components/static";
import DistributorChart from "../pages/admin/components/statistics/distributor/distributorChart";
import ListRequirement from "../pages/factory/components/listRequirement";
import InputStore from "../pages/factory/components/importStore";
import Customer from "../pages/admin/components/management/manageCustomer";
import History from "../pages/factory/components/history";
import Cashier from "../pages/distributor/components/cashier";
import HistoryBuild from "../pages/distributor/components/historyBuild";
import Requirement from "../pages/distributor/components/requirement";
import Analysis from "../pages/distributor/components/analysis";
import FactoryStore from "../pages/factory/components/store";
import { useSelector } from "react-redux";
import HistoryRequirement from "../pages/distributor/components/historyRequirement";
import CreateRequirement from "../pages/distributor/components/createRequirement";
import FactoryStatistic from "../pages/factory/components/statistics";
import FactoryChart from "../pages/admin/components/statistics/factory/factoryChart";
import WarrantyCenterChart from "../pages/admin/components/statistics/warrantyCenter/warrantyCenterChart";
import HistoryRequirementWarranty from "../pages/warrantyCenter/components/historyRequirement";
import StoreWarranty from "../pages/warrantyCenter/components/store";

const Router = ({ notify }) => {
  const auth = useSelector((state) => state.auth);
  const currentRoute = useLocation().pathname;

  if (currentRoute === "/") window.location.href = "/sign-in";
  return (
    <Routes>
      <Route path="admin" element={<Admin />}>
        <Route path="distributors" element={<DistributorsAdmin />}>
          <Route path=":branchId" element={<DistributorChart />} />
        </Route>
        <Route path="factories" element={<FactoriesAdmin />}>
          <Route path=":branchId" element={<FactoryChart />} />
        </Route>
        <Route path="customer" element={<Customer notify={notify}/>} />
        <Route path="warranty-centers" element={<WarrantyCenterAdmin />}>
          <Route path=":branchId" element={<WarrantyCenterChart />} />
        </Route>
        <Route path="manage-product" element={<ManageProduct />} />
        <Route path="accounts" element={<ManageAccount notify={notify}/>} />
        <Route path="checking-product" element={<CheckingProduct />} />
        <Route path="statistics-product" element={<StatisticProduct />} />
        <Route path="information" element={<Information />} />
      </Route>

      <Route path="/factory" element={<Factory />}>
        <Route path="manufacture" element={<Manufacture notify={notify} />} />
        <Route path="input-store" element={<InputStore notify={notify} />} />
        <Route path="list-require" element={<ListRequirement />} />
        <Route path="factories-store" element={<FactoryStore />} />
        <Route path="history" element={<History />} />
        <Route path="statistic" element={<FactoryStatistic />} />
      </Route>

      <Route path="/distributor" element={<Distributor />}>
        <Route path="cashier" element={<Cashier notify={notify}/>} />
        <Route path="history-cashier" element={<HistoryBuild />} />
        <Route path="handle" element={<Requirement />} />
        <Route path="create-require" element={<CreateRequirement notify={notify} />} />
        <Route path="store" element={<Store />} />
        <Route path="statistics-require" element={<StaticSalesDistributor />} />
        <Route path="analysis-product" element={<Analysis />} />
        <Route path="history-require" element={<HistoryRequirement />} />
      </Route>

      <Route path="/warranty-center" element={<WarrantyCenter />}>
        <Route path="import-product" element={<ComfirmProduct />} />
        <Route path="create-require" element={<CreateRequire />} />
        <Route path="history-requirement" element={<HistoryRequirementWarranty />} />
        <Route path="store" element={<StoreWarranty />} />
      </Route>
      <Route path="/sign-in" element={<LogIn notify={notify} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
