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
              });
              setDropdownPopoverShow(true);
       };
       const closeDropdownPopover = () => {
              setDropdownPopoverShow(false);
       };
       return (
              <>
                     <a
                            className="hover:text-blueGray-500 text-blueGray-300 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
                            <Link href="/admin/tables">
                                   <a
                                          href="#pablo"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                          }>
                                          Classements
                                   </a>
                            </Link>
                            {/* <Link href="/admin/settings">
                                   <a
                                          href="#pablo"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                          }>
                                          Statistiques des pilotes
                                   </a>
                            </Link> */}
                            <Link href="/admin/dashboard">
                                   <a
                                          href="#pablo"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                          }>
                                          Derniers résultats
                                   </a>
                            </Link>
                     </div>
              </>
       );
};

export default IndexDropdown;
