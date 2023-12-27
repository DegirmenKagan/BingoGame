import BingoGame from "../BingoGame/BingoGame";
import { useState, useEffect } from "react";
import "./Home.css";
import { Typography } from "@mui/material";
const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "url(src/assets/bg1.jpg)",
    "url(src/assets/bg2.jpg)",
    "url(src/assets/bg3.jpg)",
    "url(src/assets/bg4.jpg)",
    "url(src/assets/bg5.jpg)",
    "url(src/assets/bg6.jpg)",
    "url(src/assets/bg7.jpg)",
    "url(src/assets/bg8.jpg)",
    "url(src/assets/bg9.jpg)",
    "url(src/assets/bg10.jpg)",
    "url(src/assets/bg11.jpg)",
    "url(src/assets/bg12.jpg)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 30000); // 1 minute in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="container"
      style={{
        backgroundImage: backgrounds[backgroundIndex],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div id="header">
        <h1>Tombala Oyunu</h1>
      </div>
      <BingoGame />
      <Typography
        marginTop={5}
        sx={{ fontSize: 22, color: "white", WebkitTextStroke: "0.2px black" }}
      >
        @degirmenkagan
      </Typography>
    </div>
  );
};

export default Home;
