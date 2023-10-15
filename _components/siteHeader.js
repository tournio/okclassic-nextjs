import Head from "next/head";
import React from "react";

export const siteTitle = 'OKClassic - an IGBO bowling tournament';

const siteHeader = () => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/logo-small.jpg" />

      <meta content="text/html"
            charSet="utf-8"
            httpEquiv="Content-Type" />
      <meta content="title"
            name={siteTitle} />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport" />

      <meta
        name="description"
        content="OKClassic, an IGBO bowling tournament in Oklahoma City, Oklahoma"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default siteHeader;
