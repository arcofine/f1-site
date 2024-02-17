import React from "react";
import PropTypes from "prop-types";
import * as tools from "../../utils/common.js";

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({color, data, drivers,teams}) {
       const RALLYTEAMS = tools.GET_TABLE_CONTENT(data["Class Overall"]["Teams Standings"]["teams"]);
       const query_RACES = tools.GET_TABLE_CONTENT(data["Class Overall"]["Teams Standings"]["Races"]);
       const RALLYDRIVERS = tools.GET_TABLE_CONTENT(data["Class Overall"]["Driver standings"]);
       console.log(RALLYDRIVERS);
       const dataType = teams ? RALLYTEAMS : RALLYDRIVERS;

       return (
              <>
                     {query_RACES != null && (
                            <div
                                   className={
                                          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                                          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                                   }>
                                   <div className="rounded-t mb-0 px-2 py-1 border-0">
                                          <div className="flex flex-wrap items-center">
                                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                        <h3
                                                               className={
                                                                      "font-semibold text-lg " +
                                                                      (color === "light"
                                                                             ? "text-blueGray-700"
                                                                             : "text-white")
                                                               }>
                                                               {teams
                                                                      ? "Classement d'équipes"
                                                                      : ""}
                                                        </h3>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="block w-full overflow-x-auto">
                                          {/* Drivers table */}
                                          <table className="items-center w-full bg-transparent border-collapse">
                                                 <thead>
                                                        <tr>
                                                               <th
                                                                      style={{flex: "0 0 5em"}}
                                                                      className={
                                                                             "px-2 align-middle table-cell border border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                                             (color === "light"
                                                                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                                                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                                      }>
                                                                      Pos
                                                               </th>
                                                               <th
                                                                      className={
                                                                             "px-1 align-middle border table-cell border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                                             (color === "light"
                                                                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                                                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                                      }>
                                                                      {teams ? "Team" : "Drivers"}
                                                               </th>
                                                               {query_RACES.map((race, i) => {
                                                                      return (
                                                                             <th
                                                                                    key={race}
                                                                                    className={
                                                                                           "px-1 align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                                                           (color === "light"
                                                                                                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                                                                  : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                                                    }>
                                                                                    {race.substring(0, 3)}
                                                                             </th>
                                                                      );
                                                               })}
                                                               <th
                                                                      className={
                                                                             "pr-4 align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                                                                             (color === "light"
                                                                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                                                    : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                                                      }>
                                                                      PTS
                                                               </th>
                                                        </tr>
                                                 </thead>
                                                
                                                 {teams === true &&(<tbody>
                                                        {dataType.sort((a, b) => b.Points - a.Points).map((item, i) => {
                                                               console.log(item)
                                                               return (
                                                                      <tr
                                                                             key={i + "_item"}
                                                                             className={
                                                                                    color === "light"
                                                                                           ? i % 2
                                                                                                  ? "bg-blueGray-50  text-blueGray-500"
                                                                                                  : "bg-blueGray-200  text-blueGray-500"
                                                                                           : i % 2
                                                                                                  ? "bg-blueGray-700"
                                                                                                  : "bg-blueGray-800"
                                                                             }>
                                                                             <th
                                                                                    style={{ flex: "0 0 5em" }}
                                                                                    className=" table-row border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0 text-left items-center">
                                                                                    <p className="flex-auto ml-0">
                                                                                           <span
                                                                                                  className={
                                                                                                         "text-center inline-flex items-center justify-center w-8 h-8 mb-0 rounded-full text-xs font-bold" +
                                                                                                         (color ===
                                                                                                                "light"
                                                                                                                ? "text-blueGray-500"
                                                                                                                : "text-blueGray-200")
                                                                                                  }>
                                                                                                  {i + 1}
                                                                                           </span>
                                                                                    </p>
                                                                             </th>
                                                                             <td className="border-t-0 px-0 py-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0">
                                                                                    <b className="mb-0">
                                                                                           {teams
                                                                                                  ? item.Constructeur
                                                                                                  : item.DRIVER}
                                                                                    </b>

                                                                                    {teams && (
                                                                                           <p className="text-2xs">
                                                                                                  {item.team_drivers}
                                                                                           </p>
                                                                                    )}
                                                                             </td>
                                                                             {item.stage_points.map((point, i) => {
                                                                                    return (
                                                                                           <td
                                                                                                  key={i + "_point"}
                                                                                                  className="border-t-0 text-center relative py-2 px-3 align-middle border-l border-blueGray-600 border-r-0 text-xs whitespace-nowrap p-0">
                                                                                                  {/* <i className="fas fa-circle text-orange-500 mr-2"></i>{" "} */}
                                                                                                  {point}
                                                                                                  {point !== "" && (
                                                                                                         <>
                                                                                                                <div className="text-orange-500
                                                                                                                          left-1
                                                                                                                          p-1
                                                                                                                          text-2xs
                                                                                                                          items-center
                                                                                                                          justify-center
                                                                                                                          w-1
                                                                                                                          h-2
                                                                                                                          mb-1
                                                                                                                          rounded-full
                                                                                                                         " > Point Boni: {item.PTS_boni[i]}</div>
                                                                                                                <div className="text-orange-500
                                                                                                                          left-1
                                                                                                                          p-1
                                                                                                                          text-2xs
                                                                                                                          items-center
                                                                                                                          justify-center
                                                                                                                          w-1
                                                                                                                          h-2
                                                                                                                          mb-2
                                                                                                                          rounded-full
                                                                                                                         " > PowerStage: {item.Powerstage[i]}</div>
                                                                                                         </>
                                                                                                         
                                                                                                  
                                                                                                  )}
                                                                                                  
                                                                                           </td>
                                                                                    );
                                                                             })}

                                                                             <td className="border-t-0 px-3 align-middle text-center border-l border-r-0 text-sm font-bold whitespace-nowrap p-0">
                                                                                    <div className="items-center">
                                                                                           <p className="mr-2">
                                                                                                  {item.Points}
                                                                                           </p>
                                                                                    </div>
                                                                             </td>
                                                                      </tr>
                                                               );
                                                        })}
                                                 </tbody>
                                                 )
                                                 }
                                                 {drivers === true &&(<tbody>
                                                        {dataType.sort((a, b) => b.Points - a.Points).map((item2, index) => {
                                                               return (
                                                                      <tr
                                                                             key={index + "_item"}
                                                                             className={
                                                                                    color === "light"
                                                                                           ? index % 2
                                                                                                  ? "bg-blueGray-50  text-blueGray-500"
                                                                                                  : "bg-blueGray-200  text-blueGray-500"
                                                                                           : index % 2
                                                                                                  ? "bg-blueGray-700"
                                                                                                  : "bg-blueGray-800"
                                                                             }>
                                                                             <th
                                                                                    style={{ flex: "0 0 5em" }}
                                                                                    className=" table-row border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0 text-left items-center">
                                                                                    <p className="flex-auto ml-0">
                                                                                           <span
                                                                                                  className={
                                                                                                         "text-center inline-flex items-center justify-center w-8 h-8 mb-0 rounded-full text-xs font-bold" +
                                                                                                         (color ===
                                                                                                                "light"
                                                                                                                ? "text-blueGray-500"
                                                                                                                : "text-blueGray-200")
                                                                                                  }>
                                                                                                  {item2.POS}
                                                                                           </span>
                                                                                    </p>
                                                                             </th>
                                                                             <td className="border-t-0 px-0 py-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0">
                                                                                    <b className="mb-0">
                                                                                           {teams
                                                                                                  ? item2.Constructeur
                                                                                                  : item2.DRIVER}
                                                                                    </b>
                                                                             </td>
                                                                             {item2.stage_points.map((point, i) => {
                                                                                    return (
                                                                                           <td
                                                                                                  key={i + "_point"}
                                                                                                  className="border-t-0 text-center relative py-2 px-3 align-middle border-l border-blueGray-600 border-r-0 text-xs whitespace-nowrap p-0">
                                                                                                  {/* <i className="fas fa-circle text-orange-500 mr-2"></i>{" "} */}
                                                                                                  {point}
                                                                                                  {point !== "" && (
                                                                                                         <>
                                                                                                                <div className="text-orange-500
                                                                                                                          left-1
                                                                                                                          p-3
                                                                                                                          text-2xs
                                                                                                                          items-center
                                                                                                                          justify-center
                                                                                                                          w-1
                                                                                                                          h-2
                                                                                                                          mb-1
                                                                                                                          rounded-full
                                                                                                                         " > Point Boni: {item2.PTS_boni[i]}</div>
                                                                                                                <div className="text-orange-500
                                                                                                                          left-1
                                                                                                                          p-1
                                                                                                                          text-2xs
                                                                                                                          items-center
                                                                                                                          justify-center
                                                                                                                          w-1
                                                                                                                          h-2
                                                                                                                          mb-2
                                                                                                                          rounded-full
                                                                                                                         " > PowerStage: {item2.Powerstage[i]}</div>
                                                                                                         </>
                                                                                                         
                                                                                                  
                                                                                                  )}
                                                                                                  
                                                                                           </td>
                                                                                    );
                                                                             })}

                                                                             <td className="border-t-0 px-3 align-middle text-center border-l border-r-0 text-sm font-bold whitespace-nowrap p-0">
                                                                                    <div className="items-center">
                                                                                           <p className="mr-2">
                                                                                                  {item2.Points}
                                                                                           </p>
                                                                                    </div>
                                                                             </td>
                                                                      </tr>
                                                               );
                                                        })}
                                                 </tbody>
                                                 )
                                                 }
                                          </table>
                                   </div>
                            </div>
                     )}
              </>
       );
}

CardTable.defaultProps = {
       color: "light",
};

CardTable.propTypes = {
       color: PropTypes.oneOf(["light", "dark"]),
};