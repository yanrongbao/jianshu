import './index.less';
import React, { PureComponent } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RouterView from 'router/views/routerView';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class AdminLayout extends PureComponent {
    state = {
        collapsed: false,
    };

    render () {
        const { navList, routes } = this.props;
        return (
            <Layout className="jane-admin-layout">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">简书后台管理系统</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            navList.map((itemF, index) => {
                                return (
                                    <SubMenu
                                        key={itemF.get('path')}
                                        title={
                                            <span>
                                                <Icon type={itemF.get('meta').get('iconClass')} />
                                                <span>{itemF.get('meta').get('name')}</span>
                                            </span>
                                        }
                                    >
                                        {itemF.get('children') && itemF.get('children').map(itemC => {
                                            return (
                                                <Menu.Item key={itemC.get('path')}><Link to={itemC.get('path')}>{itemC.get('meta').get('name')}</Link></Menu.Item>
                                            )
                                        })}
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="jane-admin-header" />
                    <Content className="jane-admin-content">
                        <Breadcrumb className="jane-admin-breadcrumb">
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="jane-admin-route">
                            <RouterView routes={routes} />
                        </div>
                    </Content>
                    <Footer className="jane-admin-footer">Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
}

const mapState = state => ({
    navList: state.getIn(['adminLayout', 'navList'])
})

export default connect(mapState, null)(AdminLayout);