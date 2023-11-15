import React from "react";
import Link from "next/link";
import Script from "next/script";
import SubscribeDropdown from "../Dropdowns/SubscribeDropdown";
import LivetimeDropdown from "../Dropdowns/LivetimeDropdown"

// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
       const [navbarOpen, setNavbarOpen] = React.useState(false);
       return (
              <>
                     <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></Script>
                     <Script src="/donate.js"></Script>
                     <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
                            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                   <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                          <Link href="/" className=" inline-block mr-4 lg:hidden sm:hidden">
                                                 <img
                                                        className="absolute top-0"
                                                        src="/img/logoNoir.png"
                                                        alt="..."
                                                        width="50"
                                                 />
                                          </Link>
                                          <Link href="/" className="xs:hidden  inline-block mr-4">
                                                 <img
                                                        className="absolute top-0"
                                                        src="/img/logoNoir.png"
                                                        alt="..."
                                                        width="90"
                                                 />
                                          </Link>
                                          <div className="flex ">
                                                 <button
                                                        className="cursor-pointer text-xl leading-none px-2 py-0 mr-2 border-transparent rounded bg-transparent block lg:hidden outline-none bg-red-400 text-blueGray-100 focus:outline-none"
                                                        type="button"
                                                        //  onClick={() => setNavbarOpen(!navbarOpen)}
                                                 >
                                                        <SubscribeDropdown />
                                                 </button>
                                                 <button
                                                        className="cursor-pointer text-xl leading-none px-2 py-0 border-transparent rounded bg-transparent block lg:hidden outline-none bg-blueGray-900 focus:outline-none"
                                                        type="button"
                                                        //  onClick={() => setNavbarOpen(!navbarOpen)}
                                                 >
                                                        {/* <Link
                                                        href="/admin/dashboard"
                                                        className={
                                                               "text-white text-md py-1 px-2 font-bold block w-full whitespace-nowrap bg-transparent "
                                                        }>
                                                        Tableau de Bord
                                                 </Link> */}
                                                        <IndexDropdown />
                                                        {/* <i className="fas fa-bars"></i> */}
                                                 </button>
                                          </div>
                                   </div>
                                   <div
                                          className={
                                                 "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                                                 (navbarOpen ? " block" : " hidden")
                                          }
                                          id="example-navbar-warning">
                                          
                                          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                                 <li className="flex items-center text-red-500">
                                                        <SubscribeDropdown />
                                                 </li>
                                                 <li className="flex items-center">
                                                        <IndexDropdown />
                                                 </li>
                                                 <li className="flex items-center">
                                                        <LivetimeDropdown />
                                                 </li>
                                                 <li className="flex items-center lg:block"></li>
                                                 <li className="flex items-center">
                                                        <a
                                                               className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                                               href="https://www.facebook.com/groups/f1sim/"
                                                               target="_blank"
                                                               rel="noreferrer">
                                                               <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                                                               <span className="lg:hidden inline-block ml-2">
                                                                      Share
                                                               </span>
                                                        </a>
                                                 </li>

                                                 <li className="flex items-center">
                                                        <a
                                                               className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                                               href="https://discord.gg/FHuMrCcTCS"
                                                               target="_blank"
                                                               rel="noreferrer">
                                                               <i className="text-blueGray-400 fab fa-discord text-lg leading-lg " />
                                                               <span className="lg:hidden inline-block ml-2">
                                                                      Discord
                                                               </span>
                                                        </a>
                                                 </li>
                                                 {/* <li className="flex items-center">
                                                        <a
                                                               href="https://www.simracinghub.com"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                                               <img
                                                                      alt=""
                                                                      width="100"
                                                                      src="https://www.simracinghub.com/images/SimRacingHub_2018_banner.png"
                                                               />
                                                        </a>
                                                 </li> */}
                                                 <li>
                                                        <p className="flex-auto ml-0">
                                                               <span
                                                                      className="text-blueGray-200
                                                                                                  text-center
                                                                                                  inline-flex
                                                                                                  items-center
                                                                                                  justify-center
                                                                                                  w-1
                                                                                                  px-12
                                                                                                  h-6
                                                                                                  mb-0

                                                                                                  mt-3
                                                                                                  shadow-lg
                                                                                                  rounded-full
                                                                                                  text-sm
                                                                                                  font-bold
                                                                                                  bg-red-500
                                                                                                 ">
                                                                      BETA
                                                               </span>
                                                        </p>
                                                 </li>
                                                 {/* <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
                                          </ul>
                                   </div>
                            </div>
                     </nav>
                     <nav className="lg:top-68-px xs:top-56-px sm:top-56-px md:top-56-px  fixed z-40 w-full flex flex-wrap items-end justify-end xs:px-6 px-12 py-1 navbar-expand-lg bg-gray-f1 shadow">
                            <div className={" top-0 -mt-4 py-2 mx-4 xs:hidden "}>
                                   <form action="https://www.paypal.com/donate" method="post" target="_top">
                                          <input type="hidden" name="hosted_button_id" value="B2DJ9MA4VQMPJ" />
                                          <input
                                                 type="image"
                                                 src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                                                 border="0"
                                                 name="submit"
                                                 title="PayPal - The safer, easier way to pay online!"
                                                 alt="Donate with PayPal button"
                                          />
                                          <img
                                                 alt=""
                                                 border="0"
                                                 src="https://www.paypal.com/en_CA/i/scr/pixel.gif"
                                                 width="1"
                                                 height="1"
                                          />
                                   </form>
                            </div>
                            <div
                                   id="lr-servers"
                                   orientation="horizontal"
                                   theme="dark"
                                   className={
                                          "relative flex flex-col min-w-0 break-words w-10/12 mb-6 shadow-lg rounded "
                                   }></div>
                     </nav>
              </>
       );
}
