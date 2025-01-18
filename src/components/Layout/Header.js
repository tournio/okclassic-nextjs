import Head from 'next/head';

export const siteTitle = 'OKClassic - An IGBO tournament';

const Header = () => (
  <Head>
    <title>{siteTitle}</title>
    <meta httpEquiv={"Content-Type"} content={"text/html; charset=utf-8"} />
    <meta name={"title"} content={siteTitle} />
    <meta name={"viewport"} content={"width=device-width, initial-scale=1.0, shrink-to-fit=yes"} />
    <meta name={'description'} content={'The OKClassic is an IGBO-affiliated bowling tournament, taking place each April in Oklahoma City.'} />
    <meta name={'twitter:card'} content={'summary_large_image'} />
    <link rel="icon" type="image/x-icon" href="/images/logo-50x50.jpg" />
  </Head>
);

export default Header;
