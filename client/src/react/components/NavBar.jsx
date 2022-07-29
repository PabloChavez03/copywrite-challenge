import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Box, TextField, Button } from "@mui/material";
import { postTexto,getTexts } from "../../redux/actions-creators";

export default function NavBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(postTexto(text));
    setTimeout(() => getTexts(), 1000)
    setText('');
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 1,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Insert text"
        variant="outlined"
        multiline
        sx={{ marginRight: 1 }}
        value={text}
        onChange={handleChange}
        autoFocus
      />
      <Button variant="outlined" onClick={handleSend} disabled={text.length === 0}>
        Send
      </Button>
    </Box>
  );
}
