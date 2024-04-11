import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
       render() {
              return (
                     <Html lang="en">
                            <Head>
                                   <meta charSet="utf-8" />
                                   <meta name="theme-color" content="#000000" />
                                   <meta name="expires" content="never" />
                                   <meta name="Date-creation-yyyymmdd" content="20010114" />
                                   <meta name="Date-revision-yyyymmdd" content="20120410" />
                                   <meta name="revisit-after" content="30 days" />
                                   <link rel="shortcut icon" href="/img/brand/favicon.ico" />
                                   <link rel="apple-touch-icon" sizes="76x76" href="/img/brand/apple-icon.png" />
                                   <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@1,300&display=swap" rel="stylesheet"/>
                            </Head>
                            <body className="bg-blueGray-400  text-blueGray-700 antialiased">
                                   <div id="page-transition"></div>
                                   <Main />
                                   <NextScript />
                            </body>
                     </Html>
              );
       }
}

export default MyDocument;
