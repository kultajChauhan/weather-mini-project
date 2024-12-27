import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function InfoBox({ info }) {
  let INIT_URL =
    "https://plus.unsplash.com/premium_photo-1714910676815-9fe1d94424bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3R5JTIwZW52aXJvbWVudHxlbnwwfHwwfHx8MA%3D%3D";

  let rain =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJhaW55fGVufDB8fDB8fHww";

  let hot =
    "https://images.unsplash.com/photo-1491929007750-dce8ba76e610?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHN1bW1lciUyMHNlYXNzaW9ufGVufDB8fDB8fHww";

  let humidity =
    "https://images.unsplash.com/photo-1621923446833-dd94880e53fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGh1bWlkaXR5JTIwc2Vhc3Npb258ZW58MHx8MHx8fDA%3D";

  let winter =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwc2Vhc3Npb258ZW58MHx8MHx8fDA%3D";

  return (
    <>
      <div className="infoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.humidity > 80 ? rain : info.temp > 15 ? hot : winter}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <p>Temperature : {info.temp}&deg;C</p>
                <p>Humidity : {info.humidity}</p>
                <p>Min Temp : {info.tempMin}&deg;C</p>
                <p>Max Temp : {info.tempMax}&deg;C</p>
                <p>The Weather feels like {info.feels_like} &deg;C</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default InfoBox;
