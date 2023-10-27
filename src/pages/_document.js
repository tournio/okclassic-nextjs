import {Html, Head, Main, NextScript} from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href={'https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'}
        rel={'stylesheet'}/>
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
