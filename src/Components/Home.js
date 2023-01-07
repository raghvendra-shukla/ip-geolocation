import React, { useEffect, useState } from 'react';
import Mapp from './Mapp';

function Home() {
  const [data, setdata] = useState([]);
  const response=async()=>{
    const url=`https://api.bigdatacloud.net/data/ip-geolocation-full?ip=8.8.8.8&localityLanguage=en&key=bdc_891fe2c43e0a44dea6eddf797d5c372b`;
    const fetchData=await fetch(url);
    const parsedData=await fetchData.json();
    setdata(parsedData.location);
    // console.log("yes");
  }

  useEffect(() => {
    response();
    // console.log("yes1");
  }, [])
  
  return (
    <>
    <div className="container">
      <div className="container my-2">
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Enter the IP address to locate" aria-label="Search"/>
              <button className="btn btn-dark text-white" type="submit">Search</button>
            </form>
      </div>
      <div className="conatiner my-2 text-center">
          <Mapp lati={data.latitude} loni={data.longitude}/>
          {/* {console.log(typeof(data.latitude))} */}
      </div>
    </div>
    </>
  )
}

export default Home