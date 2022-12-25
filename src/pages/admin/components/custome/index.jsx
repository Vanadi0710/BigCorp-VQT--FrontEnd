import React, { useContext, useEffect, useRef, useState } from 'react';
import {Button, Form, Input, Modal, Popconfirm, Table} from 'antd';
import {InfoCircleOutlined} from "@ant-design/icons";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
                          title,
                          editable,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          ...restProps
                      }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Lưu thất bại!:', errInfo);
        }
    };
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} bắt buộc phải nhập.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};
const Customer = () => {
    // model
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // end model
    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            name: 'Edward King 0',
            phoneNumber: '0338691729',

            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            phoneNumber: '0338691729',

            address: 'London, Park Lane no. 1',
        },
        {
            key: '3',
            name: 'Edward King 0',
            phoneNumber: '0338691729',
            address: 'London, Park Lane no. 0',
        },
    ]);
    const [count, setCount] = useState(2);
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const defaultColumns = [
        {
            title: 'Tên khách hành',
            dataIndex: 'name',
            width: '30%',
            editable: true,
        },
        {
            title: 'số điện thoại',
            dataIndex: 'phoneNumber',
            editable: true,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            editable: true,
        },
        {
            title: 'Xoá',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a className="btn btn-danger">Delete</a>
                    </Popconfirm>
                ) : null,
        },
        {
            title: 'Chi tiết đơn mua',
            dataIndex: 'action',
            render: () => <Button type="primary" onClick={showModal}>chi tiết</Button>
        },
    ];
    const handleAdd = () => {
        const newData = {
            key: count,
            name: `Edward King ${count}`,

            phoneNumber: '0976978302',
            address: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });
    //data models
    const columnsModels = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
        },
        {
            title: 'Ngày mua',
            dataIndex: 'date',
        },

    ];
    const dataModels = [
        {
            key: '1',
            name: 'Macbook',
           date: '01/01/1985',
        },
        {
            key: '2',
            name: 'Macbook',
            date: '01/01/1985',
        },
        {
            key: '3',
            name: 'Macbook',
            date: '01/01/1985',
        },
        {
            key: '4',
            name: 'Macbook',
            date: '01/01/1985',
        }
    ]
    return (
        <div>
            <div>
                <div className="py-4">
                    <h3>Danh sách khách hàng</h3>
                </div>
                <hr/>
            </div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
               Thêm khách hàng
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
                pageSize={6}

            />
            <Modal title="Thông tin sản phẩm đã mua " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Table dataSource={dataModels} columns={columnsModels}/>
            </Modal>
        </div>
    );
};
export default Customer;
