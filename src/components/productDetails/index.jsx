import { useState } from "react";
import { Button, Image, Modal, Table } from "antd";
import { BACKEND_BASE_URL } from "../../constants";

const ProductDetailsModal = ({ setIsProductModalOpen, product }) => {
  const columnsPopup = [
    {
      title: "Thông số",
      dataIndex: "property",
    },
    {
      title: "Chi tiết",
      dataIndex: "description",
    },
  ];
  const dataPopup = [
    {
      key: "1",
      property: "cpu",
      description: product.cpu,
    },
    {
      key: "2",
      property: "RAM",
      description: product.ram,
    },
    {
      key: "3",
      property: "Ổ cứng",
      description: product.hardDrive,
    },
    {
      key: "4",
      property: "Màn hình",
      description: product.monitor,
    },
    {
      key: "5",
      property: "Trọng lượng",
      description: product.weight,
    },
    {
      key: "6",
      property: "Giá",
      description: product.price,
    },
    {
      key: "7",
      property: "Đồ họa",
      description: product.graphic,
    },
    {
      key: "8",
      property: "Hệ điều hành",
      description: product.os,
    },
  ];

  const handleOk = () => {
    setIsProductModalOpen(false);
  };
  const handleCancel = () => {
    setIsProductModalOpen(false);
  };

  const [visible, setVisible] = useState(false);

  return (
    <Modal
      title={product.productName}
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <div className="row d-flex align-items-center justify-content-around">
        <div className="col-5">
          <Image
            preview={{
              visible: false,
            }}
            width={150}
            src={BACKEND_BASE_URL + '/' + product.images[0]}
            onClick={() => setVisible(true)}
            alt={product.productName}
          />
          <div
            style={{
              display: "none",
            }}
          >
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
                {product.images.map((image, index) => {
                    return (
                        <Image key={index} src={BACKEND_BASE_URL + '/' + image} alt={product.productName}/>
                    )
                })}
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="col-7">
          <div>
            <Table
              columns={columnsPopup}
              dataSource={dataPopup}
              size="small"
              pagination={false}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ProductDetailsModal;
