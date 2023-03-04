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
       console.log("Logging : " + res);
       const data = await fetch("http://thirtheen-home.myddns.me:8800/championships/export_standings_json.json?cid=1");
       const championship = await data.json();
       return {props: {championship}};
}
