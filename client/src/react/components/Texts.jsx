import React from "react";
import { Box, Card } from "@mui/material";
import Text from './Text';


export default function Texts({ texts }) {
  return (
    <Box sx={{ minWidth: 275, marginTop: 2 }}>
      <Card variant="outlined">
        {
          texts.map((el) => (
            <div key={el._id}>
              <Text text={el.text} id={el._id}/>
            </div>
          ))
        }
      </Card>
    </Box>
  );
}
