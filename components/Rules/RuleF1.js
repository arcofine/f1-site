import React, {Component} from "react";
import Image from "next/image";

class RuleEnglish extends Component {
       render() {
              return (
                     <div>
                            <Image
                                   src="/img/backgrounds/rules_f1_bg.png"
                                   width={2024}
                                   height={500}
                                   quality={80}
                                   sizes="max-width: 768px) 100vw"
                                   alt="Picture of the author"
                            />
                            <div className="flex justify-around" style={{marginTop: "-9vw", marginBottom: "70px"}}>
                                   <a
                                          href="https://drive.google.com/file/d/10Jr5yaxhj87_y9lpz5TeCbn2LkpWK8T_/view?usp=share_link"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="button-54">
                                          Français
                                   </a>
                                   <a
                                          href="https://drive.google.com/file/d/10Jr5yaxhj87_y9lpz5TeCbn2LkpWK8T_/view?usp=share_link"
                                          target="_blank"
                                          rel="noreferrer"
                                          className="button-54">
                                          English
                                   </a>
                            </div>
                     </div>
              );
       }
}

export default RuleEnglish;
