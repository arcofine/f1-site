import React from "react";
import Link from "next/link";
import Script from "next/script";
import SubscribeDropdown from "../Dropdowns/SubscribeDropdown";
import LivetimeDropdown from "../Dropdowns/LivetimeDropdown"

// components

import IndexDropdown from "../Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
       const [navbarOpen, setNavbarOpen] = React.useState(false);
       return (
              <>
                     <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></Script>
                     <Script src="/donate.js"></Script>
                     <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
                            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                                   <div className="w-full relative flex justify-between  lg:justify-start">
                                          <Link href="/" className="relative logo-50 inline-block mr-4 lg:hidden md:hidden">
                                                 <img
                                                        className="absolute top-0"
                                                        src="/img/logoNoir.png"
                                                        alt="..."
                                                        width="50"
                                                 />
                                          </Link>
                                          <Link href="/" className="relative logo-90 xs:hidden sm:hidden inline-block mr-4">
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
                                                        className="cursor-pointer text-xl leading-none px-2 py-0 mr-2 border-transparent rounded bg-transparent block lg:hidden outline-none bg-blueGray-900 focus:outline-none"
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
                                                        <LivetimeDropdown />
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
                                                               href="https://www.facebook.com/groups/f1simulation"
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
                                          </ul>
                                   </div>
                            </div>
                     </nav>
                     <nav className="lg:top-68-px xs:top-75-px sm:top-75-px md:top-75-px  fixed z-40 w-full flex flex-col flex-wrap items-end justify-end xs:px-6 px-12 py-1 navbar-expand-lg bg-gray-f1 shadow">
                     {/* <div className="flex flex-col mx-auto items-center justify-center mt-2 mb-2">
                                                 <form
                                                        action="https://www.paypal.com/donate"
                                                        method="post"
                                                        target="_top">
                                                        <input
                                                               type="hidden"
                                                               name="hosted_button_id"
                                                               value="B2DJ9MA4VQMPJ"
                                                        />
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
                                          </div> */}
                     <div className="flex flex-col mx-auto items-center justify-center mt-2 mb-2">
                                          <a
                            className="text-blueGray-300
                                          text-center
                                          inline-flex
                                          items-center
                                          justify-center
                                          w-full
                                          px-12
                                          h-14
                                          mb-0
                                          shadow-lg
                                          text-base
                                          font-bold
                                          border-2
                                          hover:text-blueGray-500
                                          roboto
                                          "
                            href="https://discord.gg/FHuMrCcTCS"
                            target="_blank"
                            rel="noreferrer">
                                   CLIQUEZ ICI POUR JOINDRE NOTRE COMMUNAUTÉ
                     </a>
                                   </div>
                            {/* <div className={"top-0 -mt-4 py-2 mx-4"}>
                            <form
                                                        action="https://www.paypal.com/donate"
                                                        method="post"
                                                        target="_top">
                                                        <input
                                                               type="hidden"
                                                               name="hosted_button_id"
                                                               value="B2DJ9MA4VQMPJ"
                                                        />
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
                            </div> */}
                            
                     </nav>
              </>
       );
}
