import React, { Fragment } from "react";
import Head from "next/head";
import Header from '@components/menu/header';
import ScrollToTopBtn from '@components/menu/ScrollToTop';

const Layout = ({ pageTitle, pageDescription, keyWords, children }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8"/>
        <title>{pageTitle}</title>
        <meta name="google-site-verification" content="Q1VbG70vk5QDujpOCiy41GLO32duGdDJ9BVYXzmKOGs" />
        <meta property="og:image" content="https://ntmomineen.com.au/webPreviewNTMomineen.jpg"/>
				<link property="image" href="https://ntmomineen.com.au/webPreviewNTMomineen.jpg" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="keywords" content={keyWords} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow"/>
        {/* <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} /> */}
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
        <div id="wrapper">{children}</div>
      <ScrollToTopBtn />
    </Fragment>
  );
};

export default Layout;

