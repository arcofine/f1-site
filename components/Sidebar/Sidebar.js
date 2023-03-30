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
                                   <div className="lg:hidden md:hidden">
                                          <Link
                                                 href="/admin/tables"
                                                 className={
                                                        "text-xs uppercase py-1 font-bold block  " +
                                                        (router.pathname.indexOf("/admin/table") !== -1
                                                               ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                               : "text-blueGray-700 hover:text-blueGray-500")
                                                 }>
                                                 <i
                                                        className={
                                                               "fas fa-flag-checkered mr-2 text-sm " +
                                                               (router.pathname.indexOf("/admin/table") !== -1
                                                                      ? "opacity-75"
                                                                      : "text-blueGray-300")
                                                        }></i>{" "}
                                                 Classements
                                          </Link>
                                          <Link
                                                 href="/admin/dashboard"
                                                 className={
                                                        "text-xs uppercase py-1 font-bold block " +
                                                        (router.pathname.indexOf("/admin/dashboard") !== -1
                                                               ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                               : "text-blueGray-700 hover:text-blueGray-500")
                                                 }>
                                                 <i
                                                        className={
                                                               "fas fa-poll mr-2 text-sm " +
                                                               (router.pathname.indexOf("/admin/dashboard") !== -1
                                                                      ? "opacity-75"
                                                                      : "text-blueGray-300")
                                                        }></i>{" "}
                                                 Derniers Résultats
                                          </Link>
                                          <a
                                                 href="https://www.race-view.com/server?user_id=arcofine&server_id=F1%20Simulation"
                                                 target="_blank"
                                                 className={"text-xs uppercase py-1 font-bold block "}
                                                 rel="noreferrer">
                                                 <i className={"fas fa-tools mr-2 text-sm "}></i> Live Timing (Alpha)
                                          </a>

                                          <Link
                                                 href="/admin/rules"
                                                 className={
                                                        "text-xs uppercase py-1 font-bold block " +
                                                        (router.pathname.indexOf("/admin/rules") !== -1
                                                               ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                               : "text-blueGray-700 hover:text-blueGray-500")
                                                 }>
                                                 <i
                                                        className={
                                                               "fas fa-book mr-2 text-sm " +
                                                               (router.pathname.indexOf("/admin/rules") !== -1
                                                                      ? "opacity-75"
                                                                      : "text-blueGray-300")
                                                        }></i>{" "}
                                                 Règlements
                                          </Link>
                                   </div>
                                   {/* Collapse */}
                                   <div
                                          className={
                                                 "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                                                 collapseShow
                                          }>
                                          {/* Divider */}
                                          <hr className="my-4 md:min-w-full" />
                                          {/* Heading */}
                                          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                                 Tableau de bord
                                          </h6>
                                          {/* Navigation */}

                                          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/tables"
                                                               className={
                                                                      "text-xs uppercase py-3 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/table") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-flag-checkered mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/table"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>{" "}
                                                               Classements
                                                        </Link>
                                                 </li>

                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/dashboard"
                                                               className={
                                                                      "text-xs uppercase py-3 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/dashboard") !==
                                                                      -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-poll mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/dashboard"
                                                                             ) !== -1
                                                                                    ? "opacity-75"
                                                                                    : "text-blueGray-300")
                                                                      }></i>{" "}
                                                               Derniers Résultats
                                                        </Link>
                                                 </li>
                                                 <li className="items-center">
                                                        <a
                                                               href="https://www.race-view.com/server?user_id=arcofine&server_id=F1%20Simulation"
                                                               target="_blank"
                                                               className={"text-xs uppercase py-3 font-bold block "}>
                                                               <i className={"fas fa-tools mr-2 text-sm "}></i> Live
                                                               Timing (Alpha)
                                                        </a>
                                                 </li>
                                                 <li className="items-center">
                                                        <Link
                                                               href="/admin/rules"
                                                               className={
                                                                      "text-xs uppercase py-3 font-bold block " +
                                                                      (router.pathname.indexOf("/admin/rules") !== -1
                                                                             ? "text-lightBlue-500 hover:text-lightBlue-600"
                                                                             : "text-blueGray-700 hover:text-blueGray-500")
                                                               }>
                                                               <i
                                                                      className={
                                                                             "fas fa-book mr-2 text-sm " +
                                                                             (router.pathname.indexOf(
                                                                                    "/admin/rules"
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
