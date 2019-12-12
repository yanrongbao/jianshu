import './index.less';
import React, { PureComponent } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
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
                                        key={itemF.get('key')}
                                        title={
                                            <span>
                                                <Icon type={itemF.get('type')} />
                                                <span>{itemF.get('title')}</span>
                                            </span>
                                        }
                                    >
                                        {itemF.get('children').map(itemC => {
                                            return (
                                                <Menu.Item key={itemC.get('key')}><Link to={itemC.get('url')}>{itemC.get('title')}</Link></Menu.Item>
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
                            <Switch>
                                {
                                    routes.map((route, i) => {
                                        return <RouteWithSubRoutes key={i} {...route} />
                                    })
                                }
                            </Switch>
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
function RouteWithSubRoutes (route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const mapState = state => ({
    navList: state.getIn(['adminLayout', 'navList'])
})

export default connect(mapState, null)(AdminLayout);