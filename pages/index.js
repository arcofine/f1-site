import Head from "next/head";
import Layout, {siteTitle} from "../components/layout/layout";
import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";

const label = {inputProps: {"aria-label": "Switch demo"}};

export default function Home({championship}) {
       return (
              <>
                     <div className={styles.container}>
                            <Head>
                                   <title>{siteTitle}</title>
                            </Head>
                            <Layout data={championship} notReady />
                     </div>
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

/* <section className={utilStyles.headingMd}>
        {
          <ul>
            {driveData}
          </ul>
        }
        {Object.values(data["Driver Stats"]).filter(x => { return x.bestf <= 3 && x.bestf > 0  } ).map((x,i) => { 
         return <h1 key={i}>{x.name}</h1>
        })}
      <p>{data.bio}</p>
      </section>
      <section className={utilStyles.headingMd}>
        server side
        {
          <ul>
            {driveData}
          </ul>
        }
        {Object.values(users["Driver Stats"]).filter(x => { return x.bestf <= 3 && x.bestf > 0  } ).map((x,i) => { 
         return <h1 key={i}>{x.name}</h1>
        })}
      <p>{data.bio}</p>
      </section> */
