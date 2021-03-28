import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../theme";

interface _appProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<_appProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
