import React from "react";

export default function Footer() {
       return (
              <>
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
                            <div className="container mx-auto px-4">
                                   <div className="flex flex-wrap text-center lg:text-left">
                                          <div className="w-full lg:w-6/12 px-4">
                                                 <div className="mt-6 lg:mb-0 mb-6">
                                                        <button
                                                               className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                               type="button">
                                                               <a
                                                                      className=""
                                                                      href="https://www.facebook.com/groups/f1sim/"
                                                                      target="_blank"
                                                                      rel="noreferrer">
                                                                      <i className="fab fa-facebook-square text-lg leading-lg " />
                                                                      <span className="lg:hidden inline-block ml-2">
                                                                             Share
                                                                      </span>
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
                                                                      <span className="lg:hidden inline-block ml-2">
                                                                             Discord
                                                                      </span>
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
