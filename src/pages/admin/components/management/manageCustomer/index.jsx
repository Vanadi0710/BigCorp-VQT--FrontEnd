import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { PAGE_SIZE } from "../../../../../constants";
import customerAPI from "../../../../../api/customer.api";
import AddCustomerModal from "./addCustomer";
import HistoryBought from "./historyBought";

const Customer = ({notify}) => {
  const customerColumns = [
    {
      title: 'id',
      dataIndex: 'id',

    },
    {
      title: "Tên khách hàng",
      dataIndex: "fullName",
      key: 'fullName'
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: 'phone'
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: 'address'
    },

    {
      title: "Chi tiết đơn mua",
      render: (data) => (
        <Button type="primary" onClick={() => openHistoryBoughtModal(data)}>
          chi tiết
        </Button>
      ),
    },
  ];
  const [customers, setCustomers] = useState([])
  const [isAddCUstomerModalOpen, setIsAddCustomerModalOpen] = useState(false)
  const [isHistoryBoughtModalOpen, setIsHistoryBoughtModalOpen] = useState(false)
  const [customerIsPicked, setCustomerIsPicked] = useState()

  const openHistoryBoughtModal = async (data) => {
    setIsHistoryBoughtModalOpen(true)
    let customer = await customerAPI.getCustomer(data._id)
    console.log(customer)
  }

  const getCustomers = async (params = {}) => {
    let customers = await customerAPI.getCustomers(params)
    customers = customers.map((customer, ind) => {
      return {
        ...customer,
        id: ind + 1
      }
    })
    setCustomers(customers)
  }

  useEffect(() => {
    getCustomers()
  }, [])
  return (
    <div>
      <div>
        <div className="py-4">
          <h3>Danh sách khách hàng</h3>
        </div>
        <hr />
      </div>
      <Button
        onClick={() => setIsAddCustomerModalOpen(true)}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Tạo khách hàng
      </Button>
      <Table dataSource={customers} columns={customerColumns} pageSize={PAGE_SIZE} />

      {isAddCUstomerModalOpen && <AddCustomerModal setIsAddCustomerModalOpen={setIsAddCustomerModalOpen} notify={notify} getCustomers={getCustomers}/>}
      {isHistoryBoughtModalOpen && <HistoryBought setIsHistoryBoughtModalOpen={setIsHistoryBoughtModalOpen} notify={notify} dataHistoryBought={customerIsPicked}/>}
    </div>
  );
};
export default Customer;
