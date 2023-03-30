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
                                          offset: [-32, -10],
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
                            className="hover:text-blueGray-500 text-blueGray-300 px-2 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
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
                                   "bg-blueGray-200 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                            }>
                            <span
                                   className={
                                          "text-md pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-red-500"
                                   }>
                                   Saison 2023
                            </span>
                            <hr className="my-2 border-blueGray-300" />
                            <Link
                                   href="/admin/tables"
                                   className={
                                          "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                   }>
                                   Classements
                            </Link>

                            <Link
                                   href="/admin/dashboard"
                                   className={
                                          "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                   }>
                                   Derniers résultats
                            </Link>
                            <a
                                   href="https://www.race-view.com/server?user_id=arcofine&server_id=F1%20Simulation"
                                   target="_blank"
                                   className={
                                          "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  "
                                   }
                                   rel="noreferrer">
                                   Live Timing (Alpha)
                            </a>
                            <Link
                                   href="/admin/rules"
                                   className={
                                          "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                   }>
                                   Règlements
                            </Link>
                     </div>
              </>
       );
};

export default IndexDropdown;
