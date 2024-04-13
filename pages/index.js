/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useRef} from "react";
import Link from "next/link";
import YouTube from "react-youtube";

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function Index() {
       const _onReady = (e) => {
              // access to player in all event handlers via event.target
              e.target.playVideo();
       };
       const _onReady2 = (e) => {
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
       const optsSmall = {
              height: "250px",
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
                    
                     <IndexNavbar fixed />

                     <section
                            style={{
                                   backgroundImage: "url('/img/backgrounds/bg-02.jpg')",
                            }}
                            className="relative xs:pt-32 sm:pt-32 items-center flex flex-col  bg-slate-900 bg-no-repeat bg-left bg-cover">
                            <div className="w-full h-full bg-blueGray-900 absolute opacity-80 z-0 top-0"></div>

                            <div className=" container w-full mt-58 xs:mt-58 sm:mt-58 mx-auto items-center flex flex-wrap z-2">
                                   <div className=" mx-auto items-center absolute flex flex-wrap z-2"></div>
                                   <div
                                                 className={
                                                        " mx-auto top-0 -mt-13 left-38"
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
                                   <div className="w-full relative px-0 flex">
                                          
                                      
                                          <div className="container mx-auto max-w-950-px ws:max-w-580-px xs:hidden sm:hidden">
                                                 <YouTube
                                                        videoId="A7rFAimTgZk"
                                                        opts={opts}
                                                        onReady={_onReady2}
                                                        onEnd={_onReady2}
                                                 />
                                                 
                                          </div>
                                          <div className="container mx-auto max-w-950-px ws:max-w-580-px lg:hidden md:hidden ">
                                                 <YouTube
                                                        videoId="A7rFAimTgZk"
                                                        opts={optsSmall}
                                                        onReady={_onReady}
                                                        onEnd={_onReady}
                                                 />
                                                 
                                          </div>
                                          <div className=" mx-auto w-full items-center absolute flex h-500-px bottom-0 flex-wrap z-2">
                                         
                                          </div>
                                          
                                   </div>
                                   <div className="flex flex-col mx-auto items-center justify-center mt-5 z-50">
                                  
                                          <a
                            className="text-blueGray-300
                                          text-center
                                          inline-flex
                                          items-center
                                          justify-center
                                          w-full
                                          px-14
                                          h-16
                                          mb-0
                                          shadow-lg
                                          text-xl
                                          font-bold
                                          border-2
                                          hover:text-blueGray-500
                                          roboto
                                          "
                            href="https://forms.gle/D6Nq9RG8wcsh6ruv6"
                            target="_blank"
                            rel="noreferrer">
                            INSCRIS TOI MAINTENANT!
                     </a>
                                   </div>
                                   
                            </div>
                     </section>
                    
                     <Footer />
              </>
       );
}
