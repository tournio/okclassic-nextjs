import {Html, Head, Main, NextScript} from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href={'https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'}
        rel={'stylesheet'}/>
    </Head>
    <body>
      <div className={`nav-and-top`} id={'tippy-top'}>
        <div className={`top-image-background`}></div>
        <div className={`top-background-shade`}></div>

        <Main/>
        <NextScript/>
      </div>
    </body>
  </Html>
)

export default Document;
