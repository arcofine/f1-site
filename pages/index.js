/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import ReactPlayer from "react-player";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {optionalIndexedAccessType} from "@babel/types";

export default function Index() {
       return (
              <>
                     <IndexNavbar fixed />
                     <section
                            style={{
                                   backgroundImage: "url('/img/backgrounds/bg-02.jpg')",
                            }}
                            className="relative pt-16 items-center flex h-screen max-h-860-px bg-slate-900 bg-no-repeat bg-left bg-cover">
                            <div className="w-full h-full bg-blueGray-900 absolute opacity-80 z-0 top-0"></div>
                            <div className=" container mx-auto items-center flex flex-wrap z-2">
                                   <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
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
                                          </div>
                                   </div>
                            </div>
                            <img
                                   className="absolute top-0 b-auto right-0 pt-16 xs:w-5/12 -mt-48 sm:mt-0 w-8/12 xs:logo-pos max-h-860-px"
                                   src="/img/logoNoir.png"
                                   alt="..."
                            />
                     </section>

                     <section className="mt-28 md:mt-20 pb-40 relative bg-transparent">
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
                            <div className="container mx-auto">
                                   <div className="flex flex-wrap items-center">
                                          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                                                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                                                        <img
                                                               alt="..."
                                                               src="/img/backgrounds/bg-01.jpg"
                                                               className="w-full align-middle rounded-t-lg"
                                                        />
                                                        <blockquote className="relative p-8 mb-4">
                                                               <svg
                                                                      preserveAspectRatio="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 583 95"
                                                                      className="absolute left-0 w-full block h-95-px -top-94-px">
                                                                      <polygon
                                                                             points="-30,95 583,95 583,65"
                                                                             className="text-blueGray-700 fill-current"></polygon>
                                                               </svg>
                                                               <h4 className="text-xl font-bold text-white">
                                                                      Peu importe votre niveau, vous y trouverez un
                                                                      adversaire à votre taille!
                                                               </h4>
                                                               <p className="text-md font-light mt-2 text-white">
                                                                      Après le succès de la saison 1 de F1 simulation
                                                                      voici que les inscriptions pour la saison 2 sont
                                                                      ouvertes! La saison pour l'année 2023 utilisera le
                                                                      simulateur de course rFactor 2, il semble unanime
                                                                      au sein de notre communauté et le plaisir est
                                                                      garanti.
                                                               </p>
                                                        </blockquote>
                                                 </div>
                                          </div>

                                          <div className="w-full md:w-6/12 px-4">
                                                 <div className="flex flex-wrap">
                                                        <div className="w-full md:w-6/12 px-4">
                                                               <div className="relative flex flex-col mt-4">
                                                                      <div className="px-4 py-5 flex-auto">
                                                                             <h6 className="text-xl mb-1 font-semibold">
                                                                                    Simulateur : Rfactor 2
                                                                             </h6>
                                                                             <p className="mb-4 text-blueGray-500">
                                                                                    Fugiat amet amet minim veniam Lorem
                                                                                    cillum sunt Lorem veniam.
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                               <div className="relative flex flex-col min-w-0">
                                                                      <div className="px-4 py-5 flex-auto">
                                                                             <h6 className="text-xl mb-1 font-semibold">
                                                                                    Système de pointage en ligne
                                                                             </h6>
                                                                             <p className="mb-4 text-blueGray-500">
                                                                                    Sollit laboris labore aliquip
                                                                                    officia minim velit elit culpa
                                                                                    exercitation do.
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="w-full md:w-6/12 px-4">
                                                               <div className="relative flex flex-col min-w-0 mt-4">
                                                                      <div className="px-4 py-5 flex-auto">
                                                                             <h6 className="text-xl mb-1 font-semibold">
                                                                                    Voiture : FSR 23
                                                                             </h6>
                                                                             <p className="mb-4 text-blueGray-500">
                                                                                    Sollit laboris labore aliquip
                                                                                    officia minim velit elit culpa
                                                                                    exercitation do.
                                                                             </p>
                                                                      </div>
                                                               </div>

                                                               <div className="relative flex flex-col min-w-0">
                                                                      <div className="px-4 py-5 flex-auto">
                                                                             {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                                                    <i className="fas fa-file-alt"></i>
                                                                             </div> */}
                                                                             <h6 className="text-xl mb-1 font-semibold">
                                                                                    Saison complète
                                                                             </h6>
                                                                             <p className="mb-4 text-blueGray-500">
                                                                                    Selon le vrai calendrier de la F1
                                                                                    2023 (minimum de 22 courses)
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>

                     <Footer />
              </>
       );
}
