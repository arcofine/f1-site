import {useEffect, useState} from "react";
import Iframe from "react-iframe";
import Link from "next/link";
// import console from "console";

export default function CardLineChart({mode}) {
       const [data, setData] = useState();

       // const fetchData = async () => {
       //        try {
       //               const testURL = await await fetch("https://some-url-that-might-fail.com");
       //               console.log("TADA");
       //               return testURL;
       //        } catch (error) {
       //               console.error("Boooo"); // You might send an exception to your error tracker like AppSignal
       //               return error;
       //        }
       // };
       useEffect(() => {
              const fetchData = async () => {
                     try {
                            const testURL = await fetch("/championships/championship?cid=2");
                            setData(testURL.status);
                            console.log(testURL.status);
                            return testURL;
                     } catch (error) {
                            console.error("Boooo");
                            return error;
                     }
              };
              fetchData();
       }, []);

       return (
              <>
                     <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded bg-blueGray-700">
                            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                   <div className="flex flex-wrap items-center">
                                          <div className="relative w-full max-w-full flex-grow flex-1">
                                                 <a
                                                        href={`https://www.f1sim.ca/admin/tables${mode}`}
                                                        className="md:block text-left md:pb-2 text-blueGray-100 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                                                        <i className="fas fa-arrow-circle-left"></i> retour
                                                 </a>
                                                 {/* <h2 className="text-white text-xl font-semibold">Hors-Saison</h2> */}
                                          </div>
                                   </div>
                            </div>
                            <div className="p-4 flex-auto">
                                   {/* Chart */}
                                   {data === 200 ? (
                                          <div
                                                 className="relative"
                                                 style={{
                                                        display: "block",
                                                        overflow: "hidden",
                                                        width: "100%",
                                                        height: "100vw",
                                                 }}>
                                                 <Iframe
                                                        url="/championships/championship?cid=1"
                                                        width="100%"
                                                        height="100%"
                                                        id=""
                                                        className=""
                                                        display="block"
                                                        position="relative"
                                                        overflow="visible"
                                                        scrolling="yes"
                                                        // styles={{marginTop: "-180px"}}
                                                 />
                                          </div>
                                   ) : (
                                          <>
                                                 <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded bg-orange-500 mt-8 mb-5">
                                                        <div className="rounded-t mb-0 px-4 py-3 pb-0 bg-transparent">
                                                               <div className="flex flex-wrap items-center">
                                                                      <div className="relative w-full max-w-full flex-grow flex-1">
                                                                             <h6 className="uppercase text-blueGray-800 mb-0 text-center text-xs font-semibold">
                                                                                    Serveur en manutention
                                                                             </h6>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="p-1 flex-auto">{/* Chart */}</div>
                                                        <div
                                                               className="relative"
                                                               style={{
                                                                      display: "block",
                                                                      overflow: "hidden",
                                                                      width: "100%",
                                                                      height: "50px",
                                                               }}>
                                                               <h4 className="mt-0 text-3xl leading-relaxed text-center text-blueGray-100">
                                                                      Nous serons de retour dans quelques minutes
                                                               </h4>
                                                        </div>
                                                 </div>
                                          </>
                                   )}
                            </div>
                     </div>
              </>
       );
}
