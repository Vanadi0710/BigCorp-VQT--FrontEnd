import { Button, Modal, Table, Select } from "antd";
import { useState } from "react";

const HistoryBought = ({
  setIsHistoryBoughtModalOpen,
  notify,
  dataHistoryBought,
}) => {
  const boughtColumns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
    },
    {
      title: "Model",
      dataIndex: "model",
    },
    {
      title: "Ngày mua",
      dataIndex: "date",
    },
    {
      title: "Hạn bảo hành",
      dataIndex: "dueWarranty",
    },
    {
      title: "Nơi mua",
      dataIndex: "branch",
    },
    {
      title: "Trạng thái",
      dataIndex: "state",
    },
    {
      title: "Thao tác",
      render: () => (
        <Button type="primary" onClick={showModalDistributor}>
          Bảo hành
        </Button>
      ),
    },
  ];
  const [isModalOpenDistributor, setIsModalOpenDistributor] = useState(false);

  const showModalDistributor = () => {
    setIsModalOpenDistributor(true);
  };

  return (
    <div>
      <Modal
        width={1000}
        title="Thông tin sản phẩm đã mua "
        open={true}
        onCancel={() => setIsHistoryBoughtModalOpen(false)}
      >
        <Table dataSource={dataHistoryBought} columns={boughtColumns} />
      </Modal>

      <Modal
        title="Chọn đại lý bảo hành"
        open={isModalOpenDistributor}
        onOk={() => setIsModalOpenDistributor(false)}
        onCancel={() => setIsModalOpenDistributor(false)}
      >
        <Select
          className="py-3"
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Search to Select"
          options={[
            {
              value: "1",
              label: "Đại lý A",
            },
            {
              value: "2",
              label: "Đại lý B",
            },
          ]}
        />
      </Modal>
    </div>
  );
};

export default HistoryBought;
