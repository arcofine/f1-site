import React from "react";
import Iframe from "react-iframe";
import Chart from "chart.js";

export default function CardLineChart() {
       return (
              <>
                     <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded bg-blueGray-700">
                            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                   <div className="flex flex-wrap items-center">
                                          <div className="relative w-full max-w-full flex-grow flex-1">
                                                 <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                                        Derniers Résultats
                                                 </h6>
                                                 <h2 className="text-white text-xl font-semibold">Hors-Saison</h2>
                                          </div>
                                   </div>
                            </div>
                            <div className="p-4 flex-auto">
                                   {/* Chart */}

                                   <div
                                          className="relative"
                                          style={{
                                                 display: "block",
                                                 overflow: "hidden",
                                                 width: "100%",
                                                 height: "900px",
                                          }}>
                                          <Iframe
                                                 url="/championships/championship?cid=2"
                                                 width="100%"
                                                 height="100%"
                                                 id=""
                                                 className=""
                                                 display="block"
                                                 position="relative"
                                                 overflow="visible"
                                                 scrolling="yes"
                                                 styles={{marginTop: "-180px"}}
                                          />
                                   </div>
                            </div>
                     </div>
              </>
       );
}
