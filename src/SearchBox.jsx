import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d3380204fb21f9d869978c0f445c229d";

let getWeatherInfo=async ()=>{
    try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        let result={
          city:city,
          temp : jsonResponse.main.temp,
          tempMin : jsonResponse.main.temp_min,
          tempMax : jsonResponse.main.temp_max,
          humidity : jsonResponse.main.humidity,
          weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(error){
       throw error;
    }
};

    let handleChange=async(evt)=>{
        setCity(evt.target.value);
    };

     let handleSubmit= async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
             let newInfo = await getWeatherInfo();
             updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }; 

    return(
<div className="searchBox">
     <form onSubmit={handleSubmit}>
     <TextField 
     id="City" 
     label="City Name"
      variant="outlined"
        required value={city}
        onChange={handleChange}
        />
     <br/>
     <br/>
     <Button 
     variant="contained" 
     type="submit">Search
      </Button>
      {error && <p style={{color:"red"}}>no such place</p>}
     </form>
</div>
    );
}

export default SearchBox;