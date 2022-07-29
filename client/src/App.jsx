import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTexts } from "./redux/actions-creators";

import { Container, Typography } from "@mui/material";

import NavBar from "./react/components/NavBar";
import Texts from "./react/components/Texts";

function App() {
  const dispatch = useDispatch();
  const texts = useSelector((state) => state.texts);


  useEffect(() => {
    dispatch(getTexts());
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavBar />
      <Typography variant="h4" component="h2" sx={{ marginTop: 2 }}>
        Results
      </Typography>

      {texts.length === 0 ? (
        <Typography variant="h4" component="h2" sx={{ marginTop: 20, color: '#33333377' }}>
          Add texts
        </Typography>
      ) : (
        <Texts texts={texts} />
      )}
    </Container>
  );
}

export default App;
