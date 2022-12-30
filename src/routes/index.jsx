import LogIn from "../pages/login";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "../pages/not-found";
import Admin from "../pages/admin";
import Factory from "../pages/factory";
import WarrantyCenter from "../pages/warrantyCenter";
import DistributorsAdmin from "../pages/admin/components/statistics/distributor";
import FactoriesAdmin from "../pages/admin/components/statistics/factory";
import WarrantyCenterAdmin from "../pages/admin/components/statistics/warrantyCenter";
import TrackingProduct from "../pages/admin/components/statsProduct/trackingProduct";
import ProductChart from "../pages/admin/components/statsProduct/productChart";
import Information from "../pages/admin/components/information";
import Distributor from "../pages/distributor";
import ManageProduct from "../pages/admin/components/management/manageProduct";
import ManageAccount from "../pages/admin/components/management/manageAccount";
import HandleRequest from "../pages/warrantyCenter/components/handleRequests";
import Activity from "../pages/warrantyCenter/components/activity";
import Manufacture from "../pages/factory/components/manufacture";
import StaticSalesDistributor from "../pages/distributor/components/static";
import DistributorChart from "../pages/admin/components/statistics/distributor/distributorChart";
import HandleWarrantyRequest from "../pages/factory/components/handleRequests";
import InputStore from "../pages/factory/components/importStore";
import Customer from "../pages/admin/components/management/manageCustomer";
import HistoryRequest from "../pages/factory/components/historyRequests";
import Cashier from "../pages/distributor/components/cashier";
import HistoryTransaction from "../pages/distributor/components/historyTransaction";
import HandleDIstributorRequest from "../pages/distributor/components/handleRequests";
import Analysis from "../pages/distributor/components/analysis";
import FactoryStore from "../pages/factory/components/store";
import { useSelector } from "react-redux";
import HistoryRequirement from "../pages/distributor/components/historyRequirement";
import CreateDistributorRequests from "../pages/distributor/components/createRequests";
import FactoryStatistic from "../pages/factory/components/statistics";
import FactoryChart from "../pages/admin/components/statistics/factory/factoryChart";
import WarrantyCenterChart from "../pages/admin/components/statistics/warrantyCenter/warrantyCenterChart";
import HistoryRequestWarranty from "../pages/warrantyCenter/components/historyRequests";
import StoreWarranty from "../pages/warrantyCenter/components/store";
import DistributorStore from "../pages/distributor/components/store";

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
        <Route path="checking-product" element={<TrackingProduct />} />
        <Route path="statistics-product" element={<ProductChart />} />
        <Route path="information" element={<Information />} />
      </Route>

      <Route path="/factory" element={<Factory />}>
        <Route path="manufacture" element={<Manufacture notify={notify} />} />
        <Route path="input-store" element={<InputStore notify={notify} />} />
        <Route path="handle-requests" element={<HandleWarrantyRequest notify={notify}/>} />
        <Route path="store" element={<FactoryStore />} />
        <Route path="all-requests" element={<HistoryRequest />} />
        <Route path="statistic" element={<FactoryStatistic />} />
      </Route>

      <Route path="/distributor" element={<Distributor />}>
        <Route path="cashier" element={<Cashier notify={notify}/>} />
        <Route path="history-cashier" element={<HistoryTransaction />} />
        <Route path="handle" element={<HandleDIstributorRequest notify={notify} />} />
        <Route path="create-require" element={<CreateDistributorRequests notify={notify} />} />
        <Route path="store" element={<DistributorStore />} />
        <Route path="statistics-require" element={<StaticSalesDistributor />} />
        <Route path="analysis-product" element={<Analysis />} />
        <Route path="history-require" element={<HistoryRequirement />} />
      </Route>

      <Route path="/warranty-center" element={<WarrantyCenter />}>
        <Route path="handle-requests" element={<HandleRequest notify={notify}/>} />
        <Route path="activity" element={<Activity notify={notify}/>}/>
        <Route path="history-requirement" element={<HistoryRequestWarranty />} />
        <Route path="store" element={<StoreWarranty />} />
      </Route>

      <Route path="/sign-in" element={<LogIn notify={notify} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
