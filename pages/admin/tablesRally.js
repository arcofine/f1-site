import React from "react";
import TableRally from "../../utils/tableRally.json"

// components

import CardTableRally from "../../components/Cards/CardTableRally.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function TablesRally({tableRally}) {
       return (
              <>
                     <div className="flex flex-wrap mt-5">
                            
                            {(
                                   <>
                                          <div className=" w-full mb-12 px-4">
                                                 <CardTableRally teams data={tableRally} color="dark" />
                                          </div>
                                        
                                   </>
                            )}
                     </div>
              </>
       );
}

TablesRally.layout = Admin;
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
       
              const tableRally =  TableRally;
              return {props: {tableRally}};
       
}
