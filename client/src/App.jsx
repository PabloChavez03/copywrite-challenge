import { Container } from '@mui/material';

import NavBar from './react/components/NavBar';
import Texts from './react/components/Texts';

function App() {
  return (
    <Container maxWidth="md" sx={{display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <NavBar/>
        <Texts/>
    </Container>
  );
}

export default App;
