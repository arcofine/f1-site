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
              height: "540",
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

                     <section
                            style={{
                                   backgroundImage: "url('/img/backgrounds/bg-02.jpg')",
                            }}
                            className="relative pt-36 items-center flex flex-col xs:h-600-px h-800-px  bg-slate-900 bg-no-repeat bg-left bg-cover">
                            <div className="w-full h-full bg-blueGray-900 absolute opacity-80 z-0 top-0"></div>

                            <div className=" container w-11/12 mx-auto items-center flex flex-wrap z-2">
                                   <div className=" mx-auto items-center absolute flex flex-wrap z-2"></div>
                                   <div className="w-full relative px-0 flex">
                                          <div
                                                 className={
                                                        "absolute mx-auto top-0 -mt-13 left-38 lg:hidden md:hidden sm:hidden "
                                                 }>
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
                                          {/* <a
                                                 href="https://docs.google.com/forms/d/e/1FAIpQLScI0ZmnPd8oMjOKmcLS4_aB_PdhfywaxBL4APgXhPQvAS_F0g/viewform?fbclid=IwAR14mMCbXUsS913ePFINQ4AQvltepyqW3c-MRkrJBIANSRag2bnx8LMZdrw"
                                                 target="_blank"
                                                 className="z-3 get-started text-center absolute w-full text-white font-bold px-2
                                                  py-2 xs:py-0 outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                                 CLIQUE ICI POUR T'INSCRIRE MAINTENANT!
                                          </a> */}
                                          <div className="container mx-auto max-w-950-px ws:max-w-580-px ">
                                                 <YouTube
                                                        videoId="WAJRdQipdZE"
                                                        opts={opts}
                                                        onReady={_onReady}
                                                        onEnd={_onReady}
                                                 />
                                          </div>
                                          <div className=" mx-auto w-full items-center absolute flex h-500-px top-0 flex-wrap z-2"></div>
                                   </div>
                            </div>
                     </section>

                     <Footer />
              </>
       );
}
