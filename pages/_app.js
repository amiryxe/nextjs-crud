import '../styles/globals.css'
import 'antd/dist/antd.variable.min.css'
// import 'antd/dist/antd.dark.css';
// import 'antd/dist/antd.compact.css';

import LayoutWrapper from '../components/Layout'
import { ConfigProvider } from 'antd'

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
    backgroundColor: '#333',
    backgroundColorBase: '#333',
    backgroundColorLight: '#333',
    backgroundColorDark: '#333',
    backgroundColorDanger: '#333',
    backgroundColorInfo: '#333',
    backgroundColorSuccess: '#333',
    backgroundColorWarning: '#333',


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