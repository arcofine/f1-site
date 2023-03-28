/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef} from "react";
import Link from "next/link";
import Script from "next/script";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
       const unique_id = new Date().getTime();

       return (
              <>
                     <Script src={`/liveracers.js?v=${unique_id}`} />
                     <IndexNavbar fixed />
                     {/* <section>
                            <div className="w-full lg:w-4/12 px-4 ">
                                   
                            </div>
                     </section> */}
                     <section
                            style={{
                                   backgroundImage: "url('/img/backgrounds/bg-02.jpg')",
                            }}
                            className="relative pt-36 items-center flex flex-col xs:h-600-px h-800-px  bg-slate-900 bg-no-repeat bg-left bg-cover">
                            <div className="w-full h-full bg-blueGray-900 absolute opacity-80 z-0 top-0"></div>
                            {/* <div
                                   className={
                                          "container items-right justify-items-end justify-end relative z-3 flex -mt-12 mb-6  "
                                   }>
                                   <div id="lr-servers" orientation="horizontal"></div>
                            </div> */}
                            <div className=" container w-11/12 mx-auto items-center flex flex-wrap z-2">
                                   <div className=" mx-auto items-center absolute flex flex-wrap z-2"></div>
                                   <div className="w-full relative px-0">
                                          <a
                                                 href="https://docs.google.com/forms/d/e/1FAIpQLScI0ZmnPd8oMjOKmcLS4_aB_PdhfywaxBL4APgXhPQvAS_F0g/viewform?fbclid=IwAR14mMCbXUsS913ePFINQ4AQvltepyqW3c-MRkrJBIANSRag2bnx8LMZdrw"
                                                 target="_blank"
                                                 className="z-3 get-started text-center absolute w-full text-white font-bold px-2
                                                  py-2 xs:py-0 outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                                 CLIQUE ICI POUR T'INSCRIRE MAINTENANT!
                                          </a>

                                          <iframe
                                                 width="100%"
                                                 height="500"
                                                 src="https://www.youtube.com/embed/obnuOHQoo78?loop=1&autoplay=1&playlist=obnuOHQoo78"
                                                 // title="YouTube video player"
                                                 frameborder="0"
                                                 allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                 allowfullscreen></iframe>

                                          {/* <a
                                                 href="https://www.simracinghub.com"
                                                 title=""
                                                 className="z-2 absolute top-95-px lg:hidden b-auto mb-10">
                                                 <img
                                                        alt=""
                                                        width="100"
                                                        src="https://www.simracinghub.com/images/SimRacingHub_2018_banner.png"
                                                 />
                                          </a>
                                          <div className="pt-32 sm:pt-0">
                                                 <h2 className="font-semibold text-6xl text-blueGray-200">
                                                        Ligue de Simulation F1
                                                 </h2>
                                                 <h4 className="mt-4 text-5xl leading-relaxed text-blueGray-200">
                                                        Saison complète
                                                 </h4>
                                                 <h4 className="mt-0 text-6xl text-blueGray-200">Réalisme</h4>
                                                 <h4 className="mt-1 text-5xl leading-relaxed text-blueGray-200">
                                                        Compétition
                                                 </h4>
                                                 <div className="mt-12">
                                                        <a
                                                               href="https://docs.google.com/forms/d/e/1FAIpQLScI0ZmnPd8oMjOKmcLS4_aB_PdhfywaxBL4APgXhPQvAS_F0g/viewform?fbclid=IwAR14mMCbXUsS913ePFINQ4AQvltepyqW3c-MRkrJBIANSRag2bnx8LMZdrw"
                                                               target="_blank"
                                                               className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                                               Inscris-toi!
                                                        </a>
                                                 </div>
                                          </div> */}
                                   </div>
                            </div>
                            {/* <img
                                   className="absolute top-0 b-auto right-0 pt-16 xs:w-5/12 -mt-48 sm:mt-0 w-8/12 xs:logo-pos max-h-860-px"
                                   src="/img/logoNoir.png"
                                   alt="..."
                            /> */}

                            {/* <section className="mt-28 md:mt-20 pb-16 z-3 relative bg-blueGray-400">
                                   <div
                                          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                                                        className="text-blueGray-400 fill-current"
                                                        points="2560 0 2560 100 0 100"></polygon>
                                          </svg>
                                   </div>
                            </section> */}
                     </section>

                     <Footer />
              </>
       );
}
