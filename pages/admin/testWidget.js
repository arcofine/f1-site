import React from "react";
import Script from "next/script";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// layout for page

export default function Settings() {
       return (
              <>
                     <Script src="/liveracers.js" />
                     <IndexNavbar fixed />
                     <section>
                            <div className="flex flex-wrap mt-24 py-10">
                                   <div
                                          id="lr-servers"
                                          orientation="horizontal"
                                          className={
                                                 "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
                                          }></div>
                            </div>
                     </section>
                     <Footer />
              </>
       );
}
