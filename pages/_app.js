import "../styles/globals.css";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
       palette: {
              mode: "dark",
       },
       breakpoints: {
              values: {
                     xs: 0,
                     sm: 640,
                     md: 1024,
                     lg: 1200,
                     xl: 1536,
              },
       },
});

export default function App({Component, pageProps}) {
       return (
              <ThemeProvider theme={darkTheme}>
                     <CssBaseline />
                     <Component {...pageProps} />
              </ThemeProvider>
       );
}
