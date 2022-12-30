import { AxiosAuth } from "../services/AxiosService";

const warrantyProducts = async ({ products, status }) => {
  return (
    await AxiosAuth.post("/warranty/switch-to-warranty", {
      products,
      status
    })
  ).data;
};

const fixProducts = async ({ products }) => {
  return await AxiosAuth.put("/products/instances", {
    products,
  });
};

const getRequests = async () => {
  return (await AxiosAuth.get("/transports")).data;
};

const getReqNeedApprove = async () => {
  return (await AxiosAuth.get("/transports/need-approve")).data;
};

const reqSendFailedToFactory = async ({ products, from, to, type, note }) => {
  return await AxiosAuth.post("/transports", {
    products,
    from,
    to,
    type,
    note,
  });
};

const reqSendDoneToDistributor = async ({ products, from, to, type, note }) => {
  return await AxiosAuth.post("/transports", {
    products,
    from,
    to,
    type,
    note,
  });
};

const warrantyCenterAPI = {
  warrantyProducts,
  fixProducts,
  getRequests,
  getReqNeedApprove,
  reqSendDoneToDistributor,
  reqSendFailedToFactory,
};

export default warrantyCenterAPI;
