import React from "react";
import Script from "next/script";
// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
       return (
              <>
                     <Script src="/liveracers.js" />
                     <div className="flex flex-wrap mt-24 py-10">
                            {/* <div className="w-full lg:w-8/12 px-4">
                                   <CardSettings />
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                   <CardProfile />
                            </div> */}
                            <div className="w-full lg:w-4/12 px-4 ">
                                   <div
                                          id="lr-servers"
                                          className={
                                                 "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
                                          }></div>
                            </div>
                     </div>
              </>
       );
}

Settings.layout = Admin;
