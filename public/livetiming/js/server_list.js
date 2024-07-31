var serverData = [];
let urlOrigin;
const imageRel = [
    // {
    //     "id": "MAIN 4",
    //     "imageUrl": "livetiming/assets/nascartruck.jpeg"
    // }, 
    // { 
    //     "id": "MAIN 3",
    //     "imageUrl": "livetiming/assets/pcup2.jpeg"
    // },
    {
        "id": "Race 2",
        "imageUrl": "livetiming/assets/formula.jpeg"
    }, 
    {
        "id": "Race 1",
        "imageUrl": "livetiming/assets/gt.jpeg"
    }
]
let serverList2 = [
    // {
  
    //     "query": "https://f1sim-wiget-m4.vercel.app/live/get_data?name=rFactor2%20Dedicated.exe12232",
    //     "url":"https://f1sim-wiget-m4.vercel.app/live/",
    //     "gameserver" :"76.67.137.178:65497",
    // }, 
    // {

    //     "query": "https://f1-site-7m3.vercel.app/live/get_data?name=rFactor2%20Dedicated.exe13048",
    //     "url":"https://f1-site-7m3.vercel.app/live/",
    //     "gameserver" :"70.83.149.208:64297",
    // },
    {

        "query": "https://www.f1sim.ca/live/get_data?name=rFactor2%20Dedicated.exe15184",
        "url":"https://www.f1sim.ca/live/",
        "gameserver" :"76.67.137.178:65397",
    }, 
    {
        "query": "https://www.gt3sim.com/live/get_data?name=rFactor2%20Dedicated.exe19380",
        "url":"https://www.gt3sim.com/live/",
        "gameserver" :"76.67.137.178:64297",
    }
];

async function fetchData(){
    await Promise.all(serverList2.map(async (server, i) => {
        await getServers(server, i);  
      }));
      return(serverList2);
}

  async function getServers(s,i){

    await fetch('https://f1sim-widget.arcofine.workers.dev/?url='+(s.query), {cache:'no-store'})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      urlOrigin = response.url;
      return response.json();
    })
    .then((data) => {
        let image;
        serverList2.forEach(element => {
            if(urlOrigin.includes(element.url)){
                element.id = data.mScoringInfo.mServerName.split('- ')[1];
                element.query = urlOrigin.split('url=')[1];
                image = imageRel.find(o => o.id === data.mScoringInfo.mServerName.split('- ')[1]);
                element.imageUrl = image.imageUrl;
            }
        });      
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


export const rf2Servers = async()=>{ 
let test = await fetchData();
return test;
};

export const mockDrivers = [
    {
        "mID": 2,
        "mDriverName": "Mathieu Cote",
        "mVehicleName": "JIMEXS #23",
        "mTotalLaps": 2,
        "mSector": 0,
        "mFinishStatus": 0,
        "mLapDist": 4681.69384765625,
        "mBestSector1": 27.749114990234375,
        "mBestSector2": 59.534271240234375,
        "mBestLapTime": 118.65986633300781,
        "mLastSector1": 37.38859558105469,
        "mLastSector2": 71.6195068359375,
        "mLastLapTime": 117.65986633300781,
        "mCurSector1": 27.749114990234375,
        "mCurSector2": 59.534271240234375,
        "mNumPitstops": "",
        "mIsPlayer": 0,
        "mControl": 2,
        "mInPits": 0,
        "mPlace": 1,
        "mVehicleClass": "F1SIM FORMULA - HYBRID 2024",
        "mTimeBehindNext": 0,
        "mTimeBehindLeader": 0,
        "mLapsBehindLeader": 0,
        "mInGarageStall": 0,
        "mFrontTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundIndex": 1,
        "mFrontTireCompoundIndex": 1,
        "mFuel": 75,
        "mWear": [
            100,
            100,
            100,
            100
        ],
        "speed": 309.3755095061475
    },
    {
        "mID": 3,
        "mDriverName": "Alain Le Francois",
        "mVehicleName": "Canevas Chambly #20",
        "mTotalLaps": 1,
        "mSector": 2,
        "mFinishStatus": 0,
        "mLapDist": 1525.1605224609375,
        "mBestSector1": -1,
        "mBestSector2": -1,
        "mBestLapTime": -1,
        "mLastSector1": -1,
        "mLastSector2": -1,
        "mLastLapTime": -1,
        "mCurSector1": -1,
        "mCurSector2": -1,
        "mNumPitstops": "",
        "mIsPlayer": 0,
        "mControl": 2,
        "mInPits": 0,
        "mPlace": 2,
        "mVehicleClass": "F1SIM FORMULA - HYBRID 2024",
        "mTimeBehindNext": 0,
        "mTimeBehindLeader": 0,
        "mLapsBehindLeader": 1,
        "mInGarageStall": 0,
        "mFrontTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundIndex": 1,
        "mFrontTireCompoundIndex": 1,
        "mFuel": 75,
        "mWear": [
            100,
            100,
            100,
            100
        ],
        "speed": 275.8407841460892
    },
    {
        "mID": 4,
        "mDriverName": "Armando Neto",
        "mVehicleName": "JIMEXS #23",
        "mTotalLaps": 2,
        "mSector": 0,
        "mFinishStatus": 0,
        "mLapDist": 4681.69384765625,
        "mBestSector1": 27.749114990234375,
        "mBestSector2": 59.534271240234375,
        "mBestLapTime": 117.65986633300781,
        "mLastSector1": 37.38859558105469,
        "mLastSector2": 71.6195068359375,
        "mLastLapTime": 117.65986633300781,
        "mCurSector1": 27.749114990234375,
        "mCurSector2": 59.534271240234375,
        "mNumPitstops": "",
        "mIsPlayer": 0,
        "mControl": 2,
        "mInPits": 0,
        "mPlace": 1,
        "mVehicleClass": "F1SIM FORMULA - HYBRID 2024",
        "mTimeBehindNext": 0,
        "mTimeBehindLeader": 0,
        "mLapsBehindLeader": 0,
        "mInGarageStall": 0,
        "mFrontTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundIndex": 1,
        "mFrontTireCompoundIndex": 1,
        "mFuel": 75,
        "mWear": [
            100,
            100,
            100,
            100
        ],
        "speed": 309.3755095061475
    },
    {
        "mID": 5,
        "mDriverName": "JF Champagne",
        "mVehicleName": "Canevas Chambly #20",
        "mTotalLaps": 1,
        "mSector": 2,
        "mFinishStatus": 0,
        "mLapDist": 1625.1585224609375,
        "mBestSector1": -1,
        "mBestSector2": -1,
        "mBestLapTime": -1,
        "mLastSector1": -1,
        "mLastSector2": -1,
        "mLastLapTime": -1,
        "mCurSector1": -1,
        "mCurSector2": -1,
        "mNumPitstops": "",
        "mIsPlayer": 0,
        "mControl": 2,
        "mInPits": 0,
        "mPlace": 2,
        "mVehicleClass": "F1SIM FORMULA - HYBRID 2024",
        "mTimeBehindNext": 0,
        "mTimeBehindLeader": 0,
        "mLapsBehindLeader": 1,
        "mInGarageStall": 0,
        "mFrontTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundName": "MEDIUM (C3)",
        "mRearTireCompoundIndex": 1,
        "mFrontTireCompoundIndex": 1,
        "mFuel": 75,
        "mWear": [
            100,
            100,
            100,
            100
        ],
        "speed": 275.8407841460892
    }
]