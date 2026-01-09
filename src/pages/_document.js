import {Html, Head, Main, NextScript} from "next/document";

const Document = () => (
  <Html>
    <Head>
    </Head>
    <body>
      <div className={`top-image-background`}></div>
      <div className={`top-background-shade`}></div>

      <Main/>
      <NextScript/>
    </body>
  </Html>
)

export default Document;
