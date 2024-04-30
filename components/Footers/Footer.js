import React from "react";
import Script from "next/script";

export default function Footer() {
       const unique_id = new Date().getTime();
       return (
              <>
              {/* <Script src={`../livetiming/js/api_tool.js?v=${unique_id}` } type="module"/> */}
                     <footer className="relative bg-blueGray-200 pt-8 pb-6">
         
                            <div
                                   className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                                   style={{transform: "translateZ(0)"}}>
                                   <svg
                                          className="absolute bottom-0 overflow-hidden"
                                          xmlns="http://www.w3.org/2000/svg"
                                          preserveAspectRatio="none"
                                          version="1.1"
                                          viewBox="0 0 2560 100"
                                          x="0"
                                          y="0">
                                          <polygon
                                                 className="text-blueGray-200 fill-current"
                                                 points="2560 0 2560 100 0 100"></polygon>
                                   </svg>
                            </div>
                            <div id="widgetF1sim"></div>
                            <div className="container mx-auto px-4" style={{padding: "18px 10vw"}}>
                                   <div className="flex flex-wrap items-center justify-center">
                                          <div className="flex flex-col mx-auto items-center justify-center">
                                                 <h2 className="text-md text-blueGray-500 font-semibold mb-2">
                                                        Merci à tous nos commanditaires
                                                 </h2>
                                                 <div className="flex flex-wrap mx-auto items-center justify-center mb-5">
                                                        <a
                                                               href="https://xelaconseil.ca/"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/2 px-2 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/xelalogo-white.png" />
                                                        </a>
                                                        <a
                                                               href="https://jimexs.com/"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/2 px-3 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/logo_jimexs-white.png" />
                                                        </a>
                                                        <a
                                                               href="https://www.maxiroule.ca/"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/2 px-12 xs:px-3 xs:py-6 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/logo_maxi_bw-white.png" />
                                                        </a>
                                                        <a
                                                               href="https://www.roquemont.com/"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/5 xs:w-1/2 px-12 xs:px-3 xs:py-6 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" height="300" src="/img/logo_roquemont.png" />
                                                        </a>
                                                 </div>
                                                 </div>
                                                 <div className="flex flex-wrap mx-auto items-center justify-center mb-5">
                                                         <a
                                                               href="https://www.canevaschambly.com/"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/2 px-12 xs:px-3 xs:py-6 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/canevas-white.png" />
                                                        </a>
                                                        <a
                                                               href="https://www.emballagesbnc.ca"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/2 px-3 xs:px-2 xs:py-6 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/logo_bnc.png" />
                                                        </a>
                                                         <a
                                                               href="https://coffragesbouchard.com"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/2 px-3 xs:px-2 xs:py-6 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/logo_coffrageBW.png" />
                                                        </a>
                                                        <a
                                                               href="https://www.solotech.com/"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/4 xs:w-1/3 px-3 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img alt="" src="/img/solotech-white.png" />
                                                        </a>
                                                        
                                                 <div className="flex flex-wrap mx-auto items-center justify-center">
                                                        <a
                                                               href="https://www.simracinghub.com"
                                                               target="_blank"
                                                               title=""
                                                               className="hover:text-blueGray-500 text-blueGray-700 w-1/5 xs:w-1/3 px-3 flex items-center text-xs uppercase font-bold"
                                                               rel="noreferrer">
                                                               <img
                                                                      alt=""
                                                                      src="https://www.simracinghub.com/images/SimRacingHub_2018_banner.png"
                                                               />
                                                        </a>
                                                 </div>
                                          </div>
                                          <div className="w-full lg:hidden lg:w-6/12 px-4 flex flex-wrap items-center justify-center">
                                                 <div className="mt-6 lg:mb-0 mb-6">
                                                        <button
                                                               className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                               type="button">
                                                               <a
                                                                      className=""
                                                                      href="https://www.facebook.com/groups/f1simulation"
                                                                      target="_blank"
                                                                      rel="noreferrer">
                                                                      <i className="fab fa-facebook-square text-lg leading-lg " />
                                                               </a>
                                                        </button>
                                                        <button
                                                               className="bg-white text-indigo-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                               type="button">
                                                               <a
                                                                      href="https://discord.gg/mQdNshB9"
                                                                      target="_blank"
                                                                      rel="noreferrer">
                                                                      <i className="fab fa-discord text-lg leading-lg"></i>
                                                               </a>
                                                        </button>
                                                 </div>
                                          </div>
                                   </div>
                                   <hr className="my-6 border-blueGray-300" />
                                   <div className="flex flex-wrap items-center md:justify-between justify-center">
                                          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                                 <div className="text-sm text-blueGray-500 font-semibold py-1">
                                                        Copyright © {new Date().getFullYear()} F1 Simulation
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </footer>
              </>
       );
}
