import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

export default function RuleGt() {
       return (
              <div>
                     <Image
                            src="/img/backgrounds/rules_gt_bg.png"
                            width={2024}
                            height={500}
                            quality={80}
                            sizes="max-width: 768px) 100vw"
                            alt="Picture of the author"
                     />
                     <div className="flex justify-around" style={{marginTop: "-9vw", marginBottom: "70px"}}>
                            <a
                                   href="https://drive.google.com/file/d/18bw7ATGTIsc8m3t-QbyAziUdppakfmFs/view?usp=drive_link"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="button-54">
                                   Français
                            </a>
                            <a
                                   href="https://drive.google.com/file/d/19g2IZzvAjnKpMUyigv5wDTRpg3grq77P/view?usp=drive_link"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="button-54">
                                   English
                            </a>
                     </div>
              </div>
       );
}
