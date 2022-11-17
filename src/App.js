import './App.css';
 import cloud from './images/cloud.png'
 import humidity from './images/humidity.png'
 import precip from './images/precip.png'
 import pression from './images/pression.png'
 import temmp from './images/temmp.png'
 import visibility from './images/visibility.png'
 import wind from './images/wind-solid.svg'
 import 'font-awesome/css/font-awesome.min.css';
 import React, { Component }  from 'react';
 import axios from 'axios';
 import { useState, useEffect } from 'react';

function App() {
    const [data,setData]=useState({})
    const [location,setLocation]=useState('casablanca')
    const [week,setWeek]=useState({})
   
   //Current Weather Data
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=57c089590cd3e9aec30deb43ca5557dd`
  //Daily Forecast 5 days
   const url2=`http://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=6f34d19123d66679eedefa599fe8c352`
   const searchLocation=(event)=>{
        if(event.key==='Enter'){
            axios.get(url).then((response)=>{
                setData(response.data)
               
            });
            axios.get(url2).then((response)=>{
                setWeek(response.data)
                console.log(response.data)
            })
        }
    }
   
    useEffect(() => {
        axios.get(url).then((response)=>{
            setData(response.data)
            console.log(response.data)

        })
    }, []);
    
    var date = new Date()
    var dayOfWeeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];    
  return (  
    <div>   
       
    <nav>    
    <div className="search">
        
        <input type="text" placeholder="type here..." 
        value={location} onChange={event=>setLocation(event.target.value)} onKeyPress={searchLocation} />
        <div><p>Search</p></div>
    </div>
    <div className="temperature">
        <div>
         <p><span>{data.main? parseInt(data.main.temp-273.15):null}</span>°c</p>        
        </div>       
    </div>
    <div className="date">
       <p><span>{dayOfWeeek[date.getDay()]}, </span>{date.getHours() + ":" + date.getMinutes()}</p>     
    </div>
 <div className="hr"></div>
<div className="cloud">
<i className='fa fa-cloud'></i>
<span>{data.weather?data.weather[0].description:null}</span>
</div>
<div className="cloud">
<i className="fa fa-map-marker" style={{fontSize:'20px'}}></i>
<span>{data.sys?data.sys.country:null}</span>
</div>
<div className="map">
<p>{data.name}</p>

</div>
 
</nav>
<main>
    <section>
        
  
<h3>week</h3>

<div className="days_week">
<div className="day_week" >
<p>{dayOfWeeek[(date.getDay()+1)<7?date.getDay()+1:date.getDay()+1-7]}</p>
<img src={cloud} alt="" />
<p><span>{week.list? parseInt(week.list[0].main.temp-273.15):null}</span>°c</p>

</div>
<div className="day_week" >
<p>{dayOfWeeek[(date.getDay()+2)<7?date.getDay()+2:date.getDay()+2-7]}</p>
<img src={cloud} alt="" />
<p><span>{week.list? parseInt(week.list[1].main.temp-273.15):null}</span>°c</p>

</div>
<div className="day_week" >
<p>{dayOfWeeek[(date.getDay()+3)<7?date.getDay()+3:date.getDay()+3-7]}</p>
<img src={cloud} alt="" />
<p><span>{week.list? parseInt(week.list[2].main.temp-273.15):null}</span>°c</p>

</div>
<div className="day_week" >
<p>{dayOfWeeek[(date.getDay()+4)<7?date.getDay()+4:date.getDay()+4-7]}</p>
<img src={cloud} alt="" />
<p><span>{week.list? parseInt(week.list[3].main.temp-273.15):null}</span>°c</p>

</div>
<div className="day_week" >
<p>{dayOfWeeek[(date.getDay()+5)<7?date.getDay()+5:date.getDay()+5-7]}</p>
<img src={cloud} alt="" />
<p><span>{week.list? parseInt(week.list[4].main.temp-273.15):null}</span>°c</p>

</div>
</div>
    </section>   
    <section>
        <h3 style={{marginTop: '20px'}} >Today's Highlights</h3>
   <div className="info_today">
    <div className="info_today_div">
        <div>
            <p className="info_today_titre">SYS</p>
            <p>{data.sys?data.sys.type:null}</p>
            <p className="info_today_titre">Pressure</p>
            <p>{data.main?data.main.pressure:null}</p>
        </div>
      <img src={pression}alt="" />
        
    </div>
    <div className="info_today_div">
        <div>
            <p className="info_today_titre">Wind Status</p>
            <p><span>{data.wind?data.wind.speed:null}</span>km/h</p>
            <i className="fa fa-compass" style={{fontSize:"24px" ,color:"cornflowerblue" }} ></i>
            <p >WSW</p>
        </div>
       <img src={wind} alt="" />
        
    </div>
    <div className="info_today_div">
        <div>
            <p className="info_today_titre">Precip</p>
            <p>{data.main?data.main.pressure:null}</p>
        </div>
     <img src={precip} alt="" />
    </div>
    <div className="info_today_div">
        <div>
            <p className="info_today_titre">Humidity</p>
            <p><span>{data.main?data.main.humidity:null}</span>%</p>
        </div>
       <img src={humidity} alt="" />
    </div>
    <div className="info_today_div">
        <div>
            <p className="info_today_titre">Visibility</p>
            <p><span>{data.visibility}</span>km</p>
        </div>
      <img src={visibility} alt=""/>
    </div>
    <div className="info_today_div">
        <div>
            <p className="info_today_titre">Feelslike</p>
            <p>{data.main?data.main.feels_like:null}</p>
        </div>
      <img src={temmp} alt=""/>
    </div>
   </div>
    </section>
</main>
</div>

  );
}

export default App;
