import '../style/index.scss'
import {SSRProvider} from "react-bootstrap";

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
