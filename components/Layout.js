import { useState } from 'react'

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'

import { Breadcrumb, Layout, Menu } from 'antd'
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout

const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: <Link href='/' exact>Home</Link>,
    },
    {
        key: '2',
        icon: <TeamOutlined />,
        label: <Link href='/about' exact>About</Link>,
    },
]

export default function LayoutWrapper({ children }) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ margin: '1.07rem' }}>
                    <h1 style={{ color: '#fff' }}>Logo</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item>Page</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}