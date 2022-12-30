import { AxiosAuth } from "../services/AxiosService";

const sellProducts = async ({ products, customerTag }) => {
  return (
    await AxiosAuth.post("/distributor/products/sell", { products, customerTag })
  ).data;
};

const requestImportProducts = async ({ products, from, to, type, note }) => {
  return (
    await AxiosAuth.post("/transports", {
      products,
      from,
      to,
      type,
      note,
    })
  ).data;
};

const getRequests = async () => {
  return (await AxiosAuth.get("/transports")).data;
};

const getReqNeedApprove = async () => {
  return (await AxiosAuth.get("/transports/need-approve")).data;
};

const reqSendFailedToWarranty = async ({ products, from, to, type, note }) => {
  return await AxiosAuth.post("/transports", {
    products,
    from,
    to,
    type,
    note,
  });
};

const distributorAPI = {
  sellProducts,
  requestImportProducts,
  getRequests,
  getReqNeedApprove,
  reqSendFailedToWarranty,
};

export default distributorAPI;
