import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import LivetimeDropdown from "../Dropdowns/LivetimeDropdown"
import IndexDropdown from "../Dropdowns/IndexDropdown.js";

export default function Sidebar() {
       const [collapseShow] = React.useState("hidden");
       const router = useRouter();
       return (
              <>
                     <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                                   {/* Brand */}
                                   <div>
                                          <Link
                                                 href="/"
                                                 className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                                                 <i className="fas fa-arrow-circle-left"></i> retour
                                          </Link>
                                   </div>
                                   <div className="lg:hidden md:hidden flex flex-row">
                                   <button className="cursor-pointer text-xl leading-none px-2 py-0 mr-2 border-transparent rounded bg-transparent block lg:hidden outline-none bg-blueGray-900 focus:outline-none"
                                                        type="button">
                                          <IndexDropdown cat="Catégories"/>
                                          </button>
                                          {/* <LivetimeDropdown /> */}

                                          {/* <div className="mr-4">
                                                 <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-red-500 no-underline">
                                                        F1
                                                 </h5>
                                                 <Link
                                                        href="/admin/tablesF1"
                                                        className={
                                                               "text-xs uppercase py-1 font-bold block  " +
                                                               (router.pathname.indexOf("/admin/tablesF1") !== -1
                                                                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                      : "text-blueGray-700 hover:text-blueGray-500")
                                                        }>
                                                        <i
                                                               className={
                                                                      "fas fa-flag-checkered mr-2 text-sm " +
                                                                      (router.pathname.indexOf("/admin/tablesF1") !== -1
                                                                             ? "opacity-75"
                                                                             : "text-blueGray-300")
                                                               }></i>
                                                        Classements
                                                 </Link>
                                                 <Link
                                                        href="/admin/dashboardF1"
                                                        className={
                                                               "text-xs uppercase py-1 font-bold block " +
                                                               (router.pathname.indexOf("/admin/dashboardF1") !== -1
                                                                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                      : "text-blueGray-700 hover:text-blueGray-500")
                                                        }>
                                                        <i
                                                               className={
                                                                      "fas fa-poll mr-2 text-sm " +
                                                                      (router.pathname.indexOf("/admin/dashboardF1") !==
                                                                      -1
                                                                             ? "opacity-75"
                                                                             : "text-blueGray-300")
                                                               }></i>
                                                        Derniers Résultats
                                                 </Link>

                                                 <Link
                                                        href="/admin/rulesF1"
                                                        className={
                                                               "text-xs uppercase py-1 font-bold block " +
                                                               (router.pathname.indexOf("/admin/rulesF1") !== -1
                                                                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                      : "text-blueGray-700 hover:text-blueGray-500")
                                                        }>
                                                        <i
                                                               className={
                                                                      "fas fa-book mr-2 text-sm " +
                                                                      (router.pathname.indexOf("/admin/rulesF1") !== -1
                                                                             ? "opacity-75"
                                                                             : "text-blueGray-300")
                                                               }></i>
                                                        Règlements
                                                 </Link>
                                          </div>
                                          <div className="mr-4">
                                                 <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-blueGray-700 no-underline">
                                                        GT3 PRO/AM
                                                 </h5>
                                                 <Link
                                                        href="/admin/tablesGt"
                                                        className={
                                                               "text-xs uppercase py-1 font-bold block  " +
                                                               (router.pathname.indexOf("/admin/tablesGt") !== -1
                                                                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                      : "text-blueGray-700 hover:text-blueGray-500")
                                                        }>
                                                        <i
                                                               className={
                                                                      "fas fa-flag-checkered mr-2 text-sm " +
                                                                      (router.pathname.indexOf("/admin/tablesGt") !== -1
                                                                             ? "opacity-75"
                                                                             : "text-blueGray-300")
                                                               }></i>
                                                        Classements
                                                 </Link>

                                                 <a
                                                        href="https://www.gt3sim.com/admin/dashboardGt"
                                                        target="_self"
                                                        className={"text-xs uppercase py-1 font-bold block "}>
                                                        <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                        Résultats
                                                 </a>

                                                 <Link
                                                        href="/admin/rulesGt"
                                                        className={
                                                               "text-xs uppercase py-1 font-bold block " +
                                                               (router.pathname.indexOf("/admin/rulesGt") !== -1
                                                                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                      : "text-blueGray-700 hover:text-blueGray-500")
                                                        }>
                                                        <i
                                                               className={
                                                                      "fas fa-book mr-2 text-sm " +
                                                                      (router.pathname.indexOf("/admin/rulesGt") !== -1
                                                                             ? "opacity-75"
                                                                             : "text-blueGray-300")
                                                               }></i>
                                                        Règlements
                                                 </Link>
                                          </div>
                                          <div>
                                                 <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-blueGray-700 no-underline" style={{backgroundColor:"black", color:"white"}}>
                                                        LIVE TIMING
                                                 </h5>
                                                 <a
                                                        href="https://www.gt3sim.com/live/"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-tools mr-2 text-sm "}></i> Serveur Main 1
                                                 </a>

                                                 <a
                                                        href="https://www.f1sim.ca/live/"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-tools mr-2 text-sm "}></i> Serveur Main 2
                                                 </a>

                                                  <a
                                                        href="http://thirtheen-home.myddns.me:8802/live/"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-tools mr-2 text-sm "}></i> Serveur Main 3
                                                 </a>
                                                 <a
                                                        href="http://thirtheen-home.myddns.me:8803/live/"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-tools mr-2 text-sm "}></i> Serveur Main 4
                                                 </a>
                                          </div> */}
                                   </div>
                                   {/* Collapse */}
                                   <div
                                          className={
                                                 "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                                                 collapseShow
                                          }>
                                          {/* Form */}
                                          <form className="mt-6 mb-4 md:hidden">
                                                 <div className="mb-3 pt-0">
                                                        <input
                                                               type="text"
                                                               placeholder="Search"
                                                               className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                                        />
                                                 </div>
                                          </form>

                                          {/* Divider */}
                                          <hr className="my-4 md:min-w-full" />
                                          {/* Heading */}
                                          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                                 Categories
                                          </h6>
                                          {/* Navigation */}
                                          <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-red-500 no-underline">
                                                 F1
                                          </h5>
                                          <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/tablesF1"
                                                               className={
                                                                      "text-xs uppercase pt-2 pb-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/tablesF1") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-flag-checkered mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/tablesF1"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Classements
                                                        </Link>
                                                 </li>

                                                 <li className="items-center">
                                                        {/* <a
                                                               href="http://thirtheen-home.myddns.me:8802/championships/championship?cid=1"
                                                               target="_blank"
                                                               className={"text-xs uppercase py-1 font-bold block "}
                                                               rel="noreferrer">
                                                               <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                               Résultats
                                                        </a> */}
                                                        <Link
                                                               href="/admin/dashboardF1"
                                                               className={
                                                                      "text-xs uppercase py-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/dashboardF1") !==
                                                                      -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-poll mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/dashboardF1"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Derniers Résultats
                                                        </Link>
                                                 </li>
                                                 {/* <li className="items-center">
                                                        <a
                                                               href="https://www.race-view.com/server?user_id=arcofine&server_id=F1%20Simulation"
                                                               target="_blank"
                                                               rel="noreferrer"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-tools mr-2 text-sm "}></i> Live
                                                               Timing (Alpha)
                                                        </a>
                                                 </li> */}
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/rulesF1"
                                                               className={
                                                                      "text-xs uppercase py-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/rulesF1") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-book mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/rulesF1"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Règlements
                                                        </Link>
                                                 </li>
                                          </ul>
                                          <hr className="mt-3 mb-36" />
                                          <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-blueGray-700 no-underline">
                                                 GT3 PRO/AM
                                          </h5>
                                          <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/tablesGt"
                                                               className={
                                                                      "text-xs uppercase pt-2 pb-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/tablesGt") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-flag-checkered mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/tablesGt"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Classements
                                                        </Link>
                                                 </li>

                                                 <li className="items-center">
                                                        <a
                                                               href="https://www.gt3sim.com/admin/dashboardGt"
                                                               target="_self"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                               Résultats
                                                        </a>
                                                 </li>
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/rulesGt"
                                                               className={
                                                                      "text-xs uppercase py-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/rulesGt") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-book mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/rulesGt"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Règlements
                                                        </Link>
                                                 </li>
                                          </ul>
<hr className="mt-3 mb-36" />
<h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-teal-500 no-underline">
                                                 Rally
                                          </h5>
                                          <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/tablesRally"
                                                               className={
                                                                      "text-xs uppercase pt-2 pb-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/tablesRally") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-flag-checkered mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/tablesRally"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Classements
                                                        </Link>
                                                 </li>

                                                 
                                                 {/* <li className="items-center">
                                                        <Link
                                                               href="/admin/rulesGt"
                                                               className={
                                                                      "text-xs uppercase py-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/rulesGt") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-book mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/rulesGt"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Règlements
                                                        </Link>
                                                 </li> */}
                                          </ul>
                                           <hr className="mt-3 mb-36" />
                                          <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-yellow-500 no-underline">
                                                 Porsche Cup
                                          </h5>
                                          <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/tablesPorsche"
                                                               className={
                                                                      "text-xs uppercase pt-2 pb-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/tablesPorsche") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-flag-checkered mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/tablesPorsche"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>
                                                               Classements
                                                        </Link>
                                                 </li>
                                                 <li className="items-center">
                                                        <a
                                                               href="https://f1-site-7m3.vercel.app/championships/championship?cid=4"
                                                               target="_blank"
                                                               rel="noreferrer"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                               Résultats
                                                        </a>
                                                 </li>                         
                                                 
                                                 
                                          </ul>
                                           <hr className="mt-3 mb-36" />
                                          <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-blueGray-700 no-underline">
                                                 LIVE TIMING
                                          </h5>
                                          <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
                                                 <li className="items-center">
                                                        <a
                                                               href="https://f1sim-wiget-m4.vercel.app/live/"
                                                               target="_blank"
                                                               rel="noreferrer"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-tools mr-2 text-sm "}></i> Live
                                                              SSC - Race 1
                                                        </a>
                                                 </li>
                                                 <li className="items-center">
                                                        <a
                                                               href="https://f1-site-7m3.vercel.app/live/"
                                                               target="_blank"
                                                               rel="noreferrer"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-tools mr-2 text-sm "}></i> Live
                                                              SSC - Race 2
                                                        </a>
                                                 </li>
                                          </ul>                            
                                   </div>
                            </div>
                     </nav>
              </>
       );
}
