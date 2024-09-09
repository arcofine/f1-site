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
       const data = await fetch("http://theovox-rdp.ddns.net:8803/championships/export_standings_json.json?cid=3");
       const championship = await data.json();
       return {props: {championship}};
}
