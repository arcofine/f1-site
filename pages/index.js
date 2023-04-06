/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef} from "react";
import Link from "next/link";
import Script from "next/script";
import YouTube from "react-youtube";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
       const _onReady = (e) => {
              // access to player in all event handlers via event.target
              e.target.playVideo();
       };
       const unique_id = new Date().getTime();
       const opts = {
              height: "500",
              width: "100%",
              playerVars: {
                     autoplay: 1,
                     loop: 1,
                     mute: 1,
                     controls: 0,
                     modestbranding: 1,
              },
       };

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
                                          <div className={"absolute mx-auto top-0 -mt-13 left-38 lg:hidden md:hidden "}>
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
                                          </div>
                                          <a
                                                 href="https://docs.google.com/forms/d/e/1FAIpQLScI0ZmnPd8oMjOKmcLS4_aB_PdhfywaxBL4APgXhPQvAS_F0g/viewform?fbclid=IwAR14mMCbXUsS913ePFINQ4AQvltepyqW3c-MRkrJBIANSRag2bnx8LMZdrw"
                                                 target="_blank"
                                                 className="z-3 get-started text-center absolute w-full text-white font-bold px-2
                                                  py-2 xs:py-0 outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                                 CLIQUE ICI POUR T'INSCRIRE MAINTENANT!
                                          </a>
                                          <YouTube
                                                 videoId="obnuOHQoo78"
                                                 opts={opts}
                                                 onReady={_onReady}
                                                 onEnd={_onReady}
                                          />
                                          <div className=" mx-auto w-full items-center absolute flex h-500-px top-0 flex-wrap z-2"></div>
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
