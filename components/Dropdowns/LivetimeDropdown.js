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
                                          href="http://206.172.240.123:8773/championship/bafa71f1-8420-4dac-904f-bce72af95899?fbclid=IwY2xjawIcUJlleHRuA2FlbQIxMAABHcgIFT-uNmJ5FZyNSEukM9DhuypdWsE7PwFj0X1akw5sNO3BPrvAG2tp6Q_aem_n4D1S4OHaikraHBJsUXmCQ"
                                          target="_blank"
                                          className={
                                                 "hover:text-blueGray-500 text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent  "
                                          }
                                          rel="noreferrer">
                                         Porsche Cup
                                   </a>
                                   <a
                                          href="http://thirtheen-home.myddns.me:8803/live/"
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
