import LogIn from "../pages/login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/not-found";
import Admin from "../pages/admin";
import Distributor from "../pages/distributor";
import Factory from "../pages/factory";
import WarrantyCenter from "../pages/warranty-center";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/factory" element={<Factory />}></Route>
      <Route path="/distributor" element={<Distributor />}></Route>
      <Route path="/warranty-center" element={<WarrantyCenter />}></Route>
      <Route path="/sign-in" element={<LogIn />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
