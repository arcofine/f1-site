import React from "react";
import Link from "next/link";
import {createPopper} from "@popperjs/core";

const SubscribeDropdown = () => {
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
                            className="hover:text-blueGray-500  px-2 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#pablo"
                            ref={btnDropdownRef}
                            onClick={(e) => {
                                   e.preventDefault();
                                   dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                            }}>
                            INSCRIPTION
                     </a>
                     <div
                            ref={popoverDropdownRef}
                            className={
                                   (dropdownPopoverShow ? "block " : "hidden ") +
                                   "bg-blueGray-200 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                            }>
                            <p className="text-blueGray-800 text-sm ">
                                   <a
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          href="https://docs.google.com/forms/d/e/1FAIpQLScI0ZmnPd8oMjOKmcLS4_aB_PdhfywaxBL4APgXhPQvAS_F0g/viewform?fbclid=IwAR14mMCbXUsS913ePFINQ4AQvltepyqW3c-MRkrJBIANSRag2bnx8LMZdrw"
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          Championnat - F1
                                   </a>
                            </p>
                            <p className="text-blueGray-800 text-sm ">
                                   <a
                                          className={
                                                 "hover:text-orange-500 text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          href="https://forms.gle/D6Nq9RG8wcsh6ruv6"
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          Championnat - GT3
                                   </a>
                            </p>
                     </div>
              </>
       );
};

export default SubscribeDropdown;
