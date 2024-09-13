import React from "react";

// components

import CardTable from "../../components/Cards/CardTable.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function TablesGt({championship, error}) {
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
                                          <div className="w-full mb-12 px-4">
                                                 <CardTable driversPRO data={championship} color="dark" />
                                          </div>
                                          <div className="w-full mb-12 px-4">
                                                 <CardTable driversAM data={championship} color="dark" />
                                          </div>
                                   </>
                            )}
                     </div>
              </>
       );
}

TablesGt.layout = Admin;
export async function getServerSideProps({
       params,
       req,
       res,
       query,
       preview,
       previewData,
       resolvedUrl,
       locale,
       locales,
       defaultLocale,
}) {
       try {
              const data = await fetch("http://theovox-rdp.ddns.net:8803/championships/export_standings_json.json?cid=3");
              const championship = await data.json();
              return {props: {championship}};
       } catch (err) {
              console.log("request failed: ", err);
              const error = {error: "Serveur en manutention"};
              return {props: {error}};
       }
}
