import React from "react";
import Script from "next/script";

// components

// import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Draws() {
       return (
              <>
                    <Script src={`/draw_script.js`} />
                     <div style={{alignContent: "center", textAlign: "center", verticalAlign: "middle", width: "100%", height: "100%"}}>
                        <table cellpadding="0" cellspacing="0" border="0" align="center">
                            <tr>
                                <td><img src="img/f1-simulation-canada.png" alt="F1 Simulation Canada"/></td>
                            </tr>
                        </table>
		                <p><b>TIRAGES / CONCOURS</b></p><br/><br/>
		
		<div id="lodF1File" style={{alignContent: "center", textAlign: "center", float: "center"}}>
			<form id="f1simDraw">
				<table cellpadding="0" cellspacing="0" border="0" align="center">
					<tr>
						<td>
							<div>
								<label for="drawList">Veuillez choir le fichier à importer</label><br/><br/>
								<input type="file" name="drawList" id="drawList"/> &nbsp;&nbsp;<input type="button" name="preloadFile" id="preloadFile" onClick="rdFileF1();" value="Vérifier"/>
							</div>
						</td>
					</tr>

				</table>
			</form>
		</div>
		{/* <!-- Parse text file //--> */}
                   <div id="chkF1File" style={{ display: "none", visibility: "hidden" }}>Aucune entrées.</div>
		{/* <!-- Verification List //--> */}
                   <div id="verifList" style={{ display: "block", visibility: "visible", float: "left", position: "absolute", top: "25px", left: "25px" }}>
                       <span style={{ fontSize: "24px", fontWeight: "bold" }}>Liste de vérification</span>
			<table cellspacing="0" cellpadding="0" border="0" width="420">
			  <tr>
				<td>
					</td>
				  </tr>
				  <tr>
					<td>
                                   <div style={{ width: "420px", height: "825px", overflow: "auto" }}>
						 <table cellspacing="0" cellpadding="0" border="0" width="400">
						  <tr>
							<td>
                                                   <div style={{ width: "420px", height: "825px", overflow: "auto" }}>
                                                       <table cellspacing="0" cellpadding="0" border="1" width="400" id="verifTable" name="verifTable" style={{ padding: "0px" }}></table>  
							   </div>
							</td>
						  </tr>
				</table>
 
			   </div>
			</td>
		  </tr>
		</table>

		</div>
		{/* <!-- Show Drawing //--> */}
		<div id="resultsDrawF1" style={{display: "none", visibility:"hidden", verticalAlign: "top"}}>Aucune entrées.</div>
	</div>
              </>
       );
}

Draws.layout = Admin;

