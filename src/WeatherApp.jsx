import SearchBox
 from "./SearchBox";
 import InfoBox from "./InfoBox";
 import{useState} from "react";

function WeatherApp() {
    let[weatherInfo,setWeatherInfo]=useState({
        city:"wonderland",
        temp :22,
        tempMin :45.08,
        tempMax :45.99,
        humidity : 45,
        weather :"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}
 export default WeatherApp;