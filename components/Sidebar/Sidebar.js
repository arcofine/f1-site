import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
       const [collapseShow, setCollapseShow] = React.useState("hidden");
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
                                          <div className="mr-4">
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
                                                               }></i>{" "}
                                                        Classements
                                                 </Link>
                                                 {/* <Link
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
                                                               }></i>{" "}
                                                        Derniers Résultats
                                                 </Link> */}
                                                 <a
                                                        href="http://thirtheen-home.myddns.me:8802/championships/championship?cid=1"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                        Résultats
                                                 </a>
                                                 <a
                                                        href="https://f1sim.liveracers.com/Live?server=F1%20Simulation%20-%202023"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-tools mr-2 text-sm "}></i> Live Timing
                                                        (Alpha)
                                                 </a>

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
                                                               }></i>{" "}
                                                        Règlements
                                                 </Link>
                                          </div>
                                          <div>
                                                 <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-blueGray-700 no-underline">
                                                        GT-3
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
                                                               }></i>{" "}
                                                        Classements
                                                 </Link>

                                                 <a
                                                        href="http://thirtheen-home.myddns.me:8804/championships/championship?cid=1"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                        Résultats
                                                 </a>
                                                 <a
                                                        href="https://f1simcanada-gt3.liveracers.com/Live/?server=F1%20Simulation%20GT3%20-%202023"
                                                        target="_blank"
                                                        className={"text-xs uppercase py-1 font-bold block "}
                                                        rel="noreferrer">
                                                        <i className={"fas fa-tools mr-2 text-sm "}></i> Live Timing
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
                                                               }></i>{" "}
                                                        Règlements
                                                 </Link>
                                          </div>
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
                                                 Tableau de bord
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
                                                                      }></i>{" "}
                                                               Classements
                                                        </Link>
                                                 </li>

                                                 {/* <li className="items-center">
                                                        <Link href="/admin/settings">
                                                               <a
                                                                      href="#pablo"
                                                                      className={
                                                                             "text-xs uppercase py-3 font-bold block " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/settings"
                                                                             ) !== -1
                                                                                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                                                      }>
                                                                      <i
                                                                             className={
                                                                                    "fas fa-tools mr-2 text-sm " +
                                                                                    (router.pathname.indexOf(
                                                                                           "/admin/settings"
                                                                                    ) !== -1
                                                                                           ? "opacity-75"
                                                                                           : "text-blueGray-300")
                                                                             }></i>{" "}
                                                                      Statistiques de Pilotes
                                                               </a>
                                                        </Link>
                                                 </li> */}

                                                 <li className="items-center">
                                                        <a
                                                               href="http://thirtheen-home.myddns.me:8802/championships/championship?cid=1"
                                                               target="_blank"
                                                               className={"text-xs uppercase py-1 font-bold block "}
                                                               rel="noreferrer">
                                                               <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                               Résultats
                                                        </a>
                                                        {/* <Link
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
                                                                      }></i>{" "}
                                                               Derniers Résultats
                                                        </Link> */}
                                                 </li>
                                                 <li className="items-center">
                                                        <a
                                                               href="https://f1sim.liveracers.com/Live?server=F1%20Simulation%20-%202023"
                                                               target="_blank"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-tools mr-2 text-sm "}></i> Live
                                                               Timing (Alpha)
                                                        </a>
                                                 </li>
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
                                                                      }></i>{" "}
                                                               Règlements
                                                        </Link>
                                                 </li>
                                          </ul>
                                          <hr className="mt-3 mb-36" />
                                          <h5 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block p-1 bg-blueGray-700 no-underline">
                                                 GT-3
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
                                                                      }></i>{" "}
                                                               Classements
                                                        </Link>
                                                 </li>

                                                 <li className="items-center">
                                                        <a
                                                               // href="http://thirtheen-home.myddns.me:8804/championships/championship?cid=1"
                                                               target="_blank"
                                                               className={"text-xs uppercase py-1 font-bold block "}
                                                               rel="noreferrer">
                                                               <i className={"fas fa-poll mr-2 text-sm "}></i> Derniers
                                                               Résultats
                                                        </a>
                                                        <Link
                                                               href="/admin/dashboardGt"
                                                               className={
                                                                      "text-xs uppercase py-1 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/dashboardGt") !==
                                                                      -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-poll mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/dashboardGt"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>{" "}
                                                               Derniers Résultats
                                                        </Link>
                                                 </li>
                                                 <li className="items-center">
                                                        <a
                                                               href="https://f1simcanada-gt3.liveracers.com/Live/?server=F1%20Simulation%20GT3%20-%202023"
                                                               target="_blank"
                                                               className={"text-xs uppercase py-1 font-bold block "}>
                                                               <i className={"fas fa-tools mr-2 text-sm "}></i> Live
                                                               Timing (Alpha)
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
                                                                      }></i>{" "}
                                                               Règlements
                                                        </Link>
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </nav>
              </>
       );
}
