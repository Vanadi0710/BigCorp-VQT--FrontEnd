import { Button, Form, Modal, Table } from "antd";
import React, { useState, useEffect } from "react";
import { Input, InputNumber } from "antd";
import ProductDetailsModal from "../../../../components/productDetails";
import productAPI from "../../../../api/product.api";
import factoryAPI from "../../../../api/factory.api";

const Manufacture = ({notify}) => {
  const [products, setProducts] = useState([]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productIsPicked, setProductIsPicked] = useState();
  const [quantity, setQuantity] = useState(0)
  const [note, setNote] = useState('')
 
  const showProductModal = () => {
    setIsProductModalOpen(true);
  };

  const produceProducts = async () => {
    if(quantity <= 0) return
    setOpen(false)
    try {
        let product = {
            quantity: quantity,
            note: note,
            product: productIsPicked._id 
        }
        await factoryAPI.produceProducts(product)
        notify('Sản xuất thành công')
        setNote('')
    } catch(e) {
        console.log(e)
        notify(e.response?.data, 'ERROR')
    }
  }

  const [open, setOpen] = useState(false);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Hãng sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Thao tác",
      key: "active",
      render: (product) => (
        <Button
          onClick={() => {
            showProductModal();
            setProductIsPicked(product);
          }}
          type="primary"
        >
          chi tiết
        </Button>
      ),
    },
    {
      title: "Hoạt động",
      key: "manufacture",
      render: (product) => (
        <Button
          onClick={() => {
            setOpen(true);
            setProductIsPicked(product);
          }}
          type="primary"
          danger
        >
          Sản xuất
        </Button>
      ),
    },
  ];

  const getProducts = async () => {
    let products = await productAPI.getProducts();
    products = products.map((product, index) => {
      return {
        ...product,
        brand: product?.productLine?.brand,
        key: index,
        id: index + 1,
      };
    });
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div>
        <h3 className="py-4">Sản xuất hàng hoá</h3>
        <hr />
      </div>
      <Table columns={columns} dataSource={products} size="small" />

     <Modal
        centered
        open={open}
        onOk={() => produceProducts()}
        onCancel={() => {setOpen(false) 
        setQuantity(0)
        setNote('')
        }}
        width={700}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <div className="py-3">
            <h3>Sản xuất {productIsPicked.productName}</h3>
          </div>
          <Form.Item label="Nhập số lượng">
            <InputNumber onChange={(value) => {setQuantity(value)}}/>
          </Form.Item>
          <Form.Item label="Ghi chú">
            <Input value={note} placeholder="Ghi chú... " onChange={(e) => {setNote(e.target.value)}}/>
          </Form.Item>
        </Form>
      </Modal>

      {isProductModalOpen && (
        <ProductDetailsModal
          setIsProductModalOpen={setIsProductModalOpen}
          product={productIsPicked}
        />
      )}
    </div>
  );
};
export default Manufacture;
