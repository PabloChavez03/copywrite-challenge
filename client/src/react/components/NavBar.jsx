import React from "react";
import { Box, TextField, Button } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ display:'flex',marginTop:1 ,borderTop: 1, borderColor: "divider" }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" multiline sx={{marginRight:1}}/>
        <Button variant="outlined">Outlined</Button>
    </Box>
  );
}
