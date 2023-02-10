import Head from "next/head";
import Layout, {siteTitle} from "../../components/layout/layout";
import Drivers from "../../components/standings/drivers";
import Iframe from "react-iframe";
import IframeResizer from "iframe-resizer-react";
import Styles from "./driver.module.scss";

export default function Driver({championship}) {
       return (
              <>
                     <Head>
                            <title>{siteTitle}</title>
                     </Head>
                     <Layout data={championship}>
                            <div className={Styles.standingBg}>
                                   <Drivers data={championship} />
                                   <div style={{display: "block", overflow: "hidden", width: "100%", height: "70vw"}}>
                                          <Iframe
                                                 url="http://thirtheen-home.myddns.me:8000/championships/championship?cid=2"
                                                 width="100%"
                                                 height="100%"
                                                 id=""
                                                 className=""
                                                 display="block"
                                                 position="relative"
                                                 overflow="visible"
                                                 scrolling="yes"
                                                 styles={{marginTop: "-180px"}}
                                          />
                                   </div>
                            </div>
                     </Layout>
              </>
       );
}

export async function getServerSideProps({
       params,
       req,
       res,
       query,
       preview,
       previewData,
       resolvedUrl,
       locale,
       locales,
       defaultLocale,
}) {
       try {
              const data = await fetch(
                     "http://thirtheen-home.myddns.me:8000/championships/export_standings_json.json?cid=2"
              );
              const championship = await data.json();
              return {props: {championship}};
       } catch (err) {
              console.log("request failed: ", err);
       }
}
{
       /* <div style="display:block;overflow:hidden;width:500px;height:350px;">
       <iframe
              style="margin-top:-100px;margin-left:-100px"
              height="350px"
              scrolling="no"
              src="http://my/page/i/want/to/show/part/of/here/"
              width="500px"></iframe>
</div>; */
}
