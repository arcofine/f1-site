import React from "react";
import Link from "next/link";
import {createPopper} from "@popperjs/core";

const IndexDropdown = () => {
       // dropdown props
       const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
       const btnDropdownRef = React.createRef();
       const popoverDropdownRef = React.createRef();
       const openDropdownPopover = () => {
              createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
                     placement: "bottom-start",
                     modifiers: [
                            {
                                   name: "offset",
                                   options: {
                                          offset: [-210, -5],
                                   },
                            },
                     ],
              });
              setDropdownPopoverShow(true);
       };
       const closeDropdownPopover = () => {
              setDropdownPopoverShow(false);
       };
       return (
              <>
                     <a
                            className="hover:text-blueGray-500 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs xs:text-sm uppercase font-bold"
                            href="#pablo"
                            ref={btnDropdownRef}
                            onClick={(e) => {
                                   e.preventDefault();
                                   dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                            }}>
                            Tableau de bord
                     </a>
                     <div
                            ref={popoverDropdownRef}
                            className={
                                   (dropdownPopoverShow ? "block " : "hidden ") +
                                   "bg-blueGray-200drop text-base z-50 float-left py-2 list-none text-left flex flex-row rounded shadow-lg min-w-48"
                            }>
                            <div className="index-dropdown-separator">
                                   <span
                                          className={
                                                 "text-md pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-red-500"
                                          }>
                                          F1 - Saison 1 2024
                                   </span>
                                   <hr className="my-2 border-blueGray-300" />
                                   <Link
                                          href="/admin/tablesF1"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                          }>
                                          Classements
                                   </Link>

                                   <Link
                                          href="/admin/dashboardF1"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                          }>
                                          Derniers résultats
                                   </Link>
                                   
                                   <Link
                                          href="/admin/rulesF1"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                          }>
                                          Règlements
                                   </Link>
                            </div>
                            <div>
                                   <span
                                          className={
                                                 "text-md pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-red-500"
                                          }>
                                          MultiClass - Saison 1 2024
                                   </span>
                                   <hr className="my-2 border-blueGray-300" />
                                   <Link
                                          href="/admin/tablesGt"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                          }>
                                          Classements
                                   </Link>

                                   <a
                                          href="https://www.gt3sim.com/admin/dashboardGt"
                                          target="_self"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent  "
                                          }>
                                          Derniers Résultats
                                   </a>
                                   
                                   <Link
                                          href="/admin/rulesGt"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                          }>
                                          Règlements
                                   </Link>
                            </div>
                     </div>
                     
              </>
       );
};

export default IndexDropdown;
