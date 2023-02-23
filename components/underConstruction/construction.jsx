// <!DOCTYPE html>
// <html className="no-js" lang="en">
// <head>

//     <!--- basic page needs
//     ================================================== -->
//     <meta charset="utf-8">
//     <title>F1 Simulation</title>
//     <meta name="description" content="">
//     <meta name="author" content="">

//     <!-- mobile specific metas
//     ================================================== -->
//     <meta name="viewport" content="width=device-width, initial-scale=1">

//     <!-- CSS
//     ================================================== -->
//     <link rel="stylesheet" href="css/base.css">
//     <link rel="stylesheet" href="css/vendor.css">
//     <link rel="stylesheet" href="css/main.css">

//     <!-- script
//     ================================================== -->
//     <script src="js/modernizr.js"></script>
//     <script defer src="js/fontawesome/all.min.js"></script>

//     <!-- favicons
//     ================================================== -->
//     <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
//     <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
//     <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
//     <link rel="manifest" href="site.webmanifest">

// </head>

// <body id="top">

import * as React from "react";
import Image from "next/image";
import Script from "next/script";

import "./css/vendor.module.css";

export default function Construction() {
       return (
              <>
                     <Script src="./js/modernizr.js" />
                     <Script defer src="./js/fontawesome/all.min.js" />

                     <div id="preloader">
                            <div id="loader" className="dots-fade">
                                   <div></div>
                                   <div></div>
                                   <div></div>
                            </div>
                     </div>
                     <header className="s-header">
                            <div className="header-logo">
                                   <a className="site-logo" href="index.html">
                                          {/* <Image src="/images/logo.png" fill alt="Homepage" /> */}
                                   </a>
                            </div>
                     </header>
                     <section id="intro" className="s-intro s-intro--slides">
                            <div className="intro-slider">
                                   <div
                                          className="intro-slider-img bg-opacity-40"
                                          style={{backgroundImage: "url(images/slides/slide-01.jpg)"}}></div>
                                   <div
                                          className={"intro-slider-img"}
                                          style={{backgroundImage: "url(images/slides/slide-02.jpg)"}}></div>
                                   <div
                                          className="intro-slider-img"
                                          style={{backgroundImage: "url(images/slides/slide-03.jpg)"}}></div>
                            </div>

                            <div className="grid-overlay">
                                   <div></div>
                            </div>

                            <div className="row intro-content">
                                   <div className="column">
                                          <div className="intro-content__text">
                                                 <h3>Site en conception</h3>
                                                 <h1>LIGUE DE SIMULATION F1</h1>
                                                 <h1> Saison complète</h1>
                                                 <h1>Réalisme</h1>
                                                 <h1> Compétition</h1>
                                          </div>

                                          <div className="intro-content__bottom">
                                                 <div className="intro-content__notify">
                                                        <button type="button" className="btn--stroke btn--small">
                                                               <a href="https://www.facebook.com/groups/f1sim/">
                                                                      INSCRIS-TOI!
                                                               </a>
                                                               <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      width="24"
                                                                      height="24"
                                                                      viewBox="0 0 24 24">
                                                                      <path d="M24 12l-9-9v7h-15v4h15v7z" />
                                                               </svg>
                                                        </button>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <ul className="intro-social">
                                   <li>
                                          <a
                                                 href="#0"
                                                 onClick="document.location.href='https://www.facebook.com/groups/f1sim/';">
                                                 <i className="fab fa-facebook" aria-hidden="true"></i>
                                          </a>
                                   </li>
                            </ul>
                     </section>
                     <Script src="./js/jquery-3.2.1.min" />
                     <Script src="js/plugins.js" />
                     <Script src="js/main.js" />
              </>
       );
}
