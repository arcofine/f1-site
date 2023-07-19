import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";

// layout for page

import La2 from "layouts/La2.js";

export default function DashboardF1() {
       return (
              <>
                     <div className="flex flex-wrap">
                            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                                   <CardLineChart mode="F1" />
                            </div>
                     </div>
              </>
       );
}

DashboardF1.layout = La2;
