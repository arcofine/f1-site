import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables({championship}) {
       return (
              <>
                     <div className="flex flex-wrap mt-4">
                            <div className="w-full mb-12 px-4">
                                   <CardTable drivers data={championship} color="dark" />
                            </div>
                            <div className="w-full mb-12 px-4">
                                   <CardTable teams data={championship} color="dark" />
                            </div>
                     </div>
              </>
       );
}

Tables.layout = Admin;
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
              const data = await fetch(
                     "http://thirtheen-home.myddns.me:8000/championships/export_standings_json.json?cid=2"
              );
              const championship = await data.json();
              return {props: {championship}};
       } catch (err) {
              console.log("request failed: ", err);
       }
}
