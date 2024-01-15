import { Card, TextField } from "@mui/material";
import React from "react";

const BingoList = () => {
  const [bingo1, setBingo1] = React.useState<string>("");
  const [bingo2, setBingo2] = React.useState<string>("");
  const [bingo3, setBingo3] = React.useState<string>("");
  return (
    <Card
      sx={{
        display: "flex",
        background: "linear-gradient(180deg, #EEE2DE, #EAD196)",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <TextField
        id="filled-basic"
        label="1. Çinko"
        variant="filled"
        color="primary"
        focused={bingo1 != ""}
        value={bingo1}
        onChange={(e) => setBingo1(e.target.value)}
        inputProps={{ style: { fontSize: 30 } }}
      />
      <TextField
        id="filled-basic"
        label="2. Çinko"
        variant="filled"
        focused={bingo2 != ""}
        value={bingo2}
        onChange={(e) => setBingo2(e.target.value)}
        inputProps={{ style: { fontSize: 30 } }}
      />
      <TextField
        id="filled-basic"
        label="TOMBALA!"
        variant="filled"
        focused={bingo3 != ""}
        value={bingo3}
        onChange={(e) => setBingo3(e.target.value)}
        inputProps={{ style: { fontSize: 30 } }}
      />
    </Card>
  );
};

export default BingoList;
