import React, { useEffect, useState } from 'react';
import Mapp from './Mapp';

function Home() {
  const [data, setdata] = useState([]);
  const response=async()=>{
    const url=`https://api.bigdatacloud.net/data/ip-geolocation-full?ip=49.36.25.63&localityLanguage=en&key=bdc_891fe2c43e0a44dea6eddf797d5c372b`;
    const ferchData=await fetch(url);
    const parsedData=await ferchData.json();
    setdata(parsedData);
  }

  useEffect(() => {
    response();
  }, [])
  
  return (
    <>
     <div>Home</div>
     <div className="conatiner">
        <Mapp/>
     </div>
    </>
  )
}

export default Home