import BingoGame from "../BingoGame/BingoGame";
import "./Home.css";
const Home = () => {
  return (
    <div id="container" style={{ backgroundImage: "./assets/background1.jpg" }}>
      <h1>Tombala Oyunu</h1>
      <BingoGame />
      <h6>@degirmenkagan</h6>
    </div>
  );
};

export default Home;
