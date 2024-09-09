import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
       return (
              <>
                     {/* Navbar */}
                     <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4 py-4">
                                   {/* Brand */}
                                   <a
                                          className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}>
                                          Simsports Canada - Saison 2024
                                   </a>
                            </div>
                            <p className="flex-auto ml-0">
                                   <span
                                          className="text-blueGray-200
                                                                                                  text-center
                                                                                                  inline-flex
                                                                                                  items-center
                                                                                                  justify-center
                                                                                                  w-1
                                                                                                  px-12
                                                                                                  h-8
                                                                                                  mb-0
                                                                                                  shadow-lg
                                                                                                  rounded-full
                                                                                                  text-sm
                                                                                                  font-bold
                                                                                                  bg-red-500
                                                                                                 ">
                                          BETA
                                   </span>
                            </p>
                     </nav>
                     {/* End Navbar */}
              </>
       );
}
