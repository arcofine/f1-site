// Define the API URL
import {rf2Servers as serverList} from './server_list.js';

const widgetElement = document.getElementById('widgetF1sim');
var widgetHTML = "";
let listeDriver="";
var serverData = [];
console.log(serverList);

//App Init
(async function () {
  await Promise.all(serverList.map(async (server, i) => {
    await fetchData(server, i);  
  }));
  if(serverData) await createWidget(serverData);  
  
})();

//Fetch data from RF2LA
async function fetchData(server, index) {
  await fetch((`https://api.allorigins.win/get?url=${encodeURIComponent(server.query)}`))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data = JSON.parse(data.contents); 
      serverData.push({
        id: serverList[index].id,
        url: serverList[index].url,
        imageUrl: serverList[index].imageUrl,
        serverName: data.mScoringInfo.mServerName,
        trackname: data.mScoringInfo.mTrackName,
        trackTemp: data.mScoringInfo.mTrackTemp,
        trackWeather: data.mScoringInfo.mRaining,
        session: data.mScoringInfo.mSession,
        bestTime: data.best_laptime,
        livePilots: data.mVehicles,
        pilotsSize: data.mVehicles.length,
        // livePilots: mockDrivers,
        // pilotsSize: mockDrivers.length,
        currentTime: data.mScoringInfo.mEndET,
        endTime:data.mScoringInfo.mCurrentET
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });;
}

//Render Hydrated HTML
function createWidget(data) {
  data.forEach(function (server, i) {
    widgetHTML = `
    <div id='${server.id}'> 
        <div class='nft'>
        <image src='${server.imageUrl}' class='box-image' />
            <div class='main'>
                <h2 id='serverName_${server.id}'>${server.serverName}</h2>
                <hr />
                <div id='sessionType_${server.id}' class='pill ${parseInt(server.session) == 1 ? 'practice' : 'race'}'>
                    <a href='steam://rungameid/365960//+connect ${serverList[i].gameserver} +password simul-canada24'> ${parseInt(server.session) == 1 ? 'Practice' : 'Race'}</a>
                </div>
                <div class='tokenInfo'>
                    <div class='price'>
                          <p id='circuit_${server.id}' class='description'>${server.trackname.toString().split(' - ')[0]}</p>
                    </div>
                    <div id='weather_${server.id}'  class='duration'>
                          <p>${server.trackTemp.toString().split('.')[0]}° </p>
                          <i class="fa-solid weather">${parseInt(server.trackWeather) == 0 ? '&#xf185' : '&#xf740'}</i>
                    </div>
                </div>
     
                <div class='creator'>
                    <div class="header">
                          <div class='items-header live-pilotes'>
                              Pilotes online: <span id='livePilots_${server.id}' class='live-pilotes'>${server.pilotsSize} </span>
                          </div>
                          <div id='timer_${server.id}' class='items-header live-pilotes'>
                              ${timerCalc(false, server.endTime, server.currentTime)}
                          </div>
                          <div class='items-header live-pilotes'>
                              Session Best Lap
                          </div>
                    </div>
                <div class='wrapper'>
                <div id='pilotList_${server.id}' class='container'>
            `
    
    //Close HTML
      widgetHTML += `
                    </div>
                    </div>
                    <a class='btn-card-action' target='_blank' href='${server.url}'> </a>
                  </div>
              </div>
          </div>
      </div>
  </div>`;

    widgetElement.innerHTML += widgetHTML;
  });
};
function updateDriversList(arr){
  //Loop Pilots List
//  let test= arr.sort(sortBestLap);

  arr.forEach(data => {
    document.getElementById('pilotList_'+data.id).innerHTML =""; 
  if(data.pilotsSize != 0){ 
  const op = data.livePilots.sort((a, b) => {
    // Compare the x property values
    if (a.mBestLapTime < 0 &&  b.mBestLapTime >=0) return 1; // a comes before b
    if (a.mBestLapTime >=0 && b.mBestLapTime < 0) return -1; // a comes after b
    return a.mBestLapTime - b.mBestLapTime; // a and b are equal
  });
  console.log(op);
  op.forEach(server=> {
    document.getElementById('pilotList_'+data.id).innerHTML += `
    <div class='items'>
                  <div class='box-items'
                        <div class='description'>
                            <ins>${server.mDriverName.toString().substring(0,server?.mDriverName.toString().indexOf(' '))}</ins> 
                            ${server.mDriverName?.toString().substring(server.mDriverName.toString().indexOf(' ')+1)}
                        </div> ${server.mBestLapTime != -1 ? 
                        `<div class='bestlap'>${timerCalc(true, server?.mBestLapTime)} </div>` :
                        `<div class='bestlap'>00:00.000</div>`}
                </div>  </div>`
                ;      
              }
            )          
  }
});
}

// Define a comparison function for sorting

function generateDriversList(server){
  //Loop Pilots List
  document.getElementById('pilotList_'+server.id).innerHTML =""; 
  if(server.pilotsSize != 0)
  for (let i = 0; i < server.pilotsSize; i++) {
     document.getElementById('pilotList_'+server.id).innerHTML += `
    <div class='items'>
                  <div class='box-items'
                        <div class='description'>
                            <ins>${server.livePilots[i]?.mDriverName.toString().substring(0,server.livePilots[i]?.mDriverName.toString().indexOf(' '))}</ins> 
                            ${server.livePilots[i]?.mDriverName?.toString().substring(server.livePilots[i]?.mDriverName.toString().indexOf(' ')+1)}
                        </div> ${server.livePilots[i]?.mBestLapTime != -1 ? 
                        `<div class='bestlap'>${timerCalc(true, server.livePilots[i]?.mBestLapTime)} </div>` :
                        `<div class='bestlap'>00:00.000</div>`}
                </div>  </div>`
                ;      
  }
}

function timerCalc (lapTime, current, end){
if(lapTime){
  let timeLeft = parseFloat(current);
  let hours = Math.floor(timeLeft / 3600);
  timeLeft %= 3600;
  let minutes = Math.floor(timeLeft / 60);
  let seconds = (timeLeft % 60).toFixed(3);

  //Strings with leading zeroes:
  minutes = String(minutes).padStart(2, "0");
  hours = String(hours).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  let time = minutes + ":" + seconds;
  
  return time;
}else{
  let timeLeft = parseInt(end) - parseInt(current);
  let hours = Math.floor(timeLeft / 3600);
  timeLeft %= 3600;
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  //Strings with leading zeroes:
  minutes = String(minutes).padStart(2, "0");
  hours = String(hours).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  let time = hours + ":" + minutes + ":" + seconds;
  
  return time;
}
};

//Rehidrated Html with New Data
async function updateData () {
if (serverData.length != 0) serverData.splice(0, serverData.length);
  await Promise.all(serverList.map(async (server, i) => {
    await fetchData(server, i, true);
  }));
  serverData.forEach(function (server, i) {
  //Update Session
      document.getElementById('sessionType_'+server.id).innerHTML=`<a href='steam://rungameid/365960//+connect ${server.gameserver}'> ${parseInt(server.session) == 1 ? 'Practice' : 'Race'}</a>`;
      document.getElementById('sessionType_'+server.id).setAttribute('class', parseInt(server.session) == 1 ? 'pill practice' : 'pill race');
  //Update Circuit
      document.getElementById('circuit_'+server.id).innerHTML=server.trackname.toString().split(' - ')[0];
  //Update Weather
      document.getElementById('weather_'+server.id).innerHTML=`<p>${server.trackTemp.toString().split('.')[0]}°</p>
              <i class="fa-solid weather">${parseInt(server.trackWeather) == 0 ? '&#xf185' : '&#xf740'}</i>`;
  //Update LivePilots
      document.getElementById('livePilots_'+server.id).innerHTML=server.pilotsSize;
  //Update Timer
  document.getElementById('timer_'+server.id).innerHTML=timerCalc(false, server.endTime, server.currentTime);
  //Update Pilots list
      if (server.pilotsSize == 0 ) {
        document.getElementById('pilotList_'+server.id).innerHTML="";
       }else{
        updateDriversList(serverData); 
       }
    })
  };
//Update data interval
setInterval(() => {
  updateData()
}, 2 * 60 * 15);

