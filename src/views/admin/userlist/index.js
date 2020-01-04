import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon, Table } from 'antd';
import { pagination } from 'utils/tip';
import { requireUserList } from 'apis/admin/user';
const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '头像',
        dataIndex: 'avatar_url',
        key: 'avatar_url',
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '创建日期',
        dataIndex: 'create_at',
        key: 'create_at',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span className="jane-buttom-outer">
                <Button size='small' type="primary">修改</Button>
                <Button size='small' type="danger">删除</Button>
            </span>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        avatar_url: 'http://localhost:8080/images/a.png',
        phone: 17858805106,
        create_at: '2019-12-05 16:17:31',
    },
    {
        key: '2',
        name: 'Jim Green',
        avatar_url: 'http://localhost:8080/images/b.png',
        phone: 17858805106,
        create_at: '2019-12-05 16:17:31',
    },
    {
        key: '3',
        name: 'Joe Black',
        avatar_url: 'http://localhost:8080/images/c.png',
        phone: 17858805106,
        create_at: '2019-12-05 16:17:31',
    },
    {
        key: '3',
        name: 'Joe Black',
        avatar_url: 'http://localhost:8080/images/c.png',
        phone: 17858805106,
        create_at: '2019-12-05 16:17:31',
    },
    {
        key: '3',
        name: 'Joe Black',
        avatar_url: 'http://localhost:8080/images/c.png',
        phone: 17858805106,
        create_at: '2019-12-05 16:17:31',
    }

];


class UserList extends PureComponent {
    state = {
        pagination: {}
    }
    render () {
        const { form: { getFieldDecorator } } = this.props;
        return (
            <div className="jane-admin-inner-layout">
                <Form layout='inline' name="form" className="jane-admin-search">
                    <Form.Item label="用户名" >
                        {getFieldDecorator(`name`)(<Input
                            prefix={<Icon className="jane-icon" type="user" />}
                            placeholder="请输入用户名" />)}

                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" onClick={() => this.search()}>查询</Button>
                        <Button type="primary">新增</Button>
                    </Form.Item>
                </Form>
                <Table size='middle' scroll={{ y: 'calc(100vh - 363px)' }} pagination={this.state.pagination} columns={columns} dataSource={data} />
            </div>
        );
    }
    componentDidMount () {
        this.setState({
            pagination: new pagination(this.onChange.bind(this), this.onShowSizeChange.bind(this))
        }, () => {

        })
    }
    search (page = 1, pageSize = 10) {
        this.state.pagination.handlePageChange(page, pageSize)
        const params = this.getParams();
        requireUserList(params)
    }
    getParams () {
        return {
            ...this.props.form.getFieldsValue(), ...this.state.pagination.getPageSize()
        }
    }
    onChange (page, pageSize) {
        this.search(page, pageSize);
    }
    onShowSizeChange (page, size) {
        this.search(page, size);
    }
}
const mapState = state => ({
    navList: state.getIn(['adminLayout', 'navList']),
})

export default connect(mapState, null)(Form.create({ name: 'form' })(UserList));