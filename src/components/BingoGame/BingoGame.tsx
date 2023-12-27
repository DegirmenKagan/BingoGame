import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import { IBingoItem } from "./BingoData";
import { Card, ThemeProvider } from "@mui/material";
import { bingoTheme } from "../CustomThemes";

const BingoGame = () => {
  const [numbers, setNumbers] = useState<IBingoItem[]>([]);

  useEffect(() => {
    const numbers: IBingoItem[] = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push({
        value: i,
        clicked: false,
      });
    }
    setNumbers(numbers);
  }, []);

  const handleClick = (index: number) => {
    setNumbers((prevNumbers) => {
      const updatedNumbers = [...prevNumbers];
      updatedNumbers[index].clicked = !updatedNumbers[index].clicked;
      return updatedNumbers;
    });
  };

  return (
    <Card
      sx={{
        width: "70%",
        // height: "80%",
        background: "linear-gradient(180deg, #EEE2DE, #EAD196)",
        boxShadow: 20,
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <ThemeProvider theme={bingoTheme}>
          {numbers.map((number, index) => (
            <Chip
              component={"div"}
              key={index}
              color={number.clicked ? "secondary" : "primary"}
              label={number.value}
              sx={{
                fontSize: 50,
                // padding: 3,
                color: number.clicked ? "gray" : "white",
                borderRadius: 20,
                width: "80px",
                height: "80px",
              }}
              onClick={() => handleClick(index)}
            />
          ))}
        </ThemeProvider>
      </Box>
    </Card>
  );
};

export default BingoGame;
