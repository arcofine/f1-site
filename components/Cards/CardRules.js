import React from "react";
import PropTypes from "prop-types";
import RuleF1 from "components/Rules/RuleF1";
import RuleGt from "components/Rules/RuleGt";

// components

export default function CardRules({color, league}) {
       return (
              <>
                     <div
                            className={
                                   "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                                   (color === "light" ? "bg-white" : "bg-blueGray-400 text-white")
                            }>
                            <div className="rounded-t mb-0 px-2 py-1 border-0">
                                   <div className="flex flex-wrap items-center">
                                          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                 <h3
                                                        className={
                                                               "font-semibold text-lg " +
                                                               (color === "light" ? "text-blueGray-700" : "text-white")
                                                        }>
                                                        {/* Version Française */}
                                                 </h3>
                                          </div>
                                   </div>
                            </div>
                            <div className="block w-full overflow-x-auto px-4 py-4">
                                   {league === "f1" || !league ? <RuleF1 /> : <RuleGt />}
                            </div>
                     </div>
              </>
       );
}

CardRules.defaultProps = {
       color: "light",
};

CardRules.propTypes = {
       color: PropTypes.oneOf(["light", "dark"]),
};
