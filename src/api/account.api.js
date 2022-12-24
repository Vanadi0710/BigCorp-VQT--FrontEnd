import { AxiosAuth } from "../services/AxiosService";

const getAccounts = async () => {
  return (await AxiosAuth.get("/accounts")).data;
};

const addAccount = async (account) => {
  return (await AxiosAuth.post("/accounts", account)).data;
};

const deleteAccount = async (accountId) => {
  return (await AxiosAuth.delete(`accounts/${accountId}`)).data;
};

const accountAPI = {
  getAccounts,
  addAccount,
  deleteAccount,
};

export default accountAPI;
