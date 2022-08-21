import '../styles/globals.css'
// import 'antd/dist/antd.dark.css';
import 'antd/dist/antd.variable.min.css'
import '../styles/lib/__index.scss'
// import '../styles/lib/_dark.scss'
// import 'antd/dist/antd.compact.css';

import { ConfigProvider } from 'antd'
import LayoutWrapper from '../components/Layout'

ConfigProvider.config({
  theme: {
    primaryColor: 'darkorange',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ConfigProvider>
  )
}