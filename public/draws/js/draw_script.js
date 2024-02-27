		//nmb de seconde
		var timer=10;
		
		
		timer=timer*1000;
		var countD=0;
		var fullDrawList = [];
		
		function cancelF1Files()
			{
				document.getElementById("f1simDraw").reset();
				
				document.getElementById("chkF1File").style.visibility="hidden";
				document.getElementById("chkF1File").style.display="none";
								
				document.getElementById("lodF1File").style.visibility="visible";
				document.getElementById("lodF1File").style.display="block";
				
				fullDrawList = [];
			}
		
		function rdFileF1()
			{
				fullDrawList = [];
				
				const $output = document.getElementById('chkF1File');
				var file = document.getElementById('drawList').files[0];

				var reader = new FileReader();
				reader.onload = function(progressEvent) {
				// Entire file
				const text = this.result;
					
				if(text!="")	
					{
						//$output.innerText = text

						var parsedF1Name= [];
						var parsedF1Chances= [];
						
						// By lines
						var lines = text.split('\n');
						for (var line = 0; line < lines.length; line++) {
							var userData=lines[line].split(';');
							//console.log(userData[0] + ", chances = " + userData[1]);
							
							
							if(userData[0]==""){ contender="N/D"; }else{contender=userData[0];}
							if(userData[1]==""){ contenderChances=0; }else{contenderChances=parseInt(userData[1]);}
							
							parsedF1Name[line]=(contender);
							parsedF1Chances[line]=(contenderChances);
							
							for(dList=0; dList<contenderChances; dList++)
								{
									fullDrawList.push(contender);
								}
						}
						
						
						if(parsedF1Name.length>0)
							{
								var outputInnerText="";
								outputInnerText+="<table cellpadding='0' cellspacing='0' border='1' align='center' style='margin-bottom:25px;'>";
								outputInnerText+="<tr>";
								outputInnerText+="<td width='350' style='background-color:white; color:black; text-align:center; font-weight:bold;'>PARTICIPANTS</td>";
								outputInnerText+="<td width='150' style='background-color:white; color:black; text-align:center; font-weight:bold;'>CHANCES</td>";
								outputInnerText+="</tr>";
								////build html
								for(rowTD=0; rowTD<parsedF1Name.length; rowTD++)
									{
										outputInnerText+="<tr>";
										outputInnerText+="<td style='padding:5px;'>"+parsedF1Name[rowTD]+"</td>";
										outputInnerText+="<td style='padding:5px; text-align:center;'>"+parsedF1Chances[rowTD]+"</td>";
										outputInnerText+="</tr>";
									}
								
								outputInnerText+="</table>";
								outputInnerText+="<table cellpadding='0' cellspacing='0' border='0' align='center'>";
									outputInnerText+="<tr><td colspan='2' style='text-align='center'>";
										outputInnerText+="<input type='button' id='cancelFile' name='cancelFile' value='Annuler' onClick='cancelF1Files();'>";
										outputInnerText+="&nbsp;&nbsp;";
										outputInnerText+="<input type='button' id='submitFile' name='submitFile' value='Proc&eacute;der' onClick='processF1Files();'>";
									outputInnerText+="</td></tr>";
								outputInnerText+="</table>";
								
								
								
								
								document.getElementById("chkF1File").style.visibility="visible";
								document.getElementById("chkF1File").style.display="block";
								
								document.getElementById("lodF1File").style.visibility="hidden";
								document.getElementById("lodF1File").style.display="none";
								
								
								
								
								$output.innerHTML = outputInnerText;
							}
						else
							{
								alert("Le fichier est vide.");
							}
					}
				else
					{
						alert("Le fichier est vide.");
					}
				
				};
			reader.readAsText(file);
			}
		
		function shuffle(array) {
			 let currentIndex = array.length,  randomIndex;

			  // While there remain elements to shuffle.
			  while (currentIndex > 0) {

				// Pick a remaining element.
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element.
				[array[currentIndex], array[randomIndex]] = [
				  array[randomIndex], array[currentIndex]];
			  }

			  return array;
		}
		
		function lottoGen() {
		    //let rand= Math.random() * (parseInt(fullDrawList.length)-1
			let rand= Math.random() * (parseInt(fullDrawList.length) - 0) + 0;

			rand = Math.floor(rand);
			return rand;
		}
		
		function removeId(arrId)
			{
				fullDrawList.splice(2, 1);
				
				for(i=0; i<fullDrawList.length; i++)
					{
						console.log(i + "=" + fullDrawList[i]);
					}
				countD=0;
				
				for(i=0; i<fullDrawList.length; i++)
					{
						document.getElementById("verif_"+i).style.backgroundColor="inherit";		
						//document.getElementById("verif_"+i).classList.remove("winner");
					}
				
				
				processF1Files();
			}
		
		function processF1Files()
			{
				////shuffle array number of time of entries
				
				var currentDraw;
				currentDraw="";
				currentDraw=fullDrawList;
				for(i=0; i<currentDraw.length; i++)
					{
						currentDraw=shuffle(currentDraw);
					}
				
				document.getElementById("chkF1File").style.visibility="hidden";
				document.getElementById("chkF1File").style.display="none";
				
				document.getElementById("resultsDrawF1").style.visibility="visible";
				document.getElementById("resultsDrawF1").style.display="block";
				
				document.getElementById("verifTable").innerHTML="";;
			
				for(chckDraw=0; chckDraw<currentDraw.length; chckDraw++)
					{
						verifListCreation(chckDraw, currentDraw[parseInt(chckDraw)]);
					}
				
				lastPick="nd";
				///start shuffling with a time 
				interval= setInterval(function(){
					
					if(lastPick!="nd")
						{
							document.getElementById("verif_"+lastPick).style.backgroundColor="inherit";		
						}
					
					lastDraw="";
					lastDraw=lottoGen();
					
					lastPick=lastDraw;
					document.getElementById("verif_"+lastDraw).style.backgroundColor="green";
					countD+=11;
					resCount=Math.round((parseInt(timer)-parseInt(countD))/1000);
					document.getElementById("resultsDrawF1").innerHTML="<span style='font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Arial Black, sans-serif; font-size:24px;'>"+resCount+" secondes</span><br><span style='font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Arial Black, sans-serif; font-size:48px;'>"+currentDraw[lastDraw]+"</span><br>" + lastDraw;
				}, 11);
				
				setTimeout(function(){
					clearInterval(interval);	
					lastDraw=lottoGen();
					
					for(i=0; i<currentDraw.length; i++)
						{
							document.getElementById("verif_"+i).style.backgroundColor="inherit";		
						}
					
					document.getElementById("verif_"+lastDraw).style.backgroundColor="green";
					//document.getElementById("verif_"+lastDraw).classList.add("winner");
					
					footerHT="<br>ID de vérification : " + lastDraw + "<br><br><table cellpadding='0' cellspacing='0' border='0' align='center'>";
					footerHT+="<tr>";
						footerHT+="<td><input type='button' id='reDraw' name='reDraw' value='Retirer et Poursuivre' onClick='removeId("+lastDraw+");'></td>";
					footerHT+="</tr>";
					footerHT+="</table";
					
					
					document.getElementById("resultsDrawF1").innerHTML="<span style='font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Arial Black, sans-serif; font-size:24px;'>GAGNANT</span><br><span style='font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Arial Black, sans-serif; font-size:48px;'><img src='img/fireworks2.gif' alt='gagnant' style='max-height:125px;'>" + currentDraw[lastDraw]+"<img src='img/fireworks2.gif' alt='gagnant' style='max-height:125px;'></span>"+footerHT;
				}, timer);
				console.log(currentDraw.length + " = " + currentDraw);
			}
		
		function verifListCreation(idPart, participantName) {
			var table = document.getElementById("verifTable");
			
			var row = table.insertRow(0);

				for(var i = 0, l = 2; i < l; i++){
				var cell = row.insertCell(i);
				row.setAttribute("id", "verif_"+idPart);
				
				TxTdefSize=8;
				CelldefSize=10;	
				if(i==0)
					{
						cell.setAttribute("id", "verifId_"+idPart);
						cell.setAttribute("style", "width:116px; height:"+CelldefSize+"px; text-align:right; padding:0px 10px 0px 0px;");
						cell.innerHTML = "<span style='font-size:"+TxTdefSize+"px; text-align:right;'>"+idPart+"</span>";
					}
				else
					{
						cell.setAttribute("id", "verifName_"+idPart);
						cell.setAttribute("style", "text-align:left; height:"+CelldefSize+"px; padding:0px 0px 0px 10px;");
						cell.innerHTML = "<span style='font-size:"+TxTdefSize+"px;'>"+participantName+"</span>";;
					}
				}
		}
