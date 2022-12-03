import {Route, Routes} from "react-router-dom";
import ListDealer from "../list/listDealer";
import ListProduct from "../list/listProduct";
import ListWarranty from "../list/listWarranty";
import Product from "../product";
import RequireProduct from "../product/requireProduct";
import CreateProduct from "../product/createProduct";
const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/list-dealer" element={<ListDealer />} />
                <Route path="/list-product" element={<ListProduct />} />
                <Route path="/list-warrant" element={<ListWarranty />} />
                <Route path="/product/store" element={<Product />} />
                <Route path="/product/require" element={<RequireProduct />} />
                <Route path="/product/createProduct" element={<CreateProduct />} />

            </Routes>
        </div>

    );

}
export default Rout;