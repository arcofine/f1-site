import React from "react";
import Link from "next/link";
import {createPopper} from "@popperjs/core";

const LivetimeDropdown = () => {
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
                                          offset: [0, -5],
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
                            Live Timing
                     </a>
                     <div
                            ref={popoverDropdownRef}
                            className={
                                   (dropdownPopoverShow ? "block " : "hidden ") +
                                   "bg-blueGray-200drop text-base z-50 float-left py-2 list-none text-left flex flex-row rounded shadow-lg min-w-48"
                            }>
                            {/* <div className="index-dropdown-separator">
                                   
                            </div> */}
                            <div>
                                   
                                   <a
                                          href="https://www.gt3sim.com/live/"
                                          target="_blank"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          rel="noreferrer">
                                         MultiClass
                                   </a>
                                    <a
                                          href="https://www.f1sim.ca/live/"
                                          target="_blank"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          rel="noreferrer">
                                         F1
                                   </a>
                                   <a
                                          href="https://f1-site-7m3.vercel.app/live/"
                                          target="_blank"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          rel="noreferrer">
                                         Porsche Cup
                                   </a>
                                   <a
                                          href="https://f1sim-wiget-m4.vercel.app/live/"
                                          target="_blank"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          rel="noreferrer">
                                         Nascar Truck
                                   </a>
                            </div>
                     </div>
                     <div>
                                  
                            </div>
              </>
       );
};

export default LivetimeDropdown;
