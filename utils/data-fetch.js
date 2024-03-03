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
       const data = await fetch("http://f1simgt3.ddns.net:8805/championships/export_standings_json.json?cid=1");
       const championship = await data.json();
       return {props: {championship}};
}
