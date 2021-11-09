import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider, theme } from "~/theme";
import { GlobalStyle } from "~/theme/global-style";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>

    <style jsx global>{`
      @font-face {
        font-family: "Roboto";
        src: url("/fonts/Roboto-Regular.ttf");
      }

      @font-face {
        font-family: "RobotoBlack";
        src: url("/fonts/Roboto-Black.ttf");
      }

      @font-face {
        font-family: "RobotoMedium";
        src: url("/fonts/Roboto-Medium.ttf");
      }

      @font-face {
        font-family: "RobotoBold";
        src: url("/fonts/Roboto-Bold.ttf");
      }

      @font-face {
        font-family: "OpenSansSemibold";
        src: url("/fonts/OpenSans-SemiBold.ttf");
      }
    `}</style>
  </>
);

export default App;
