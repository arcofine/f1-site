import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
       const [navbarOpen, setNavbarOpen] = React.useState(false);
       return (
              <>
                     <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
                            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                   <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                          <Link href="/" className=" inline-block mr-4">
                                                 <img
                                                        className="absolute top-0"
                                                        src="/img/logoNoir.png"
                                                        alt="..."
                                                        width="90"
                                                 />
                                          </Link>
                                          <button
                                                 className="cursor-pointer text-xl leading-none px-3 py-1 border-transparent rounded bg-transparent block lg:hidden outline-none bg-blueGray-800 focus:outline-none"
                                                 type="button"
                                                 //  onClick={() => setNavbarOpen(!navbarOpen)}
                                          >
                                                 <Link
                                                        href="/admin/dashboard"
                                                        className={
                                                               "text-white text-md py-1 px-2 font-bold block w-full whitespace-nowrap bg-transparent "
                                                        }>
                                                        Tableau de Bord
                                                 </Link>
                                                 {/* <i className="fas fa-bars"></i> */}
                                          </button>
                                   </div>
                                   <div
                                          className={
                                                 "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                                                 (navbarOpen ? " block" : " hidden")
                                          }
                                          id="example-navbar-warning">
                                          <ul className="flex pl-12 flex-col lg:flex-row list-none mr-auto">
                                                 <li className="flex items-center text-white text-md py-1 px-2 font-bold block w-full whitespace-nowrap bg-transparent">
                                                        <p className="text-blueGray-400 text-sm "><a href="https://docs.google.com/forms/d/e/1FAIpQLScI0ZmnPd8oMjOKmcLS4_aB_PdhfywaxBL4APgXhPQvAS_F0g/viewform?fbclid=IwAR14mMCbXUsS913ePFINQ4AQvltepyqW3c-MRkrJBIANSRag2bnx8LMZdrw" target="_blank">INSCRIPTION</a></p>
                                                 </li>
                                                 <li className="flex items-center text-white text-md py-1 px-2 font-bold block w-full whitespace-nowrap bg-transparent">
                                                        <p className="text-blueGray-400 text-sm "><a href="#">CALENDRIER</a></p>
                                                 </li>
                                                 <li className="flex items-center text-white text-md py-1 px-2 font-bold block w-full whitespace-nowrap bg-transparent">
                                                        <p className="text-blueGray-400 text-sm "><a href="#">RÈGLEMENTS</a></p>
                                                 </li>
                                          </ul>
                                          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                                 <li className="flex items-center">
                                                        <IndexDropdown />
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
                                                               href="https://discord.gg/mQdNshB9"
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
              </>
       );
}
