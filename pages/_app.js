import '../styles/globals.css'
import 'antd/dist/antd.variable.min.css'
import LayoutWrapper from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}