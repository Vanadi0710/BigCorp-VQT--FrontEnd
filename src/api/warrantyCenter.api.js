import { AxiosAuth } from "../services/AxiosService";

const warrantyProducts = async ({ products }) => {
  return (
    await AxiosAuth.put("/products/instances", {
      products,
    })
  ).data;
};

const fixProducts = async ({ products }) => {
  return await AxiosAuth.put("/products/instances", {
    products,
  });
};

const warrantyCenterAPI = {
  warrantyProducts,
  fixProducts,
};

export default warrantyCenterAPI;
