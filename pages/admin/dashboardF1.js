import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import La2 from "layouts/La2.js";

export default function DashboardF1() {
       return (
              <>
                     <div className="flex flex-wrap">
                            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                                   <CardLineChart />
                            </div>
                     </div>
              </>
       );
}

DashboardF1.layout = La2;
