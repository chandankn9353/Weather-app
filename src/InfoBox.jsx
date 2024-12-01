import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

function InfoBox({ info }) {
    const INIT_URL="https://plus.unsplash.com/premium_photo-1727489020273-2b0f3870e485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

const HOT_URL="https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const RAIN_URL="https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ?RAIN_URL
          :(info.temp>15)
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
     <p> Temperature={info.temp}</p>
     <p>Humidity={info.humidity}&deg;cel</p>
     <p>Min Temp={info.tempMin}&deg;cel</p>
     <p>Max Temp={info.tempMax}&deg;cel</p>
     <p>The Weather feels like={info.weather}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}
 export default InfoBox;