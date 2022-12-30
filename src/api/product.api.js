import { AxiosAuth } from "../services/AxiosService";

const getProducts = async () => {
  return (await AxiosAuth.get("/product-lines/products")).data;
};

const getInstancesByBranchId = async ({ branchId, status = '', model = ''}) => {
  return (await AxiosAuth.get(
    `/product-lines/products/instances/branch/${branchId}`,
    {
      params: {
        status,
        model
      }
    }
  )).data;
};

const getProductInstance = async (instanceId) => {
  return (
    await AxiosAuth.get(
      `/product-lines/products/product/instances/${instanceId}`
    )
  ).data;
};

const getProduct = async (productId) => {
  return (await AxiosAuth.get(`/product-lines/products/${productId}`)).data;
};

const productAPI = {
  getProducts,
  getProduct,
  getProductInstance,
  getInstancesByBranchId,
};

export default productAPI;
