import React from "react";
import Image from "next/image";
// components

import CardRules from "components/Cards/CardRules";

// layout for page

import Admin from "layouts/Admin.js";

export default function RulesGt({championship, error}) {
       const [league, setLangue] = React.useState("gt");

       const changeLangue = (lang) => {
              setLangue(lang);
              console.log(league);
       };
       return (
              <>
                     <div className="flex flex-wrap mt-5">
                            {error && (
                                   <>
                                          <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded bg-orange-500 mt-8 mb-5">
                                                 <div className="rounded-t mb-0 px-4 py-3 pb-0 bg-transparent">
                                                        <div className="flex flex-wrap items-center">
                                                               <div className="relative w-full max-w-full flex-grow flex-1">
                                                                      <h6 className="uppercase text-blueGray-800 mb-0 text-center text-xs font-semibold">
                                                                             Serveur en manutention
                                                                      </h6>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="p-1 flex-auto">
                                                        {/* Chart */}

                                                        <div
                                                               className="relative"
                                                               style={{
                                                                      display: "block",
                                                                      overflow: "hidden",
                                                                      width: "100%",
                                                                      height: "50px",
                                                               }}>
                                                               <h4 className="mt-0 text-3xl leading-relaxed text-center text-blueGray-100">
                                                                      Nous serons de retour dans quelques minutes
                                                               </h4>
                                                        </div>
                                                 </div>
                                          </div>
                                   </>
                            )}
                            {!error && (
                                   <>
                                          <div className="lg:w-12/12 w-full mb-12 px-4">
                                                 <div
                                                        style={{zIndex: 100}}
                                                        className="relative w-full flex flex-wrap items-end justify-end pr-4">
                                                        {league === "en" && (
                                                               <button
                                                                      onClick={() => changeLangue("fr")}
                                                                      className="absolute top-5">
                                                                      <img src="/img/flag-fr.png" width="30" alt="" />
                                                               </button>
                                                        )}
                                                        {league === "fr" && (
                                                               <button
                                                                      onClick={() => changeLangue("en")}
                                                                      className="absolute top-5">
                                                                      <img src="/img/flag-en.png" width="30" alt="" />
                                                               </button>
                                                        )}
                                                 </div>
                                                 <CardRules color="dark" league={league} />
                                          </div>
                                   </>
                            )}
                     </div>
              </>
       );
}

RulesGt.layout = Admin;
