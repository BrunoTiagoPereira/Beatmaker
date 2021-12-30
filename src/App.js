import Contact from "./views/Contact";
import Session from "./components/Session";
import {GlobalStyle} from "./styles";
import { ThemeProvider, createTheme } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      
        <Session color="#1e1e1e">
            asdasd
      </Session>
      <Session id="contact" color="#111111">
            <Contact/>
      </Session>
    </ThemeProvider>
   
  );
}


const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

export default App;
