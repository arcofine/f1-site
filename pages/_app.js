import SSRProvider from "react-bootstrap/SSRProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

export default function App({Component, pageProps}) {
       return (
              <SSRProvider>
                     <ThemeProvider
                            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
                            minBreakpoint="xxs">
                            <Component {...pageProps} />
                     </ThemeProvider>
              </SSRProvider>
       );
}
