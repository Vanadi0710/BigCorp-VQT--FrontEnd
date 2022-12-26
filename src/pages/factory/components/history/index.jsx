import {Table} from "antd";

const History = () => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Mã yêu cầu',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'cơ sở yêu cầu',
            dataIndex: 'nameProduct',
            key: 'nameProduct',
        },
        {
            title: 'chi tiết đơn',
            dataIndex: 'info',
            key: 'info',
        },
        {
            title: 'Ngày xác nhận ',
            dataIndex: 'date',
            key: 'date',

        },
        {
            title: 'Ghi  chú  ',
            dataIndex: 'note',
            key: 'note',

        },

    ];
    return (
            <div>
                <div className="py-4">
                    <h3>Lịch sử yêu cầu</h3>
                    <hr/>
                </div>
                <div>
                    <Table dataSource={dataSource} columns={columns} />;
                </div>
            </div>
        );

}
export default History;