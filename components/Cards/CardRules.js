import React from "react";
import PropTypes from "prop-types";
import RuleFrench from "components/Rules/RuleFrench";
import RuleEnglish from "components/Rules/RuleEnglish";

// components

export default function CardRules({color, langue}) {
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
                                   {langue === "fr" || !langue ? <RuleFrench /> : <RuleEnglish />}
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
