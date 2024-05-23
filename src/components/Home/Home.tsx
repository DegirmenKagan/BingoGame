import BingoGame from "../BingoGame/BingoGame";
import { useState, useEffect } from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import BingoList from "../BingoList";
const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "url(public/assets/bg1.jpg)",
    "url(public/assets/bg2.jpg)",
    "url(public/assets/bg3.jpg)",
    "url(public/assets/bg4.jpg)",
    "url(public/assets/bg5.jpg)",
    "url(public/assets/bg6.jpg)",
    "url(public/assets/bg7.jpg)",
    "url(public/assets/bg8.jpg)",
    "url(public/assets/bg9.jpg)",
    "url(public/assets/bg10.jpg)",
    "url(public/assets/bg11.jpg)",
    "url(public/assets/bg12.jpg)",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 50,
        }}
      >
        <BingoGame />
        <BingoList />
      </div>
      <Typography
        marginTop={5}
        sx={{ fontSize: 25, color: "#", WebkitTextStroke: "0.4px black" }}
      >
        @degirmenkagan
      </Typography>
    </div>
  );
};

export default Home;
